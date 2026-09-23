
import type { Metadata } from "next";
import "./globals.css";
import "@/styles/variables.css"; 
import { cause, naumGothic } from "./fonts";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";


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
      <body className="min-h-full flex flex-col bg-surface-background overflow-hidden">
        <Navigation />
        {/* <main className="flex-1">{children}</main> */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
