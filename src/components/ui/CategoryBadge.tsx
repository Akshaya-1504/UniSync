
import React from 'react';
import { cn } from '@/lib/utils';
import { EventCategory } from '@/types';

interface CategoryBadgeProps {
  category: EventCategory;
  className?: string;
}

const categoryStyles: Record<EventCategory, string> = {
  workshop: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
  sports: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
  academic: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
  cultural: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300',
  social: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
  career: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300',
};

const categoryLabels: Record<EventCategory, string> = {
  workshop: 'Workshop',
  sports: 'Sports',
  academic: 'Academic',
  cultural: 'Cultural',
  social: 'Social',
  career: 'Career',
};

const CategoryBadge = ({ category, className }: CategoryBadgeProps) => {
  return (
    <span className={cn('category-badge', categoryStyles[category], className)}>
      {categoryLabels[category]}
    </span>
  );
};

export default CategoryBadge;
