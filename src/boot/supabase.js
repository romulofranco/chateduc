import { createClient } from "@supabase/supabase-js";
import useAuthUser from "src/composables/UserAuthUser";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

// const supabaseUrl = 'https://okqyezbhisndtvyuzjey.supabase.co'
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rcXllemJoaXNuZHR2eXV6amV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg3MjIyMzksImV4cCI6MTk5NDI5ODIzOX0.yT5bDvuB_m2KybwJRCsHXS32KZwLJ4gh40AcySNfkDw'
const supabase = createClient(supabaseUrl, supabaseKey);

supabase.auth.onAuthStateChange((event, session) => {
  const { user } = useAuthUser();
  user.value = session?.user || null; // se user.value <> null, atualize.
});

// console.log('Init Supabase: ', supabase);

export default function useSupabase() {
  return { supabase };
}
