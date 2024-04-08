import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Smart Parking Management",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <div className="h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
