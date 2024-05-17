import type { Metadata } from "next";
import { Forum } from "next/font/google";
import "./globals.css";

const forum = Forum({ weight: "400", subsets: ["latin"] }); // Use "weight" instead of "weight :"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={forum.className}>{children}</body>
    </html>
  );
}