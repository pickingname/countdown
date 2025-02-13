import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Nav from "@/components/ui/nav";

const currentFont = Outfit({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "countdown",
  description: "generic description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${currentFont.className} grid-background min-w-[385px] px-3`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SpeedInsights />
          <Analytics />
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
