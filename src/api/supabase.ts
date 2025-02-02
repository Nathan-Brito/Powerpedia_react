import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl: string = 'https://spztiessqczehcwttldv.supabase.co';
const supabaseAnonKey: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNwenRpZXNzcWN6ZWhjd3R0bGR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY3NTkxMTQsImV4cCI6MjA0MjMzNTExNH0.zsRWhuzMBZVvoSMl-LgI3zp9yHFbyYT8iY8YNNInJ6M';

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);
