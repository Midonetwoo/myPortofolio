import "./globals.css";
import { DM_Sans, Inter } from "next/font/google";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-display" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata = {
  title: "Midonet Portfolio",
  description: "Cinematography, design, and web experiences"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${inter.variable}`}>
      <body className="bg-mist text-ink">
        <NavBar />
        <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-12 px-4 pb-16 pt-10 sm:px-8 md:px-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
