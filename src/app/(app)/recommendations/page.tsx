import React from 'react';
import { PageHeader } from '@/components/app/page-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RecommendationForm } from '@/components/app/recommendation-form';
import { skills, users } from '@/lib/data';

export default function RecommendationsPage() {
  const currentUser = users[0];
  const userProfileText = `Name: ${currentUser.name}\nBio: ${currentUser.bio}\nSkills to Teach: ${currentUser.skillsToTeach.map(id => skills.find(s=>s.id === id)?.title).join(', ')}\nSkills to Learn: ${currentUser.skillsToLearn.map(id => skills.find(s=>s.id === id)?.title).join(', ')}`;
  const availableSkillsText = skills.map(skill => {
    const user = users.find(u => u.id === skill.userId);
    return `${skill.title} (taught by ${user?.name})`;
  }).join('\n');

  return (
    <div className="flex flex-col h-full">
      <PageHeader title="AI Skill Match" />
      <main className="flex-1 overflow-y-auto p-4 md:p-6">
        <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Skill Match Recommendation</CardTitle>
            <CardDescription>
              Let our AI find the perfect skill swap for you. Your profile is pre-filled, but you can edit it.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RecommendationForm 
              userProfile={userProfileText}
              availableSkills={availableSkillsText}
            />
          </CardContent>
        </Card>
        </div>
      </main>
    </div>
  );
}
