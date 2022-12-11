import { NextApiRequest, NextApiResponse } from "next";
import {
  withApiAuth,
  supabaseServerClient,
} from "@supabase/auth-helpers-nextjs";
import { createProject } from "../../utils/supabase-client";
import { getIsAdmin } from "../../utils/supabase-server";
import { Projects } from "../../types";

// export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//   if (req.method !== "POST") {
//     res.status(405).send({ message: "Only POST requests allowed" });
//     return;
//   }
//   // await createProject();
// };


// todo: RLS restrict or admin restrict
export default withApiAuth(async function ProtectedRoute(req, res) {
  // Run queries with RLS on the server
  try {
    if (req.method !== "POST") {
      res.status(405).send({ message: "Only POST requests allowed" });
      return;
    }
    let { data: isAdmin, error } = await supabaseServerClient({ req }).rpc(
      "get_is_admin"
    );
    if (error) {
      throw error;
    }
    if (!isAdmin) {
      res.status(405).send({ message: "Only Admin Can Create Project" });
    }
    const { projectName, price, description } = req.body;
    const projectData = {
      project_name: projectName,
      created_at: new Date(),
      price,
      description,
    };
    // console.log(req.body);

    const { data, error: createError } = await supabaseServerClient({ req })
      .from<Projects>("projects")
      .insert([projectData]);
    console.log("projectCreateReturn", data);
    res.status(200).send({ message: "專案成功建立" });
    if (createError) {
      throw createError;
    }
  } catch (error) {
    console.error(error);
  }

  // const { data } = await supabaseServerClient({ req, res })
  //   .from('test')
  //   .select('*')
  // res.json(data)
});
