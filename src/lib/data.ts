import type { User, Skill, Category, Achievement, Review } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Code2, ChefHat, Guitar, Paintbrush, BookOpen, Award, Star, Languages } from 'lucide-react';

const userAvatars = PlaceHolderImages.filter(img => img.id.startsWith('user'));
const skillImages = PlaceHolderImages.filter(img => img.id.startsWith('skill'));

export const users: User[] = [
  {
    id: 'user-1',
    name: 'Alex Johnson',
    avatarUrl: userAvatars[0].imageUrl,
    location: 'San Francisco, CA',
    bio: 'Software engineer by day, chef by night. I love sharing my passion for coding and cooking.',
    skillsToTeach: ['skill-1', 'skill-2'],
    skillsToLearn: ['skill-3'],
  },
  {
    id: 'user-2',
    name: 'Maria Garcia',
    avatarUrl: userAvatars[1].imageUrl,
    location: 'New York, NY',
    bio: 'Graphic designer and musician. Looking to learn a new language and can teach you how to play the guitar.',
    skillsToTeach: ['skill-3'],
    skillsToLearn: ['skill-4'],
  },
  {
    id: 'user-3',
    name: 'Sam Chen',
    avatarUrl: userAvatars[2].imageUrl,
    location: 'Austin, TX',
    bio: 'Digital artist and lifelong learner. I can teach digital painting and would love to learn some basic coding.',
    skillsToTeach: ['skill-5'],
    skillsToLearn: ['skill-1'],
  },
  {
    id: 'user-4',
    name: 'Priya Patel',
    avatarUrl: userAvatars[3].imageUrl,
    location: 'Chicago, IL',
    bio: 'A polyglot who loves literature. I can help you with French or Spanish.',
    skillsToTeach: ['skill-4'],
    skillsToLearn: ['skill-2'],
  },
];

export const categories: Category[] = [
  { id: 'cat-1', name: 'Technology', icon: Code2 },
  { id: 'cat-2', name: 'Cooking', icon: ChefHat },
  { id: 'cat-3', name: 'Music', icon: Guitar },
  { id: 'cat-4', name: 'Languages', icon: Languages },
  { id: 'cat-5', name: 'Art & Design', icon: Paintbrush },
  { id: 'cat-6', name: 'Literature', icon: BookOpen },
];

export const skills: Skill[] = [
  {
    id: 'skill-1',
    title: 'React for Beginners',
    description: 'Learn the fundamentals of React to build modern web applications.',
    imageUrl: skillImages[0].imageUrl,
    imageHint: skillImages[0].imageHint,
    category: 'cat-1',
    userId: 'user-1',
    rating: 4.9,
    reviewCount: 32,
    availability: 'weekends',
  },
  {
    id: 'skill-2',
    title: 'Authentic Italian Pasta',
    description: 'Discover the secrets to making fresh pasta from scratch.',
    imageUrl: skillImages[1].imageUrl,
    imageHint: skillImages[1].imageHint,
    category: 'cat-2',
    userId: 'user-1',
    rating: 4.8,
    reviewCount: 45,
    availability: 'weekdays',
  },
  {
    id: 'skill-3',
    title: 'Acoustic Guitar Basics',
    description: 'Start your musical journey by learning basic chords and strumming patterns.',
    imageUrl: skillImages[2].imageUrl,
    imageHint: skillImages[2].imageHint,
    category: 'cat-3',
    userId: 'user-2',
    rating: 5.0,
    reviewCount: 60,
    availability: 'flexible',
  },
  {
    id: 'skill-4',
    title: 'Conversational Spanish',
    description: 'Learn practical Spanish for travel and daily conversations.',
    imageUrl: skillImages[3].imageUrl,
    imageHint: skillImages[3].imageHint,
    category: 'cat-4',
    userId: 'user-4',
    rating: 4.9,
    reviewCount: 55,
    availability: 'weekends',
  },
  {
    id: 'skill-5',
    title: 'Digital Painting in Procreate',
    description: 'Master the tools and techniques of digital illustration on your iPad.',
    imageUrl: skillImages[4].imageUrl,
    imageHint: skillImages[4].imageHint,
    category: 'cat-5',
    userId: 'user-3',
    rating: 4.9,
    reviewCount: 28,
    availability: 'flexible',
  },
  {
    id: 'skill-6',
    title: 'Advanced Javascript',
    description: 'Dive deep into closures, prototypes, and asynchronous JavaScript.',
    imageUrl: skillImages[5].imageUrl,
    imageHint: skillImages[5].imageHint,
    category: 'cat-1',
    userId: 'user-1',
    rating: 4.7,
    reviewCount: 19,
    availability: 'weekdays',
  },
];

export const achievements: Achievement[] = [
  { id: 'ach-1', name: 'First Swap', description: 'Completed your first skill exchange.', icon: Award, dateEarned: '2023-05-10' },
  { id: 'ach-2', name: 'Knowledge Sharer', description: 'Taught a skill 5 times.', icon: Award, dateEarned: '2023-08-22' },
  { id: 'ach-3', name: 'Polymath', description: 'Learned 3 different skills.', icon: Award, dateEarned: '2023-11-01' },
  { id: 'ach-4', name: 'Top Teacher', description: 'Received a 5-star rating 10 times.', icon: Star, dateEarned: '2024-01-15' },
];

export const reviews: Review[] = [
    { id: 'rev-1', reviewerId: 'user-2', rating: 5, comment: 'Alex is an amazing and patient teacher. I learned so much about React in just one session!', date: '2023-09-15' },
    { id: 'rev-2', reviewerId: 'user-3', rating: 5, comment: 'The pasta making session was fantastic. Highly recommend Alex!', date: '2023-10-02' },
];
