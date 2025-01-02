"use client";

import { fetchServerInfo } from "@/app/api/server-info";
import useVersionStore from "@/app/state/mcVersionStore";
import useServerAddressStore from "@/app/state/serverAddressStore";
import { useState } from "react";
import { useQuery } from "react-query";
import { Label } from "./ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Input } from "./ui/input";
import { SubmitButton } from "./submit-button";
import LoadingSpinner from "./loading-spinner";
import ServerInfoCard from "./server-info-card";
import { Server } from "@/app/types/server";

type SearchServerProps = {
  isAuthenticated: boolean;
};

export default function SearchServer({ isAuthenticated }: SearchServerProps) {
  const [loading, setLoading] = useState(false);
  const [serverInfo, setServerInfo] = useState<Server | null>(null);

  const { serverAddress, setServerAddress } = useServerAddressStore();
  const { mcVersion, setMCVersion } = useVersionStore();

  const { refetch } = useQuery({
    queryKey: ["server-info", serverAddress, mcVersion],
    queryFn: () => fetchServerInfo(serverAddress, mcVersion),
    enabled: false,
    onSuccess: (data) => {
      setServerInfo(data as Server);
    },
  });

  const serverCheckClicked = async () => {
    setLoading(true);
    await refetch();
    setLoading(false);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-medium text-xl">Search Server</h2>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="server-address">Find a Server</Label>
        <div className="flex flex-row gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger className="w-30">
              <div className="flex flex-row items-center justify-between h-9 rounded-md text-sm px-2 bg-primary text-primary-foreground hover:bg-primary/90">
                <p>{mcVersion === "java" ? "Java" : "Bedrock"}</p>
                <ChevronDown size={16} />
              </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuItem
                textValue="java"
                onSelect={() => setMCVersion("java")}
              >
                Java
              </DropdownMenuItem>
              <DropdownMenuItem
                textValue="bedrock"
                onSelect={() => setMCVersion("bedrock")}
              >
                Bedrock
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Input
            name="server-address"
            placeholder="play.hypixel.net"
            value={serverAddress}
            onChange={(e) => setServerAddress(e.target.value)}
            required
          />
          <SubmitButton
            pendingText="Checking..."
            onClick={serverCheckClicked}
            disabled={!serverAddress}
          >
            Check
          </SubmitButton>
        </div>
      </div>

      <div className="mt-4 w-full">
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <LoadingSpinner />
          </div>
        ) : serverInfo?.isOnline ? (
          <ServerInfoCard
            serverInfo={serverInfo}
            isAuthenticated={isAuthenticated}
          />
        ) : (
          serverAddress && (
            <p className="mt-4 text-red-600">
              Server is offline or address is invalid.
            </p>
          )
        )}
      </div>
    </>
  );
}
