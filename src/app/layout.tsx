import "./globals.css";
import { Alegreya_Sans_SC, Quicksand, Source_Serif_4 } from "next/font/google";
import Header from "@/components/Header";
import clsx from "clsx";

export const metadata = {
  title: "SciQuel",
  description: "SciQuel",
};

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
  weight: "variable",
});

const alegreyaSansSC = Alegreya_Sans_SC({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-alegreya-sans-sc",
  display: "swap",
});

const sourceSerif4 = Source_Serif_4({
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-source-serif-4",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          quicksand.className,
          alegreyaSansSC.variable,
          sourceSerif4.variable
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}