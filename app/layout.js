import Footer from "@/pages/Footer";
import "./globals.css";

import { Navbar } from "@/components";

export const metadata = {
  title: "Mobile Insight",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html
      className="bg-gradient-to-br from-[#dad5f6] via-white to-[#f3c8ec] min-h-screen text-[#030208]"
      lang="en"
    >
      <body className="min-h-screen">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
