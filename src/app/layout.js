import { Poppins } from "next/font/google";
import "./globals.css";
import UIChrome from "@/components/UIChrome";
import CarouselProvider from "@/contexts/CarouselContext";
import Providers from "@/contexts/Providers";
import Header from "@/components/Header/Header";
import Wheel from "@/components/Wheel/Wheel";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Valentin Westermeyer",
  description: "Portfolio 2025 Valentin Westermeyer, développeur à Strasbourg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${poppins.className} antialiased touch-none`}>
        <CarouselProvider>
          <Providers>
            <main className="flex flex-col h-auto">
              <Header />
              {children}
            </main>
            <Wheel />
          </Providers>
        </CarouselProvider>
      </body>
    </html>
  );
}
