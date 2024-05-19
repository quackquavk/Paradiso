import type { Metadata } from "next";
import { Forum } from "next/font/google";
import "./globals.css";

const forum = Forum({ weight: "400", subsets: ["latin"] }); 

export const metadata: Metadata = {
  title: "Paradiso Pokhara - Sports bar and grill",
  description: "Enjoy great food and live music until late at night in a family-friendly environment. Our restaurant offers a clean space, friendly staff, and exceptional hospitality. Located just behind the premises, you'll have a stunning view of Lake Fewa. Our diverse menu features Indian, Italian, Chinese, and Mexican cuisines, along with a wide range of drinks to complement your meal. It's the perfect place for gatherings and family dining. ",
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
