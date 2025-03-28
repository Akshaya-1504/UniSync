
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, Calendar, Home, Menu, Moon, Search, Sun, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';

const Navbar = () => {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize dark mode based on user preference or system preference
  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true' || 
      (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Handle dark mode toggle
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('darkMode', String(newDarkMode));
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4 md:px-6">
        <div className="flex items-center gap-2 md:gap-4">
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          <div className="flex items-center gap-2" onClick={() => navigate('/')} role="button">
            <div className="hidden md:flex">
              <div className="bg-primary text-white font-bold p-2 rounded-l-md">
                Uni
              </div>
              <div className="bg-accent text-white font-bold p-2 rounded-r-md">
                Sync
              </div>
            </div>
            <span className="md:hidden font-bold text-xl gradient-text">US</span>
          </div>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <div className="hidden md:flex relative w-96">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search events, announcements..."
              className="w-full pl-8"
            />
          </div>
          <nav className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Home"
              className="hidden md:flex"
              onClick={() => navigate('/')}
            >
              <Home className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Calendar"
              className="hidden md:flex"
              onClick={() => navigate('/calendar')}
            >
              <Calendar className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Notifications"
              className="hidden md:flex"
            >
              <Bell className="h-5 w-5" />
            </Button>
            <div className="flex items-center mr-2">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleDarkMode} 
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <User className="h-5 w-5" />
                  <span className="sr-only">User menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>My Events</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Sign Out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
