import React from 'react';
import Image from 'next/image';
import { PageHeader } from '@/components/app/page-header';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Star, Edit, MapPin, Award } from 'lucide-react';
import { users, skills as allSkills, achievements, reviews } from '@/lib/data';

const currentUser = users[0];
const userSkills = currentUser.skillsToTeach.map(id => allSkills.find(s => s.id === id)).filter(Boolean) as (typeof allSkills[0])[];
const userWants = currentUser.skillsToLearn.map(id => allSkills.find(s => s.id === id)).filter(Boolean) as (typeof allSkills[0])[];

export default function ProfilePage() {
  return (
    <div className="flex flex-col h-full">
      <PageHeader title="My Profile" />
      <main className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
        <Card className="overflow-hidden">
          <div className="h-32 bg-gradient-to-r from-primary/50 to-accent/50" />
          <CardContent className="p-6 pt-0">
            <div className="flex flex-col md:flex-row items-start gap-6 -mt-16">
              <Avatar className="w-28 h-28 border-4 border-background shadow-lg">
                <AvatarImage src={currentUser.avatarUrl} alt={currentUser.name} />
                <AvatarFallback className="text-4xl">{currentUser.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 pt-16">
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-bold">{currentUser.name}</h2>
                  <Button variant="outline" size="sm"><Edit className="w-4 h-4 mr-2" />Edit Profile</Button>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground mt-1">
                  <MapPin className="w-4 h-4" />
                  <span>{currentUser.location}</span>
                </div>
                <p className="mt-4 text-foreground/80">{currentUser.bio}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="skills">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          
          <TabsContent value="skills">
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Skills I Can Teach</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {userSkills.map(skill => (
                    <div key={skill.id}>
                      <div className="flex justify-between mb-1">
                        <h4 className="font-medium">{skill.title}</h4>
                        <span className="text-sm text-muted-foreground">Expert</span>
                      </div>
                      <Progress value={90} aria-label={`${skill.title} expert level`} />
                    </div>
                  ))}
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Skills I Want to Learn</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {userWants.map(skill => (
                    <div key={skill.id}>
                      <div className="flex justify-between mb-1">
                        <h4 className="font-medium">{skill.title}</h4>
                        <span className="text-sm text-muted-foreground">Beginner</span>
                      </div>
                      <Progress value={20} aria-label={`${skill.title} beginner level`} />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="achievements">
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Badges & Achievements</CardTitle>
                <CardDescription>Recognition for your journey on SkillSwap.</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {achievements.map(ach => (
                  <div key={ach.id} className="flex flex-col items-center text-center p-4 bg-card hover:bg-accent/30 rounded-lg border transition-all hover:scale-105">
                     <div className="p-4 bg-gradient-primary-accent text-primary-foreground rounded-full mb-3">
                       <ach.icon className="w-8 h-8" />
                    </div>
                    <h4 className="font-semibold">{ach.name}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{ach.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews">
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Reviews</CardTitle>
                <CardDescription>What others say about their skill swaps with {currentUser.name}.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {reviews.map(review => {
                  const reviewer = users.find(u => u.id === review.reviewerId);
                  return (
                    <div key={review.id} className="flex gap-4">
                      <Avatar>
                        <AvatarImage src={reviewer?.avatarUrl} alt={reviewer?.name} />
                        <AvatarFallback>{reviewer?.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold">{reviewer?.name}</h4>
                          <span className="text-xs text-muted-foreground">{review.date}</span>
                        </div>
                        <div className="flex items-center gap-0.5 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-amber-400 fill-amber-400' : 'text-muted-foreground/50'}`} />
                          ))}
                        </div>
                        <p className="mt-2 text-sm text-foreground/90">{review.comment}</p>
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
