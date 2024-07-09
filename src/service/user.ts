import { useQuery } from '@tanstack/react-query';
import createClient from '@/utils/supabase/client';

const supabase = createClient();

export async function fetchUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}

export function useUser() {
  return useQuery({ queryKey: ['useUser'], queryFn: fetchUser });
}

export async function kakaoLogin() {
  await supabase.auth.signInWithOAuth({
    provider: 'kakao',
    options: {
      redirectTo: 'http://localhost:3000/auth/callback',
    },
  });
}

export async function signOut() {
  await supabase.auth.signOut();
  window.location.href = '/';
}

export async function loginHandler() {
  const authInfo = await supabase.auth.getSession();

  if (authInfo.data.session === null) kakaoLogin();
  else signOut();
}
