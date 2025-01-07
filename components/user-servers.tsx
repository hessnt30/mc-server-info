"use client"; // Ensure this is a client component

import { useEffect, useState } from "react";
import { getUserServerAddresses } from "@/app/db/server-addresses-actions";
import ServerInfoCardSmall from "./server-info-card-small";
import { useQuery } from "react-query";
import { fetchMultipleServersInfo } from "@/app/api/server-info";
import LoadingSpinner from "./loading-spinner";
import { deleteServerAddress } from "@/app/db/server-addresses-actions";
import { Server } from "@/app/types/server";
import { useServerContext } from "@/app/context/server-context";

export default function UserServers() {
  // const [serverObjects, setServerObjects] = useState<Server[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { serverObjects, setServers, handleRemove } = useServerContext();

  useEffect(() => {
    const fetchServers = async () => {
      try {
        const userServers = await getUserServerAddresses();
        const serversInfo = await fetchMultipleServersInfo(userServers);
        setServers(serversInfo);
      } catch (err) {
        setError("Failed to load servers");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchServers();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div className="text-red-600">{error}</div>;
  }

  const removeServer = async (id: string) => {
    await deleteServerAddress(id); // Remove from the database
    handleRemove(id);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-medium text-xl">My Servers</h2>
      </div>
      {serverObjects.length === 0 && (
        <p>Add your favorite servers to check them at a glimpse</p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4">
        {serverObjects.map((server) => (
          <ServerInfoCardSmall
            key={server.id}
            serverInfo={server}
            onRemove={removeServer} // Pass the handleRemove function
          />
        ))}
      </div>
    </>
  );
}
