import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import NavBar from "./components/NavBar";
import Footer from "./components/footer";
import "./globals.css";
import { Inter, Oxygen, Oxygen_Mono } from "next/font/google";

config.autoAddCss = false;

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oxygen",
});

const oxygen = Oxygen({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-oxygen",
});
const oxygen_mono = Oxygen_Mono({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-oxygen-mono",
});

export const metadata = {
  title: "Yisacc Aberham's Portfolio website",
  description:
    "Yisacc Aberham is a web developer focussed in frontend from Ethiopia with interest in music and travel and I'm always curious to learn more when it comes to new technologies and creative coding.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="box-border">
      <head></head>
      <body
        className={`${inter.variable} ${oxygen.variable} ${oxygen_mono.variable}`}
      >
        <main className="flex min-h-screen flex-col justify-between">
          <NavBar />
          {children}
          <div className="bg-gradient-to-r from-magneta to-aqua h-[2px]"></div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
