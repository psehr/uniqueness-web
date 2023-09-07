import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "./components/Nav";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "osu! Uniqueness Rating",
  description: "An osu! score based uniqueness rating system",
  icons: "./public/favicon.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="flex flex-col align-center align-items-center">
      <head>
        <link rel="shortcut icon" href="" />
      </head>

      <body
        className={`${inter.className} flex flex-col w-full h-full bg-gradient-to-r from-slate-900 to-sky-950 to-50% text-slate-100 px-8 py-4 align-center align-items-center`}
      >
        <header
          suppressHydrationWarning
          className="flex flex-row w-[90vw] md:w-[80vw] align-center align-items-center self-center"
        >
          <Nav></Nav>
        </header>
        <main className="flex flex-col w-[90vw] md:w-[80vw] h-[80vh] self-center">
          {children}
        </main>
      </body>
    </html>
  );
}
