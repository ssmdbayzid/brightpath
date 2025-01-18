import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ReduxProvider from "@/Hooks/ReduxProvider";
import 'react-responsive-modal/styles.css';
import GoToButton from "@/components/layout/GoToButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brightpath",
  description: "Brightpath Institute",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
      <html lang="en">
      <head>
          <link rel="icon" href="/logo.png" type="image/x-icon" sizes="16x16"/>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <ReduxProvider>
          <Header/>
      <GoToButton />
          <div className="children">{children}</div>
          <Footer/>
      </ReduxProvider>
      </body>
      </html>
  );
}