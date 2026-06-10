import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/global/Navbar";
import { Footer } from "@/components/global/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`overflow-x-hidden ${outfit.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
