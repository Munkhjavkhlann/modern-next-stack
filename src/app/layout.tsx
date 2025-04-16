import ApolloWrapper from "@/lib/apollo-wrapper";

import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Modern Next Stack",
  description: "Made by Munkhjavkhlan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ApolloWrapper>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </ApolloWrapper>
  );
}
