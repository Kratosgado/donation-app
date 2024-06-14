import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { AuthContextProvider } from "@/components/auth.context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Donation App",
  description: "Web app for donation in KNUST",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={inter.className}>
        <AuthContextProvider>
          <Navbar className="top-2" />
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}
