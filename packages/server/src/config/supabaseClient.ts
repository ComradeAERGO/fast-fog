import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kedafbkxedhjcxapvmen.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtlZGFmYmt4ZWRoamN4YXB2bWVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk5MTI4NzcsImV4cCI6MTk5NTQ4ODg3N30.TCE2NLiEMSUs5mHAhELJu14FBh2w7ozSQSYWpB23B2c';

export const supabase = createClient(supabaseUrl, supabaseKey);
