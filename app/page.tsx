import { createClient } from "@/utils/supabase/server";
export default async function Home() {
  const supabase = await createClient();
  const { data: response } = await supabase.from("users").select();

  if (response && response.length > 0) {
    console.log("users: ", response[0]);
    return <p>Hi {response[0].username}</p>;
  } else {
    return <p>you are not authenticated.</p>;
  }
}
