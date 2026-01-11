import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "BTHS NHS - National Honor Society",
  description: "Brooklyn Technical High School National Honor Society - Character, Leadership, Scholarship, Service",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-darkBlue-900 text-white">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-darkBlue-darker text-white border-t-2 border-gold">
          <div className="max-w-7xl mx-auto px-4 py-8 text-center">
            <p className="text-lg font-semibold">&copy; 2025 BTHS NHS. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
