import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';
import type { Skill, User } from '@/lib/types';
import { categories } from '@/lib/data';
import { Button } from '../ui/button';

type SkillCardProps = {
  skill: Skill;
  user: User;
};

export function SkillCard({ skill, user }: SkillCardProps) {
  const category = categories.find((c) => c.id === skill.category);
  const CategoryIcon = category?.icon;

  return (
    <Card className="flex flex-col overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={skill.imageUrl}
            alt={skill.title}
            fill
            className="object-cover"
            data-ai-hint={skill.imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-1">
        <div className="flex items-start justify-between">
            {category && CategoryIcon && (
                <Badge variant="outline" className="mb-2">
                    <CategoryIcon className="h-3 w-3 mr-1" />
                    {category.name}
                </Badge>
            )}
            <div className="flex items-center gap-1 text-sm text-amber-500">
                <Star className="w-4 h-4 fill-current" />
                <span>{skill.rating.toFixed(1)}</span>
                <span className="text-muted-foreground">({skill.reviewCount})</span>
            </div>
        </div>
        <h3 className="text-lg font-semibold leading-tight mb-2 truncate">{skill.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{skill.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={user.avatarUrl} alt={user.name} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{user.name}</p>
            <p className="text-xs text-muted-foreground">{user.location}</p>
          </div>
        </div>
        <Button size="sm" variant="outline">Learn</Button>
      </CardFooter>
    </Card>
  );
}
