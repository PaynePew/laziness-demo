import { createClient } from "@supabase/supabase-js";

console.log('supabaseUrl',process.env.NEXT_PUBLIC_SUPABASE_URL)
console.log('supabaseAnonKey',process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);