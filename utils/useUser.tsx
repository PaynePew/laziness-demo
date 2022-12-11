import { useEffect, useState, createContext, useContext } from "react";
import { useUser as useSupaUser, User } from "@supabase/auth-helpers-react";
import { UserDetails } from "../types";
import { SupabaseClient } from "@supabase/auth-helpers-nextjs";
import { getUserDetails } from "./supabase-client";

type UserContextType = {
  accessToken: string | null;
  user: User | null;
  userDetails: UserDetails | null;
  isLoading: boolean;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export interface Props {
  supabaseClient: SupabaseClient;
  [propName: string]: any;
}

export const CustomUserContextProvider = (props: Props) => {
  const { supabaseClient: supabase } = props;
  const { user, error, accessToken, isLoading: isLoadingUser } = useSupaUser();
  const [isLoadingData, setIsloadingData] = useState(false);
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);

  useEffect(() => {
    if (user && !isLoadingData && !userDetails) {
      setIsloadingData(true);
      console.log("CustomUserContext Count");
      getUserDetails(user).then((result) => {
        setUserDetails(result);
      });
      setIsloadingData(false);
    } else if (!user && !isLoadingUser && !isLoadingData) {
      setUserDetails(null);
    }
  }, [user, isLoadingUser]);

  const value = {
    accessToken,
    user,
    userDetails,
    isLoading: isLoadingUser || isLoadingData,
  };

  return <UserContext.Provider value={value} {...props} />;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error(`useUser must be used within a CustomUserContextProvider.`);
  }
  return context;
};
