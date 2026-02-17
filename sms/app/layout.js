import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import SessionWrapper from "@/components/SessionWrapper";
import { Toaster } from 'react-hot-toast'
import StoreProvider from "@/components/StoreProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "OzOff - The Student Management System",
  description: "Manage student information with ease using OzOff, the comprehensive student management system designed for educational institutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionWrapper>
        <StoreProvider>
          <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            <Theme >
              <Navbar />
              {children}
              <Toaster />
              <Footer />
            </Theme>
          </body>
        </StoreProvider>
      </SessionWrapper>
    </html>
  );
}
