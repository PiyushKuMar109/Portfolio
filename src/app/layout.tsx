import type { Metadata } from "next";
import { Poppins, Inter, Montserrat } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Piyush Kumar | Full Stack Developer & AI Engineer Portfolio",
  description: "Explore the portfolio of Piyush Kumar, a Software Engineer, Full Stack Developer, and AI Engineer specializing in React, Node.js, Python, Django, Machine Learning (YOLOv8, OpenCV), and AI integrations.",
  keywords: [
    "Piyush Kumar",
    "Software Engineer Portfolio",
    "Full Stack Developer",
    "Python Django Developer",
    "AI Engineer",
    "Machine Learning Engineer",
    "VAAAN Infra",
    "ResumeIQ",
    "B.Tech CSE"
  ],
  authors: [{ name: "Piyush Kumar" }],
  openGraph: {
    title: "Piyush Kumar | Full Stack Developer & AI Engineer Portfolio",
    description: "Explore the portfolio of Piyush Kumar, specializing in Full Stack web development, Python automation, and Machine Learning systems.",
    url: "https://piyushkumar.dev", // Placeholder or custom domain
    siteName: "Piyush Kumar Portfolio",
    images: [
      {
        url: "/og-image.png", // Will place placeholder or generate it later
        width: 1200,
        height: 630,
        alt: "Piyush Kumar Portfolio Layout",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Piyush Kumar | Full Stack Developer & AI Engineer Portfolio",
    description: "Explore the portfolio of Piyush Kumar, specializing in Full Stack web development, Python automation, and Machine Learning systems.",
    images: ["/og-image.png"],
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
      className={`${poppins.variable} ${inter.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background-dark text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
