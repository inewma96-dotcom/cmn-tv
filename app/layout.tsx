import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Give | CMN Television",
  description: "Partner with CMN Television to share hope around the world.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
