'use client';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { User, Mail, LogOut, Save, Calendar } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import DashboardNav from '@/components/dashboard/DashboardNav';
import ProfileForm from '@/components/dashboard/ProfileForm';
import ServicesList from '@/components/dashboard/ServicesList';
import CasesList from '@/components/dashboard/CasesList';
import ScheduleGrid from '@/components/dashboard/ScheduleGrid';

export default function Profile() {
  const router = useRouter();
  const {
    user,
    profile,
    signOut,
    updateProfile,
    loading: authLoading,
  } = useAuth();
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<
    'profile' | 'services' | 'schedule'
  >('profile');
  const [formData, setFormData] = useState({
    username: '',
    avatar: '',
  });

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/login');
    }
  }, [user, authLoading, router]);

  useEffect(() => {
    if (profile) {
      setFormData({
        username: profile.username,
        avatar: profile.avatar || '',
      });
    }
  }, [profile]);

  const handleSignOut = async () => {
    await signOut();
    router.push('/login');
  };

  const handleSave = async () => {
    setError(null);
    setSuccess(false);

    if (formData.username.length < 3) {
      setError('Username must be at least 3 characters');
      return;
    }

    setLoading(true);

    const { error } = await updateProfile(formData.username, formData.avatar);

    if (error) {
      setError(error.message);
    } else {
      setSuccess(true);
      setEditing(false);
      setTimeout(() => setSuccess(false), 3000);
    }

    setLoading(false);
  };

  const handleCancel = () => {
    if (profile) {
      setFormData({
        username: profile.username,
        avatar: profile.avatar || '',
      });
    }
    setEditing(false);
    setError(null);
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
        <div className="animate-pulse text-lg">Загрузке...</div>
      </div>
    );
  }

  if (!profile) {
    return null;
  }

  const initials = profile.username
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 p-4">
      <div className="max-w-4xl mx-auto pt-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Профиль</h1>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleSignOut}>
              <LogOut className="mr-2 h-4 w-4" />
              Выход
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-1 bg-white dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800 ">
            <CardHeader>
              <CardTitle>Аватар</CardTitle>
            </CardHeader>
          </Card>
          <Card className="md:col-span-2 bg-white dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800">
            <CardHeader>
              <CardTitle>Информация об аккаунт</CardTitle>
              <CardDescription>
                Управление вашей информацией профиля
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {success && (
                <Alert>
                  <AlertDescription>Профиль успешно обновлен!</AlertDescription>
                </Alert>
              )}
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">
                    <Mail className="inline h-4 w-4 mr-2" />
                    Email
                  </Label>
                  <Input
                    id="email"
                    value={profile.email}
                    disabled
                    className="bg-muted"
                  />
                  <p className="text-xs text-muted-foreground">
                    Email не может быть изменен
                  </p>
                </div>

                <Separator />
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-2 h-4 w-4" />В проекте с{' '}
                  {new Date(profile.created_at).toLocaleDateString()}
                </div>
              </div>

              <div className="flex gap-2">
                {!editing ? (
                  <Button onClick={() => setEditing(true)} className="w-full">
                    Изменить профиль
                  </Button>
                ) : (
                  <>
                    <Button
                      onClick={handleSave}
                      disabled={loading}
                      className="flex-1"
                    >
                      <Save className="mr-2 h-4 w-4" />
                      {loading ? 'Сохранение...' : 'Сохранить изменения'}
                    </Button>
                    <Button
                      variant="outline"
                      onClick={handleCancel}
                      disabled={loading}
                    >
                      Назад
                    </Button>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="min-h-screen mt-3 rounded-lg bg-gray-100 dark:bg-gray-950  border border-gray-200 dark:border-gray-800">

          <DashboardNav activeTab={activeTab} onTabChange={setActiveTab} />

          <main className="max-w-4xl mx-auto px-4 py-6 g">
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <ProfileForm />
              </div>
            )}

            {activeTab === 'services' && (
              <div className="space-y-6">
                <ServicesList />
                <CasesList />
              </div>
            )}

            {activeTab === 'schedule' && (
              <div className="space-y-6">
                <ScheduleGrid />
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
