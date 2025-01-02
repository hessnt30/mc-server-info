"use client"; // This component is a client component

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const QueryClientWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryClientWrapper;
