import "./globals.css";
import { DM_Sans, Inter } from "next/font/google";
import dynamic from "next/dynamic";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-display" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const PixelBlast = dynamic(() => import("../components/PixelBlast"), { ssr: false });

export const metadata = {
  title: "Midonet Portfolio",
  description: "Cinematography, design, and web experiences"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${inter.variable}`}>
      <body className="bg-[var(--background)] text-[var(--foreground)]">
        <div className="pointer-events-none fixed inset-0 -z-10 opacity-70">
          <PixelBlast
            variant="circle"
            pixelSize={6}
            color="#B19EEF"
            patternScale={3}
            patternDensity={1.1}
            pixelSizeJitter={0.4}
            enableRipples
            rippleSpeed={0.35}
            rippleThickness={0.1}
            rippleIntensityScale={1.4}
            liquid
            liquidStrength={0.1}
            liquidRadius={1.1}
            liquidWobbleSpeed={4.5}
            speed={0.55}
            edgeFade={0.3}
            transparent
          />
        </div>
        <NavBar />
        <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-12 px-4 pb-16 pt-10 sm:px-8 md:px-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
