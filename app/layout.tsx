import type { Metadata } from "next";
import { Forum } from "next/font/google";
import "./globals.css";

const forum = Forum({ weight: "400", subsets: ["latin"] }); 

export const metadata: Metadata = {
  title: "Paradiso Pokhara - Sports bar and grill",
  description: "Great food and live music till late night",
  icons: {
    icon: "/favicon.ico",
  },
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
