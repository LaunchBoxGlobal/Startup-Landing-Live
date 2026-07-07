import { Outfit } from "next/font/google";
import "./globals.css";
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
