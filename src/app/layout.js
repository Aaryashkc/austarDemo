import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Austar - Cyber Tech",
  description: "Austar is a leading cyber technology company dedicated to providing innovative solutions in cybersecurity, network management, system development, and DevSecOps. Our mission is to empower businesses with cutting-edge technology and expert services to secure their digital assets and drive growth in the ever-evolving digital landscape.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
