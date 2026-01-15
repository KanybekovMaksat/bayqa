'use client';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/login');
    }
  }, [loading, user, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
        <div className="animate-pulse text-lg">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null; 
  }

  return <>{children}</>;
}
