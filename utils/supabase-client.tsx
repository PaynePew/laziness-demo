import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import { User } from "@supabase/auth-helpers-react";
import { PostgrestError } from "@supabase/supabase-js";
import {
  Profile_Private,
  UserDetails,
  Projects,
  Projects_Users,
} from "../types";

export const getUsers = async (): Promise<UserDetails[] | null> => {
  let { data, error } = await supabaseClient
    .from<Profile_Private>("profiles_private")
    .select("*");

  if (error) {
    console.error(error);
    throw error;
  }
  return data;
};

export const getUserDetails = async (user: User): Promise<UserDetails> => {
  const { data, error } = await supabaseClient
    .from<Profile_Private>("profiles_private")
    .select("*")
    .eq("id", user.id)
    .single();
  if (error) {
    console.error(error);
    throw error;
  }
  return data;
};

export const createProject = async (
  projectName: string,
  price: number,
  description: string,
  userId: string
) => {
  try {
    const projectData = {
      project_name: projectName,
      created_at: new Date(),
      price,
      description,
    };
    // todo: project should belong to owners
    const { data: createdProjectData, error: creatProjectError } =
      await supabaseClient
        .from<Projects>("projects")
        .insert([projectData])
        .single();

    if (creatProjectError) {
      console.error(creatProjectError);
      return creatProjectError.message;
    }

    const { error: projectJoinTableeError } = await supabaseClient
      .from<Projects_Users>("projects_users")
      .insert({ project_id: createdProjectData.id, user_id: userId });

    if (projectJoinTableeError) {
      console.error(projectJoinTableeError);
      return projectJoinTableeError.message;
    }
  } catch (error) {
    return new Error(String(JSON.stringify(error))).message;
  }
};

export const signOut = async () => {
  const { error } = await supabaseClient.auth.signOut();
  if (error) {
    console.error(error);
    throw error;
  }
};
