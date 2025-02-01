import { Server } from "@/app/types/server";
import { Button } from "./ui/button";
import { addServerAddress } from "@/app/db/server-addresses-actions";
import { useEffect, useState } from "react";
import { useServerContext } from "@/app/context/server-context";

type ServerInfoCardProps = {
  serverInfo: Server;
  isAuthenticated: boolean;
};

export default function ServerInfoCard({
  serverInfo,
  isAuthenticated,
}: ServerInfoCardProps) {
  const { handleAdd, serverInList } = useServerContext();
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    setIsSaved(serverInList(serverInfo));
  }, [serverInfo, serverInList]);

  const handleSave = async () => {
    console.log("Save button clicked for server:", serverInfo.host);
    if (serverInList(serverInfo)) {
      console.log("Server address already exists.");
      return;
    }

    if (serverInfo.host) {
      let id;
      if (serverInfo.port !== "25565") {
        const result = await addServerAddress(
          `${serverInfo.ip}:${serverInfo.port}`
        );
        id = result.id;
      } else {
        const result = await addServerAddress(serverInfo.host);
        id = result.id;
      }

      if (id) {
        serverInfo.id = id;
        handleAdd(serverInfo);
        setIsSaved(true);
      }
    } else {
      console.log("Error saving, host is undefined");
    }
  };

  return (
    <div className="border rounded-lg p-4 shadow-md relative">
      {isAuthenticated && (
        <Button
          onClick={handleSave}
          className="absolute top-4 right-4"
          disabled={isSaved}
        >
          {isSaved ? "Saved" : "Save"}
        </Button>
      )}
      <h3 className="text-lg font-bold">Server Information</h3>
      <img
        src={serverInfo.icon}
        alt={`${serverInfo.host} icon`}
        className="w-16 h-16 mt-2"
      />
      <p className="mt-2">
        <strong>Host:</strong> {serverInfo.host}
      </p>
      <p>
        <strong>Version:</strong> {serverInfo.version}
      </p>
      <p className="mt-2">
        <strong>MotD:</strong> {serverInfo.motd}
      </p>
      <p>
        <strong>Status:</strong> {serverInfo.isOnline ? "Online" : "Offline"}
      </p>
      <p>
        <strong>Players:</strong> {serverInfo.numPlayersOnline}/
        {serverInfo.maxPlayers}
      </p>

      {/* Dropdown for Players */}
      <div className="mt-4">
        <h4 className="font-medium">Players Online:</h4>
        {serverInfo.playerList && serverInfo.playerList.length > 0 ? (
          <details className="mt-2">
            <summary className="cursor-pointer text-primary hover:underline">
              See more...
            </summary>
            <ul className="list-none pl-0 mt-2">
              {serverInfo.playerList.map((player) => (
                <li key={player.uuid} className="flex items-center gap-3 mb-2">
                  <img
                    src={`https://mc-heads.net/avatar/${player.uuid}`}
                    alt={`${player.name_raw}'s avatar`}
                    className="w-8 h-8"
                  />
                  <span>{player.name_raw}</span>
                </li>
              ))}
            </ul>
          </details>
        ) : (
          <p>No players online</p>
        )}
      </div>
    </div>
  );
}
