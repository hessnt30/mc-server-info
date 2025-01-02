import { Player } from "./player";

export type Server = {
  id?: string | undefined;
  host: string | undefined;
  port: string | undefined;
  ip: string | undefined;
  icon: string | undefined;
  motd: string | undefined;
  isOnline: boolean | undefined;
  numPlayersOnline: number | undefined;
  maxPlayers: number | undefined;
  playerList: Player[] | [] | undefined;
  version: string | undefined;
};
