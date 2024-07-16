import "./globals.css";
import { clsx } from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import Header from "@/components/header";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx("dark", inter.className)}>
      <body>
        <main className="flex min-h-screen flex-col p-2">
          <div className="container mx-auto max-w-screen-md">
            <Providers>
              <Header />
              {children}
            </Providers>
          </div>
        </main>
      </body>
    </html>
  );
}
