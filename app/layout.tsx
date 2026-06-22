import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hari Tea Traders | Premium Hill Station Products from Valparai",
  description: "Authentic hill station products sourced directly from plantations, tribal communities, and local farmers in Valparai, Tamil Nadu. 15+ years of trusted experience.",
  keywords: ["Valparai Tea", "Organic Spices", "Hill Station Products", "Hari Tea Traders", "Premium Coffee", "Forest Honey"],
  openGraph: {
    title: "Hari Tea Traders | Premium Hill Station Products from Valparai",
    description: "Authentic hill station products sourced directly from plantations, tribal communities, and local farmers in Valparai, Tamil Nadu.",
    url: "https://hariteatraders.com",
    siteName: "Hari Tea Traders",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-cream text-charcoal min-h-screen flex flex-col overflow-x-hidden`}
      >
        <CartProvider>
          <Navbar />
          <main className="flex-1 w-full overflow-x-hidden">{children}</main>
          <Footer />
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  );
}
