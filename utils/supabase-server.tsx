import { supabaseServerClient } from "@supabase/auth-helpers-nextjs";
import { GetServerSidePropsContext } from "next";
import { User } from "@supabase/auth-helpers-react";
import { Profile_Private, UserDetails } from "../types";

export const getIsAdmin = async (ctx: GetServerSidePropsContext) => {
  let { data, error } = await supabaseServerClient(ctx).rpc("get_is_admin");
  if (error) {
    throw error;
  }
  return data;
};

export const getUsers = async (
  ctx: GetServerSidePropsContext
): Promise<UserDetails[] | null> => {
  let { data, error } = await supabaseServerClient(ctx)
    .from<Profile_Private>("profiles_private")
    .select("*");

  if (error) {
    console.error(error);
    throw error;
  }
  return data;
};

export const getUserDetails = async (
  user: User,
  ctx: GetServerSidePropsContext
): Promise<UserDetails> => {
  const { data, error } = await supabaseServerClient(ctx)
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
