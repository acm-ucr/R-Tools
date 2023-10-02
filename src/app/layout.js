/* eslint-disable new-cap */
import Navigation from "@/components/Navigation";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-`}>
        <Navigation />
        <div className="flex flex-col w-full">{children}</div>
        <Footer />
      </body>
    </html>
  );
}