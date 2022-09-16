import * as React from "react";
import { useRouter } from "next/router";
import {
  PlasmicLogInForm,
  DefaultLogInFormProps,
} from "./plasmic/laziness_demo/PlasmicLogInForm";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { supabase } from "../utils/supabaseClient";
import { AuthError } from "@supabase/supabase-js";

export interface LogInFormProps extends DefaultLogInFormProps {}

function LogInForm_(props: LogInFormProps, ref: HTMLElementRefOf<"div">) {
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [authError, setAuthError] = React.useState<AuthError>();
  const [loading, setLoading] = React.useState(false);

  return (
    <PlasmicLogInForm
      root={{ ref }}
      {...props}
      isError={!!authError}
      errorMessage={authError?.message}
      isLoading={loading}
      emailInput={{
        value: email,
        onChange: (e) => setEmail(e.target.value),
      }}
      passwordInput={{
        value: password,
        onChange: (e) => setPassword(e.target.value),
      }}
      submitButton={{
        onClick: async (e) => {
          e.preventDefault();
          setLoading(true);
          setAuthError(undefined);
          try {
            let authFunction;
            if (props.isSignUpFlow) {
              authFunction = await supabase.auth.signUp({ email, password });
            } else {
              authFunction = await supabase.auth.signInWithPassword({
                email,
                password,
              });
            }
            const { error } = authFunction;
            console.log("error", error);
            if (error) {
              setAuthError(error);
              return;
            }
            // router.replace("/member");
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

const LogInForm = React.forwardRef(LogInForm_);
export default LogInForm;
