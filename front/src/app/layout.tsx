import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Logo from "@/components/layout/logo"
import { CreateProjectButton } from "@/components/project/create"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "robots",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} antialiased`}
            >
                <header className="pt-6 container mx-auto flex items-center border-b pb-6 mb-6">
                    <Logo />

                    <CreateProjectButton />
                </header>

                <main>
                    {children}
                </main>
          </body>
        </html>
    );
}
