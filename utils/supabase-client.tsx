import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import { User } from "@supabase/auth-helpers-react";
import { Profile_Private, UserDetails } from "../types";

export const getIsAdmin = async () => {
  let { data, error } = await supabaseClient.rpc("get_is_admin");

  if (error) {
    console.error(error);
    throw error;
  }
  return data;
};

export const getUsers = async () => {
  let { data, error } = await supabaseClient
    .from("profiles_private")
    .select("*");

  if (error) {
    console.error(error);
    throw error;
  }
  console.log("users", data);
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
