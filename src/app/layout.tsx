import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import AnimatedBackground from "./components/AnimatedBackground";
// import AnimatedCursor from "./components/AnimatedCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Th1enq - Personal website",
  description:
    "Competitive Programmer and open source enthusiast. Building modern web applications and sharing knowledge through code.",
  authors: [{ name: "Th1enq", url: "https://github.com/th1enq" }],
  creator: "Th1enq",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="65115862-88b5-4b2a-8768-11b2a06702f6"
        ></script>
      </head>
      <body className={`${inter.className} bg-black`}>
        <AnimatedBackground />
        {/* <AnimatedCursor /> */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
