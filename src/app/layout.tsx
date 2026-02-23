import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";
import { USE_TOP_MIDDLE_NAV } from "@/config/navigation";

export const metadata: Metadata = {
  title: "BTHS NHS - National Honor Society",
  description: "Brooklyn Technical High School National Honor Society - Character, Leadership, Scholarship, Service",
  icons: {
    icon: "/data/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-darkBlue-900 text-white flex flex-col min-h-screen">
        {USE_TOP_MIDDLE_NAV ? <TopNavBar /> : <Navigation />}
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
