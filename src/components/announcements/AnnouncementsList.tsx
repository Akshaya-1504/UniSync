
import React, { useState } from 'react';
import AnnouncementCard from './AnnouncementCard';
import { Announcement } from '@/types';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface AnnouncementsListProps {
  announcements: Announcement[];
  title?: string;
}

const AnnouncementsList = ({ announcements, title = "Announcements" }: AnnouncementsListProps) => {
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  
  const filteredAnnouncements = React.useMemo(() => {
    // Sort by priority first, then by date (most recent first)
    const sorted = [...announcements].sort((a, b) => {
      if (a.isPriority && !b.isPriority) return -1;
      if (!a.isPriority && b.isPriority) return 1;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
    
    // Then filter by category if needed
    if (categoryFilter === 'all') {
      return sorted;
    }
    
    return sorted.filter(announcement => announcement.category === categoryFilter);
  }, [announcements, categoryFilter]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{title}</h2>
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="academic">Academic</SelectItem>
            <SelectItem value="administrative">Administrative</SelectItem>
            <SelectItem value="events">Events</SelectItem>
            <SelectItem value="emergency">Emergency</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      {filteredAnnouncements.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No announcements in this category.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredAnnouncements.map((announcement) => (
            <AnnouncementCard key={announcement.id} announcement={announcement} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AnnouncementsList;
