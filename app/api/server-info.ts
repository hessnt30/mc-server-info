import axios from "axios";
import { Server } from "../types/server";
import { DBServer } from "../types/db-server";

export const fetchServerInfo = async (
  serverAddress: string,
  mcVersion: string,
  id?: string
) => {
  try {
    const response = await axios.get(
      `https://api.mcstatus.io/v2/status/${mcVersion}/${serverAddress}`
    );
    const data = response.data;
    console.log(data);
    const serverInfo = {
      id,
      ip: data?.ip_address,
      port: data?.port,
      host: data?.host,
      icon: data?.icon,
      motd: data.motd?.clean,
      isOnline: data?.online,
      numPlayersOnline: data?.players?.online,
      maxPlayers: data?.players?.max,
      playerList: data?.players?.list || [],
      version: data?.version?.name_clean,
    };

    return serverInfo as Server;
  } catch (error) {
    console.error("Error fetching server status:", error);
  }
};

export const fetchMultipleServersInfo = async (serverAddresses: DBServer[]) => {
  const serverInfoList: Server[] = [];

  for (const server of serverAddresses) {
    const serverInfo = await fetchServerInfo(
      server.server_address,
      "java",
      server.id
    ); // TODO, save version to DB
    if (serverInfo) {
      serverInfoList.push(serverInfo);
    }
  }

  return serverInfoList;
};
