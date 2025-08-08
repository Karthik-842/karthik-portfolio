import { Outfit as outfitFont, Ovo as ovoFont } from "next/font/google";
import "./globals.css";

const outfit = outfitFont({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const ovo = ovoFont({
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata = {
  title: "Portfolio",
  description: "Karthi's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden `}
      >
        {children}
      </body>
    </html>
  );
}
