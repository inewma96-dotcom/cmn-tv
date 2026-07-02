import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PNG Christian Media Network TV",
  description: "Christian TV for Today's Generation in Papua New Guinea.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
