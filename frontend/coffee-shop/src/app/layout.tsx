import type { Metadata } from "next";
import "./globals.css";
import { cause, naumGothic } from "./fonts";
import Navigation from "@/components/navigation";


export const metadata: Metadata = {
  title: "Coffee Shop",
  description: "Coffee shop example websie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cause.variable} ${naumGothic.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-row justify-center">
        <Navigation />
        <main>{children}</main>
        </body>
    </html>
  );
}
