import { create } from "zustand";

type VersionStore = {
  mcVersion: 'java' | 'bedrock';
  setMCVersion: (version: 'java' | 'bedrock') => void;
};

export const useVersionStore = create<VersionStore>((set) => ({
  mcVersion: 'java', // default value
  setMCVersion: (version) => set({ mcVersion: version }),
}));

export default useVersionStore;
