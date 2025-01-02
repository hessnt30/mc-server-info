import SearchServer from "@/components/search-server";
import UserServers from "@/components/user-servers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <main
      className="flex-1 flex flex-col gap-6 px-4 mx-auto max-w-lg"
      style={{ width: "800px" }}
    >
      <h2 className="font-medium text-xl text-center">
        Check MC Server Status
      </h2>
      <SearchServer isAuthenticated={user != null} />
      <UserServers />
    </main>
  );
}
