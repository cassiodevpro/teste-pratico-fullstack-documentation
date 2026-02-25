import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Documentação Teste Fullstack",
  description: "Documentação Teste Fullstack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen w-full text-white flex items-center justify-center py-12 px-4 ${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ background: "linear-gradient(135deg, #0a2240, #1a2a4a)" }}
      >
        <main className="w-full max-w-3xl bg-[#162447] rounded-2xl shadow-xl p-8 md:p-12 flex flex-col gap-8 items-center">
          {children}
        </main>
      </body>
    </html>
  );
}