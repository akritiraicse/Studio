'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { skillMatchRecommendation, SkillMatchRecommendationOutput } from '@/ai/flows/skill-match-recommendation';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Loader2 } from 'lucide-react';

const formSchema = z.object({
  userProfile: z.string().min(10, { message: 'Please describe your profile in at least 10 characters.' }),
  availableSkills: z.string().min(10, { message: 'Please provide some available skills.' }),
});

type RecommendationFormProps = {
  userProfile: string;
  availableSkills: string;
};

export function RecommendationForm({ userProfile, availableSkills }: RecommendationFormProps) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SkillMatchRecommendationOutput | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userProfile: userProfile || '',
      availableSkills: availableSkills || '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setResult(null);
    try {
      const recommendation = await skillMatchRecommendation(values);
      setResult(recommendation);
    } catch (error) {
      console.error('Error getting recommendation:', error);
      toast({
        variant: 'destructive',
        title: 'An error occurred',
        description: 'Failed to get skill match recommendations. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="userProfile"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Profile</FormLabel>
                <FormControl>
                  <Textarea placeholder="Tell us about your skills and interests..." rows={6} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="availableSkills"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Available Skills in Community</FormLabel>
                <FormControl>
                  <Textarea placeholder="List skills available for swapping..." rows={6} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
            {loading ? 'Analyzing...' : 'Get Recommendations'}
          </Button>
        </form>
      </Form>

      {result && (
        <Card className="mt-6 bg-accent/30 border-accent">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <Sparkles className="text-accent" />
                Suggested Matches for You
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="whitespace-pre-wrap">{result.suggestedMatches}</p>
          </CardContent>
        </Card>
      )}
    </>
  );
}
