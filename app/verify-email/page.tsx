import { CheckCircle2Icon } from 'lucide-react';
import Link from 'next/link';

export default function VerifyEmail() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          Ваша почта успешно подтверждена <CheckCircle2Icon size={30} />
        </h1>
        <p>Теперь вы можете войти в свой аккаунт.</p>
        <Link href="/login" className="text-blue-600 hover:underline">
          Войти
        </Link>
      </div>
    </div>
  );
}
