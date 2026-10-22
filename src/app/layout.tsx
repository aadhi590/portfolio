import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FBFBFB",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Aadhitya H — AI Engineer & Full-Stack Developer",
  description:
    "Personal portfolio of Aadhitya H, AI Engineer and Full-Stack Developer specializing in multi-agent systems, generative AI, and design workflow automation. Candidate for AI Generalist (Design) at Ather Energy.",
  keywords: [
    "Aadhitya H",
    "AI Engineer",
    "AI Generalist",
    "Design Workflow Automation",
    "DesignFlow AI",
    "Multi-Agent Systems",
    "LangGraph",
    "FastAPI",
    "Gemini API",
    "Full-Stack Developer",
    "Chennai",
    "SRM IST",
  ],
  authors: [{ name: "Aadhitya H", url: "https://github.com/aadhi590" }],
  creator: "Aadhitya H",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aadhitya.dev",
    title: "Aadhitya H — AI Engineer & Full-Stack Developer",
    description:
      "AI Engineer and Full-Stack Developer focused on multi-agent systems, generative AI, and practical AI-powered applications.",
    siteName: "Aadhitya H Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aadhitya H — AI Engineer & Full-Stack Developer",
    description:
      "AI Engineer and Full-Stack Developer specializing in multi-agent systems and design workflow automation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#F2F4F7] text-[#111827] font-sans selection:bg-blue-100 selection:text-blue-900">
        {children}
      </body>
    </html>
  );
}
