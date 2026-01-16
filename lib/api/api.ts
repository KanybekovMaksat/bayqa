import { VerificationResponse, VerifyCodeResponse } from '@/types/auth';

const API_BASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;

if (!API_BASE_URL) {
  throw new Error(
    'NEXT_PUBLIC_SUPABASE_URL is not defined in environment variables'
  );
}

export async function sendVerificationCode(
  phone: string
): Promise<VerificationResponse> {
  const response = await fetch(`${API_BASE_URL}/functions/v1/send-code`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ phone }),
  });

  return response.json();
}

export async function verifyCode(
  phone: string,
  code: string
): Promise<VerifyCodeResponse> {
  const response = await fetch(`${API_BASE_URL}/functions/v1/verify-code`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ phone, code }),
  });

  return response.json();
}

export async function resendVerificationCode(
  phone: string
): Promise<VerificationResponse> {
  const response = await fetch(`${API_BASE_URL}/functions/v1/resend-code`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ phone }),
  });

  return response.json();
}
