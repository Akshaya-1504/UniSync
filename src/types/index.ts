
export interface Event {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  location: string;
  organizer: string;
  category: EventCategory;
  department: Department;
  image?: string;
  attendees: string[];
  isFeatured?: boolean;
}

export type EventCategory = 
  | 'workshop'
  | 'sports'
  | 'academic'
  | 'cultural'
  | 'social'
  | 'career';

export type Department = 
  | 'computer-science'
  | 'engineering'
  | 'arts'
  | 'business'
  | 'science'
  | 'general';

export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: Date;
  isPriority: boolean;
  category: 'academic' | 'administrative' | 'events' | 'emergency';
}

export interface UserPreferences {
  id: string;
  bookmarkedEvents: string[];
  categories: EventCategory[];
  departments: Department[];
}
