import type { Metadata } from "next";
import { Footer, Header } from "@/components/components";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'Home | Green Pulse Template',
    template: '%s | Green Pulse Template'
  },
  description: "Main Layout",
  icons: {
    
  }
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
    </body>
    </html>
  );
}
