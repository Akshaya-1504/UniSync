
import React from 'react';
import { format } from 'date-fns';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Announcement } from '@/types';
import { AlertTriangle, Bell, Calendar, FileText } from 'lucide-react';

interface AnnouncementCardProps {
  announcement: Announcement;
}

const categoryIcons = {
  academic: <Calendar className="h-5 w-5" />,
  administrative: <FileText className="h-5 w-5" />,
  events: <Bell className="h-5 w-5" />,
  emergency: <AlertTriangle className="h-5 w-5" />,
};

const categoryStyles = {
  academic: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
  administrative: 'bg-gray-100 text-gray-800 dark:bg-gray-800/30 dark:text-gray-300',
  events: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
  emergency: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
};

const AnnouncementCard = ({ announcement }: AnnouncementCardProps) => {
  const { title, content, date, category, isPriority } = announcement;

  return (
    <Card className={cn(
      "animate-fade-in overflow-hidden",
      isPriority && "border-l-4 border-l-campus-gold"
    )}>
      <CardHeader className="pb-2 flex flex-row justify-between items-start">
        <div>
          <div className="flex items-center gap-2">
            <div className={cn(
              "p-1.5 rounded", 
              categoryStyles[category]
            )}>
              {categoryIcons[category]}
            </div>
            <h3 className="text-lg font-semibold">
              {title}
              {isPriority && (
                <span className="ml-2 bg-campus-gold/20 text-campus-blue text-xs px-2 py-0.5 rounded-full">
                  Important
                </span>
              )}
            </h3>
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            Posted on {format(date, 'MMM d, yyyy')}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{content}</p>
      </CardContent>
    </Card>
  );
};

export default AnnouncementCard;
