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

export interface Projects {
  id: string;
  created_at?: Date;
  project_name: string;
  price: number;
  description: string;
  status: number;
}

export interface Projects_Users {
  id: string; //primary key
  project_id: string;
  user_id: string;
}
