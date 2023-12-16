import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "../styles/globals.css";

const worksans = Work_Sans({
  display: "swap",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-worksans",
});

export const metadata: Metadata = {
  title: "Frontend Mentor | FAQ Accordion<",
  description: "FAQ Accordion Challenge|FrontEnd Mentor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${worksans.className}`}>
      <body className="h-screen w-screen bg-violet-50 bg-mobile bg-contain bg-no-repeat md:bg-desktop">
        {children}
      </body>
    </html>
  );
}
