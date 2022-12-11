import {
  withApiAuth,
  supabaseServerClient,
} from "@supabase/auth-helpers-nextjs";

export default withApiAuth(async function ProtectedRoute(req, res) {
  if (req.method !== "GET") {
    res.status(405).send({ message: "Only GET requests allowed" });
    return;
  }
  try {
    // const { user } = req.body;
    const { data, error } = await supabaseServerClient({ req })
      .from("projects")
      .select(`*, profiles_private(*)`);
    // .eq("projects_users.project_id", "projects.id");
    // .eq("projects_users.project_id", "projects.id")
    // .eq("projects_users.user_id", "profiles_private.id");

    console.log("project query", data);
    if (error) {
      res.status(405).send({ message: error.message });
      return;
    }
    res.send(data);
  } catch (error) {
    console.error(error);
  }
});
