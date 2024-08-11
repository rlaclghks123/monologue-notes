import createClient from '@/utils/supabase/client';
import creatServer from '@/utils/supabase/server';

const supabase = createClient();

export async function getUser() {
  const serverSupabase = await creatServer();
  const user = await serverSupabase.auth.getUser();
  return user;
}

export async function kakaoLogin() {
  await supabase.auth.signInWithOAuth({
    provider: 'kakao',
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/callback`,
    },
  });
}

export async function signOut() {
  await supabase.auth.signOut();
  window.location.href = '/';
}

export async function loginHandler() {
  const authInfo = await supabase.auth.getUser();

  if (authInfo.data.user === null) kakaoLogin();
  else signOut();
}
