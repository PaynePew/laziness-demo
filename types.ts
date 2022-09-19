export interface Profile_Private {
  id: string;
  created_at?: string;
  updated_at?: string;
  company?: string;
  user_name: string;
  job_title?: string;
  phone?: string;
  email: string;
  address?: string;
  isadmin: boolean;
}
export interface UserDetails extends Profile_Private {}
