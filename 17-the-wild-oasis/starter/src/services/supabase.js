import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://rwsfkaqkhtmcqxujtkwf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ3c2ZrYXFraHRtY3F4dWp0a3dmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQzMzA4MTIsImV4cCI6MjAzOTkwNjgxMn0.QPwGAxbauwzfsgTsNWqXzlUBNdfYwfB5hhNI8pgn8Bo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;