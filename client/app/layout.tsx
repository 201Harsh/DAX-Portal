import type { Metadata } from "next";
import { Georama } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Harsh’s Portfolio | DAX Portal — OS-Grade Interactive System",
    template: "%s | DAX Portal",
  },

  description:
    "DAX Portal is an OS-grade interactive portfolio by Harsh Pandey. Experience a real operating-system-style interface with boot animation, desktop and mobile OS modes, window and app management, terminal, finder-style data vault, and system-level design.",

  keywords: [
    "DAX Portal",
    "Harsh Pandey Portfolio",
    "OS style portfolio",
    "Operating system portfolio website",
    "Interactive developer portfolio",
    "Next.js portfolio",
    "System design portfolio",
    "Web OS UI",
    "Desktop style web app",
    "Mobile OS web interface",
    "Full stack developer portfolio",
    "Frontend system design",
    "Window manager web app",
    "Terminal based portfolio",
  ],

  authors: [{ name: "Harsh Pandey", url: "https://github.com/201Harsh" }],
  creator: "Harsh Pandey",
  publisher: "Harsh Pandey",

  metadataBase: new URL("https://dax-portal.vercel.app"),

  openGraph: {
    title: "Harsh’s Portfolio | DAX Portal — OS-Grade Interactive System",
    description:
      "A next-generation, operating-system-style portfolio by Harsh Pandey, complete with a real boot sequence, desktop and mobile OS environments, window and app management, a built-in terminal, and a Finder-inspired data vault.",
    url: "https://dax-portal.vercel.app",
    siteName: "DAX Portal",
    images: [
      {
        url: "/examples/1.png",
        width: 1200,
        height: 630,
        alt: "DAX Portal — OS-Grade Interactive Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  category: "technology",
};

export const georama = Georama({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={georama.className}>{children}</body>
    </html>
  );
}
