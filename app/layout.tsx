import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/reduxtoolkit/provider";
import ScrollToTopButton from "@/components/top";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tema Digital Designs",
  description: "Crafting Digital Experiences, One Pixel at a Time.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ToastContainer />
          <div className={`body`}>
            {children}
            <ScrollToTopButton />
          </div>
        </Providers>
      </body>
    </html>
  );
}
