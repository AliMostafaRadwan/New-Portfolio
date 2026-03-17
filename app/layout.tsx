import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ali Radwan | AI Engineer",
  description:
    "Personal portfolio showcasing autonomous agents, computer vision systems, and scalable ML infrastructure.",
  keywords: ["portfolio", "AI engineer", "MLops", "computer vision", "LLMs", "Python", "FastAPI"],
  authors: [{ name: "Ali Radwan" }],
  openGraph: {
    title: "Ali Radwan | AI Engineer",
    description: "Building intelligent systems: autonomous agents, computer vision, and scalable ML infrastructure.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="antialiased bg-zinc-950 text-white min-h-screen">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
