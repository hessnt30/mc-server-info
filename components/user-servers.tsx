"use client"; // Ensure this is a client component

import { useEffect, useState } from "react";
import { getUserServerAddresses } from "@/app/db/server-addresses-actions";
import ServerInfoCardSmall from "./server-info-card-small";
import { useQuery } from "react-query";
import { fetchMultipleServersInfo } from "@/app/api/server-info";
import LoadingSpinner from "./loading-spinner";
import { deleteServerAddress } from "@/app/db/server-addresses-actions";
import { Server } from "@/app/types/server";

export default function UserServers() {
  const [serverObjects, setServerObjects] = useState<Server[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServers = async () => {
      try {
        const userServers = await getUserServerAddresses();
        const serversInfo = await fetchMultipleServersInfo(userServers);
        setServerObjects(serversInfo);
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

  const handleRemove = async (id: string) => {
    await deleteServerAddress(id); // Remove from the database
    setServerObjects((prev) => prev.filter((server) => server.id !== id)); // Update state to remove the server object
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-medium text-xl">My Servers</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4">
        {serverObjects.map((server) => (
          <ServerInfoCardSmall
            key={server.id}
            serverInfo={server}
            onRemove={handleRemove} // Pass the handleRemove function
          />
        ))}
      </div>
    </>
  );
}
