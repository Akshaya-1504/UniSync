
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <div className="min-h-[60vh] flex items-center justify-center bg-muted/50">
          <div className="text-center p-8 max-w-md">
            <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Oops! The page you are looking for doesn't exist.
            </p>
            <Button onClick={() => navigate('/')} size="lg">
              Return to Home
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
