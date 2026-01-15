"use client"
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { UserPlus } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Register() {
  // const navigate = useNavigate();
  // const { signUp } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [fieldErrors, setFieldErrors] = useState<{
    username?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});

  const validateUsername = (username: string) => {
    if (username.length < 3) {
      return 'Username must be at least 3 characters';
    }
    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
      return 'Username can only contain letters, numbers, and underscores';
    }
    return null;
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }
    return null;
  };

  const validatePassword = (password: string) => {
    if (password.length < 8) {
      return 'Password must be at least 8 characters';
    }
    if (!/(?=.*[a-zA-Z])(?=.*\d)/.test(password)) {
      return 'Password must contain both letters and numbers';
    }
    return null;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    setFieldErrors({ ...fieldErrors, [field]: undefined });
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setFieldErrors({});

    const usernameError = validateUsername(formData.username);
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);
    const confirmPasswordError =
      formData.password !== formData.confirmPassword
        ? 'Passwords do not match'
        : null;

    if (usernameError || emailError || passwordError || confirmPasswordError) {
      setFieldErrors({
        username: usernameError || undefined,
        email: emailError || undefined,
        password: passwordError || undefined,
        confirmPassword: confirmPasswordError || undefined,
      });
      return;
    }

    setLoading(true);

    // const { error } = await signUp(
    //   formData.email,
    //   formData.password,
    //   formData.username
    // );

    // if (error) {
    //   setError(error.message);
    //   setLoading(false);
    // } else {
    //   navigate('/profile');
    // }
  };
  return (
    <div className='w-full h-screen  flex justify-center items-center'>
      <Card className="w-full  max-w-md shadow-xl">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-primary text-primary-foreground p-3 rounded-full">
              <UserPlus className="h-6 w-6" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-center">
            Создать аккаунт
          </CardTitle>
          <CardDescription className="text-center">
            Введите ваши данные для регистрации
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            {/* {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )} */}

            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="john_doe"
                value={formData.username}
                onChange={(e) => handleInputChange('username', e.target.value)}
                disabled={loading}
              />
              {fieldErrors.username && (
                <p className="text-sm text-destructive">
                  {fieldErrors.username}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                disabled={loading}
              />
              {fieldErrors.email && (
                <p className="text-sm text-destructive">{fieldErrors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Пароль</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                disabled={loading}
              />
              {fieldErrors.password && (
                <p className="text-sm text-destructive">
                  {fieldErrors.password}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Подтвердите пароль</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={(e) =>
                  handleInputChange('confirmPassword', e.target.value)
                }
                disabled={loading}
              />
              {fieldErrors.confirmPassword && (
                <p className="text-sm text-destructive">
                  {fieldErrors.confirmPassword}
                </p>
              )}
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Создание аккаунта...' : 'Создать аккаунт'}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-sm text-center text-muted-foreground">
             Уже есть аккаунт?{' '}
            <Link
              href="/login"
              className="text-primary hover:underline font-medium"
            >
              Войти
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
