export interface Profile {
  id: string;
  phone: string;
  telegram_id?: string;
  full_name?: string;
  specialty?: string;
  short_description?: string;
  created_at: string;
  updated_at: string;
}

export interface VerificationResponse {
  success: boolean;
  code?: string;
  expires_at?: string;
  error?: string;
  wait_seconds?: number;
}

export interface VerifyCodeResponse {
  success: boolean;
  profile?: Profile;
  is_new_user?: boolean;
  error?: string;
}

export type AuthStep = 'phone' | 'code' | 'success';

export interface AuthState {
  profile: Profile | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}
