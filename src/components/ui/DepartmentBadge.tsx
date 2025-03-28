
import React from 'react';
import { cn } from '@/lib/utils';
import { Department } from '@/types';

interface DepartmentBadgeProps {
  department: Department;
  className?: string;
}

const departmentStyles: Record<Department, string> = {
  'computer-science': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300',
  'engineering': 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300',
  'arts': 'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-300',
  'business': 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300',
  'science': 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300',
  'general': 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300',
};

const departmentLabels: Record<Department, string> = {
  'computer-science': 'Computer Science',
  'engineering': 'Engineering',
  'arts': 'Arts',
  'business': 'Business',
  'science': 'Science',
  'general': 'General',
};

const DepartmentBadge = ({ department, className }: DepartmentBadgeProps) => {
  return (
    <span className={cn('category-badge', departmentStyles[department], className)}>
      {departmentLabels[department]}
    </span>
  );
};

export default DepartmentBadge;
