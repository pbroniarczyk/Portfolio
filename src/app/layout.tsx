import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import "./globals.scss";

const raleway = Raleway({
  weight: ["100", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Paweł Broniarczyk | Frontend Developer",
  description: "Something something Dark Side",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
