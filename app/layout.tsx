import type { Metadata } from "next";
import { Forum } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const forum = Forum({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paradiso Pokhara - Sports bar and grill",
  description:
    "Experience an unforgettable dining adventure with great food and live music that keeps the night alive in a vibrant, family-friendly environment. Our restaurant not only offers an immaculate setting but also boasts an exceptionally friendly staff and unparalleled hospitality. Nestled just behind our premises, enjoy the breathtaking view of Lake Fewa. Our extensive menu showcases the finest Indian, Italian, Chinese, and Mexican cuisines, ensuring a delightful culinary journey. Complement your meal with our wide array of drinks. It's the ultimate destination for gatherings and family dining, promising an extraordinary experience that will leave you coming back for more. ",
  icons: {
    icon: "favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          href="/images/logo.png"
        />
      </Head>
      <body className={forum.className}>{children}</body>
    </html>
  );
}
