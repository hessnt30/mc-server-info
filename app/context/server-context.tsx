import React, { createContext, useContext, useState, ReactNode } from "react";
import { Server } from "../types/server";

type ServerContextType = {
  serverObjects: Server[];
  setServers: React.Dispatch<React.SetStateAction<Server[]>>;
  handleAdd: (server: Server) => void;
  handleRemove: (id: string) => void;
  serverInList: (server: Server) => boolean;
};

const ServerContext = createContext<ServerContextType | undefined>(undefined);

export const ServerProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [serverObjects, setServers] = useState<Server[]>([]);

  const handleAdd = (server: Server) => {
    setServers((prev) => [...prev, server]);
  };

  const handleRemove = (id: string) => {
    setServers((prev) => prev.filter((server) => server.id !== id));
  };

  const serverInList = (server: Server) => {
    return serverObjects.some((currServer) => {
      return (
        `${server.ip}:${server.port}` === `${currServer.ip}:${currServer.port}`
      );
    });
  };

  return (
    <ServerContext.Provider
      value={{
        serverObjects,
        setServers,
        handleAdd,
        handleRemove,
        serverInList,
      }}
    >
      {children}
    </ServerContext.Provider>
  );
};

export const useServerContext = () => {
  const context = useContext(ServerContext);
  if (!context) {
    throw new Error("useServerContext must be used within a ServerProvider");
  }
  return context;
};
