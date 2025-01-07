"use client"; // This component is a client component

import { ServerProvider } from "./server-context";

const ServerProviderWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <ServerProvider>{children}</ServerProvider>;
};

export default ServerProviderWrapper;
