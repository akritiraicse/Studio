import React from 'react';
import { PageHeader } from '@/components/app/page-header';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Search, Send } from 'lucide-react';
import { users } from '@/lib/data';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function MessagesPage() {
  const activeChatUser = users[1];
  const contacts = users.filter(u => u.id !== users[0].id);

  return (
    <div className="flex flex-col h-full">
      <PageHeader title="Messages" />
      <main className="flex-1 overflow-hidden p-4 md:p-6">
        <Card className="h-full w-full border-0 md:border md:grid md:grid-cols-3 lg:grid-cols-4 shadow-none md:shadow-sm">
          <div className="flex flex-col border-r h-full lg:col-span-1">
            <div className="p-4 border-b">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search contacts..." className="pl-9" />
              </div>
            </div>
            <ScrollArea className="flex-1">
              {contacts.map((user, index) => (
                <div key={user.id} className={`flex items-center gap-3 p-4 cursor-pointer hover:bg-accent ${index === 0 ? 'bg-muted' : ''}`}>
                  <Avatar>
                    <AvatarImage src={user.avatarUrl} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 overflow-hidden">
                    <p className="font-semibold truncate">{user.name}</p>
                    <p className={`text-sm truncate ${index === 0 ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {index === 0 ? 'Sounds great! See you then.' : 'Perfect, I can teach you that.'}
                    </p>
                  </div>
                </div>
              ))}
            </ScrollArea>
          </div>
          <div className="hidden md:flex flex-col col-span-2 lg:col-span-3 h-full">
            <div className="flex items-center gap-3 p-4 border-b">
              <Avatar>
                <AvatarImage src={activeChatUser.avatarUrl} alt={activeChatUser.name} />
                <AvatarFallback>{activeChatUser.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <h3 className="text-lg font-semibold">{activeChatUser.name}</h3>
            </div>
            <ScrollArea className="flex-1 p-6 space-y-4">
              <div className="flex items-end gap-3 justify-end">
                <div className="rounded-lg bg-primary text-primary-foreground p-3 max-w-xs lg:max-w-md">
                  <p>Hey Maria! I saw you want to learn Spanish. I'm a native speaker and would love to help. I'm interested in learning guitar.</p>
                </div>
              </div>
              <div className="flex items-end gap-3">
                 <Avatar className="h-8 w-8">
                  <AvatarImage src={activeChatUser.avatarUrl} alt={activeChatUser.name} />
                  <AvatarFallback>{activeChatUser.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="rounded-lg bg-muted p-3 max-w-xs lg:max-w-md">
                  <p>Hi Alex! That would be amazing. I can definitely teach you guitar basics. When are you free?</p>
                </div>
              </div>
               <div className="flex items-end gap-3 justify-end">
                <div className="rounded-lg bg-primary text-primary-foreground p-3 max-w-xs lg:max-w-md">
                  <p>I'm free this weekend. How about Saturday afternoon at a cafe downtown?</p>
                </div>
              </div>
               <div className="flex items-end gap-3">
                 <Avatar className="h-8 w-8">
                  <AvatarImage src={activeChatUser.avatarUrl} alt={activeChatUser.name} />
                  <AvatarFallback>{activeChatUser.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="rounded-lg bg-muted p-3 max-w-xs lg:max-w-md">
                  <p>Sounds great! See you then.</p>
                </div>
              </div>
            </ScrollArea>
            <div className="p-4 border-t mt-auto">
              <div className="relative">
                <Input placeholder="Type a message..." className="pr-12 h-11" />
                <Button size="icon" className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 bg-accent hover:bg-accent/90">
                  <Send className="h-4 w-4 text-accent-foreground" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
}
