import type { Metadata } from "next";
import "./globals.css";
import SmoothScroller from "@/components/SmoothScroller";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Vivo",
  description: "Khurshid",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body
        cz-shortcut-listen="true"
        className="relative flex flex-col bg-light-cool-gray "
      >
        <SmoothScroller>
          {children}
          <Footer />
        </SmoothScroller>
      </body>
    </html>
  );
}
