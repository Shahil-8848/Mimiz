import { Metadata } from "next";
import { Geist, Cormorant_Garamond } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/context/theme-context";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Mimiz Cafe | Premier Restaurant in Birtamode, Jhapa",
    template: "%s | Mimiz Cafe"
  },
  description: "Experience the finest dining in Birtamode, Jhapa at Mimiz Cafe. Serving delicious plant-based food, organic beverages, and sweet treats in a cozy, aesthetic environment.",
  metadataBase: new URL("https://mimizcafe.com"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Mimiz Cafe",
    "Mimiz Cafe Birtamode",
    "Vegetarian restaurant Birtamode",
    "Cafe in Birtamode",
    "Jhapa Nepal restaurant",
    "Best cafe in Jhapa",
    "Organic coffee Birtamode",
    "Momo Birtamode",
    "Chatamari Jhapa"
  ],
  authors: [{ name: "Mimiz Cafe" }],
  openGraph: {
    title: "Mimiz Cafe | Premier Restaurant in Birtamode, Jhapa",
    description: "Experience the finest dining in Birtamode, Jhapa at Mimiz Cafe. Serving delicious plant-based food, organic beverages, and sweet treats in a cozy, aesthetic environment.",
    url: "https://mimizcafe.com",
    siteName: "Mimiz Cafe",
    images: [
      {
        url: "/photos/about/hall.jpg",
        width: 1200,
        height: 630,
        alt: "Mimiz Cafe Dining Hall",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mimiz Cafe | Premier Restaurant in Birtamode, Jhapa",
    description: "Experience the finest dining in Birtamode, Jhapa at Mimiz Cafe. Serving delicious plant-based food, organic beverages, and sweet treats in a cozy, aesthetic environment.",
    images: ["/photos/about/hall.jpg"],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${cormorant.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
