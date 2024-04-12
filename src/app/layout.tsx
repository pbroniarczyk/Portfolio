import type { Metadata } from "next";
import { Raleway } from "next/font/google";

import PageShell from "@/components/PageShell/PageShell";

import "./globals.css";

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
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
