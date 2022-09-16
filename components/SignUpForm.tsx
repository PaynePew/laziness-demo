import * as React from "react";
import { useRouter } from "next/router";
import { supabase } from "../utils/supabaseClient";
import { AuthError } from "@supabase/supabase-js";

import {
  PlasmicSignUpForm,
  DefaultSignUpFormProps,
} from "./plasmic/laziness_demo/PlasmicSignUpForm";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

export interface SignUpFormProps extends DefaultSignUpFormProps {}

function SignUpForm_(props: SignUpFormProps, ref: HTMLElementRefOf<"div">) {
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [name, setName] = React.useState("");
  const [jobtitle, setJobtitle] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [authError, setAuthError] = React.useState<AuthError>();
  const [loading, setLoading] = React.useState(false);
  const [info, setInfo] = React.useState(false);

  return (
    <PlasmicSignUpForm
      root={{ ref }}
      {...props}
      isError={!!authError}
      errorMessage={authError?.message}
      isLoading={loading}
      isInfoFlow={info}
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
        onChange: (e) => setPassword(e.target.value),
      }}
      nameInput={{
        value: name,
        onChange: (e) => setPassword(e.target.value),
      }}
      jobTitleInput={{
        value: jobtitle,
        onChange: (e) => setPassword(e.target.value),
      }}
      phoneNumberInput={{
        value: phone,
        onChange: (e) => setPassword(e.target.value),
      }}
      addressInput={{
        value: address,
        onChange: (e) => setPassword(e.target.value),
      }}
      submitButton={{
        onClick: async (e) => {
          e.preventDefault();
          setLoading(true);
          setAuthError(undefined);
          try {
            let authFunction;
            console.log("inside isSignUp");
            authFunction = await supabase.auth.signUp({ email, password });
            console.log("auth", authFunction);

            const { error } = authFunction;
            console.log("error", error);
            if (error) {
              setAuthError(error);
              return;
            }
            router.replace("/admin/signup");
          } catch (err: any) {
            setAuthError(err);
          } finally {
            setLoading(false);
            setInfo(true);
          }
        },
      }}
      finishButton={{
        onClick: async (e) => {
          e.preventDefault();
          setLoading(true);
          setAuthError(undefined);
          try {
            let authFunction;
            console.log("inside isSignUp");
            authFunction = await supabase.auth.signUp({ email, password });
            console.log("auth", authFunction);
            const { error } = authFunction;
            console.log("error", error);
            if (error) {
              setAuthError(error);
              return;
            }
            router.replace("/admin/signup");
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

const SignUpForm = React.forwardRef(SignUpForm_);
export default SignUpForm;
