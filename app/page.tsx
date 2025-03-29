import { createClient } from "@/utils/supabase/server";
import { Button } from "@/components/ui/button";
export default async function Home() {
  const supabase = await createClient();
  const { data: response } = await supabase.from("users").select();

  if (response && response.length > 0) {
    console.log("users: ", response[0]);
    return (
      <>
        <p>Hi {response[0].username}</p>
        <Button size={"sm"}>hello</Button>
      </>
    );
  } else {
    return <p>you are not authenticated.</p>;
  }
}
