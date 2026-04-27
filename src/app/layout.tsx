import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://oliveapp.com'),
  title: "Discover Olive: Your family's nutrition ally and powerful food scanner app",
  description:
    "Join a supportive community of over 200,000 users, get expert-backed insights, and simplify food choices. Olive's database consists of over 1 million products, 10,000 healthy-fats restaurants, and independently lab-tested foods so you can feed your family with confidence.",
  keywords: ["food scanner", "nutrition", "healthy eating", "ingredient checker", "family nutrition"],
  authors: [{ name: "Olive" }],
  robots: "index, follow",
  openGraph: {
    title: "Discover Olive: Your family's nutrition ally and powerful food scanner app",
    description:
      "Join a supportive community of over 200,000 users, get expert-backed insights, and simplify food choices.",
    url: "https://oliveapp.com",
    siteName: "Olive",
    locale: "en_US",
    type: "website",
    images: [{ url: "/images/og-image-bigger.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Discover Olive: Your family's nutrition ally and powerful food scanner app",
    description:
      "Join a supportive community of over 200,000 users, get expert-backed insights, and simplify food choices.",
    images: ["/images/og-image-bigger.png"],
  },
  icons: {
    icon: "/images/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="antialiased bg-white">
        {children}
      </body>
    </html>
  );
}
