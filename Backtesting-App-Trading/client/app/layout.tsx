import type { Metadata } from "next";
import "./globals.css";

import { buda } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Toro's Backtesting App",
  description: "que bonita app ",
};

export default function RootLayout({  children,}: Readonly<{  children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={buda.className}>
        {children}
      </body>
    </html>
  );
}
