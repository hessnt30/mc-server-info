import { create } from "zustand";

type ServerAddressStore = {
  serverAddress: string;
  setServerAddress: (serverAddress: string) => void;
};

export const useServerAddressStore = create<ServerAddressStore>((set) => ({
  serverAddress: "", // default value
  setServerAddress: (serverAddress) => set({ serverAddress }),
}));

export default useServerAddressStore;
