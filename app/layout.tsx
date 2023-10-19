import { LoadingProvider } from "@/contexts/request-loading-context";
import React from "react";
import Content from "./_content";
import "./globals.css";

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
    <body className="flex h-screen">
    <LoadingProvider>
        <Content>{children}</Content>
    </LoadingProvider>
    </body>
    </html>
  );
}
