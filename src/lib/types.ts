export type User = {
  id: string;
  name: string;
  avatarUrl: string;
  location: string;
  bio: string;
  skillsToTeach: string[];
  skillsToLearn: string[];
};

export type Category = {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
};

export type Skill = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  category: string;
  userId: string;
  rating: number;
  reviewCount: number;
  availability: 'weekends' | 'weekdays' | 'flexible';
};

export type Review = {
  id: string;
  reviewerId: string;
  rating: number;
  comment: string;
  date: string;
};

export type Achievement = {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  dateEarned: string;
};
