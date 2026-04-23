import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Unbounded, Geist } from "next/font/google";
import "./globals.css";
import ThemeModeProvider from "@/components/ThemeModeProvider";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PostShot | Generate Stunning Image",
  description: "Turn any tweet into a stunning image.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${unbounded.variable} ${geist.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <ThemeModeProvider>{children}</ThemeModeProvider>
      </body>
    </html>
  );
}
