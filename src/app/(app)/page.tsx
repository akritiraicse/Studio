import React from 'react';
import { PageHeader } from '@/components/app/page-header';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter, MapPin } from 'lucide-react';
import { categories, skills, users } from '@/lib/data';
import { SkillCard } from '@/components/app/skill-card';

export default function BrowseSkillsPage() {
  return (
    <div className="flex flex-col h-full">
      <PageHeader title="Browse Skills" />
      <main className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
        <div className="bg-card p-4 rounded-lg border shadow-sm">
            <div className="grid gap-4 md:grid-cols-3">
                <div className="relative md:col-span-2">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input placeholder="Search for skills (e.g. 'Guitar', 'Cooking')..." className="pl-10 h-11 text-base" />
                </div>
                <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input placeholder="Location" className="pl-10 h-11 text-base" />
                </div>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2">
                <Button variant="outline" className="h-11">
                    <Filter className="mr-2 h-4 w-4" />
                    Filters
                </Button>
                <div className="flex flex-wrap items-center gap-2">
                    {categories.map((category) => (
                        <Button key={category.id} variant="ghost" className="h-11 hover:bg-primary/10">
                            <category.icon className="mr-2 h-5 w-5 text-primary" />
                            {category.name}
                        </Button>
                    ))}
                </div>
            </div>
        </div>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Featured Skills</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => {
              const user = users.find((u) => u.id === skill.userId);
              if (!user) return null;
              return <SkillCard key={skill.id} skill={skill} user={user} />;
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
