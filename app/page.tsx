import SearchServer from "@/components/search-server";

export default function Home() {
  return (
    <main
      className="flex flex-col gap-6 px-4 mx-auto max-w-lg w-full"
      style={{ maxWidth: "800px" }}
    >
      <SearchServer isAuthenticated={false} />
    </main>
  );
}
