import { Server } from "@/app/types/server";
import { Button } from "./ui/button";
import { useState } from "react";

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
    console.log(`${serverInfo.id}`);
    if (serverInfo.id) {
      onRemove(serverInfo.id);
    } else {
      console.log("Error removing, id is undefined");
    }
    setIsLoading(false);
  };

  return (
    <>
      <div className="border rounded-lg p-4 shadow-md flex flex-col relative">
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
              <h3 className="text-md font-bold truncate">{serverInfo.host}</h3>
              <p className="text-xs">{serverInfo.version}</p>
              <p className="text-xs">
                {" "}
                {serverInfo.numPlayersOnline}/{serverInfo.maxPlayers}{" "}
                {"players"}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full mt-4">
          <Button onClick={handleRemove} disabled={isLoading}>
            {isLoading ? "Removing..." : "Remove"}
          </Button>
        </div>
      </div>
    </>
  );
}
