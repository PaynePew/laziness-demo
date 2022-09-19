import * as React from "react";
import { useRouter } from "next/router";

import {
  PlasmicRegisterForm,
  DefaultRegisterFormProps,
} from "./plasmic/laziness_demo/PlasmicRegisterForm";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import { ApiError } from "@supabase/supabase-js";
import { getURL } from "../utils/helpers";

export interface RegisterFormProps extends DefaultRegisterFormProps {}

function RegisterForm_(props: RegisterFormProps, ref: HTMLElementRefOf<"div">) {
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [jobtitle, setJobtitle] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [authError, setAuthError] = React.useState<ApiError | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [isSignUp, setIsSignUp] = React.useState(false);

  return (
    <PlasmicRegisterForm
      root={{ ref }}
      {...props}
      isError={!!authError}
      errorMessage={authError?.message}
      isLoading={loading}
      isSignUpFlow={isSignUp}
      emailInput={{
        value: email,
        onChange: (e) => setEmail(e.target.value),
      }}
      passwordInput={{
        value: password,
        onChange: (e) => setPassword(e.target.value),
      }}
      companyInput={{
        value: company,
        onChange: (e) => setCompany(e.target.value),
      }}
      nameInput={{
        value: name,
        onChange: (e) => setName(e.target.value),
      }}
      jobTitleInput={{
        value: jobtitle,
        onChange: (e) => setJobtitle(e.target.value),
      }}
      phoneNumberInput={{
        value: phone,
        onChange: (e) => setPhone(e.target.value),
      }}
      addressInput={{
        value: address,
        onChange: (e) => setAddress(e.target.value),
      }}
      toggleForm={{
        onClick: () => setIsSignUp(!isSignUp),
      }}
      submitButton={{
        onClick: async (e) => {
          e.preventDefault();
          setLoading(true);
          setAuthError(null);
          try {
            let authFunction;
            if (isSignUp) {
              // todo!!! error handling
              // todo!!! email confirm page
              authFunction = await supabaseClient.auth.signUp(
                {
                  email,
                  password,
                },
                {
                  data: {
                    user_name: name,
                    company: company,
                    job_title: jobtitle,
                    phone: phone,
                    address: address,
                  },
                  // redirectTo is only for OAuth, further extension
                  redirectTo: getURL(),
                }
              );
              console.log("authfunction", authFunction);
            } else {
              console.log("loginflow", getURL());
              authFunction = await supabaseClient.auth.signIn(
                {
                  email,
                  password,
                },
                // redirectTo is only for OAuth, further extension
                { redirectTo: getURL() }
              );
              console.log("authFunction", authFunction);
            }
            const { error } = authFunction;
            console.log("error", error);
            if (error) {
              setAuthError(error);
              return;
            }
          } catch (err: any) {
            setAuthError(err);
          } finally {
            setLoading(false);
          }
        },
      }}
    />
  );
}

const RegisterForm = React.forwardRef(RegisterForm_);
export default RegisterForm;
