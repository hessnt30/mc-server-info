import { Server } from "@/app/types/server";
import { Button } from "./ui/button";
import { useState } from "react";
import { X } from "lucide-react";

type ServerInfoCardProps = {
  serverInfo: Server;
  onRemove: (id: string) => void;
};

export default function ServerInfoCardSmall({
  serverInfo,
  onRemove,
}: ServerInfoCardProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleRemove = () => {
    setIsLoading(true);
    console.log("Remove button clicked for server:", serverInfo.host);
    if (serverInfo.id) {
      onRemove(serverInfo.id);
    } else {
      console.log("Error removing, id is undefined");
    }
    setIsLoading(false);
  };

  return (
    <div>
      <div className="border rounded-lg p-4 shadow-md flex flex-col relative">
        <button
          onClick={handleRemove}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          aria-label="Remove server"
        >
          <X size={20} />
        </button>

        <div className="flex flex-row">
          {/* Top left */}
          <div>
            <img
              src={serverInfo.icon}
              alt={`${serverInfo.host} icon`}
              className="w-12 h-12 mr-2"
            />
          </div>

          {/* Top right */}
          <div className="ml-4">
            <div className="flex-grow">
              <h3 className="text-md font-bold truncate">{`${serverInfo.host}${serverInfo.port !== "25565" ? ":" + serverInfo.port : ""}`}</h3>
              <p className="text-xs">{serverInfo.version}</p>
              <p className="text-xs">
                {serverInfo.numPlayersOnline}/{serverInfo.maxPlayers} players
              </p>
            </div>
          </div>
        </div>

        {/* Dropdown for Players */}
        <div className="mt-4">
          {serverInfo.playerList && serverInfo.playerList.length > 0 ? (
            <details className="mt-2">
              <summary className="cursor-pointer text-primary hover:underline">
                See players...
              </summary>
              <ul className="list-none pl-0 mt-2">
                {serverInfo.playerList.map((player) => (
                  <li
                    key={player.uuid}
                    className="flex items-center gap-3 mb-2"
                  >
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
    </div>
  );
}
