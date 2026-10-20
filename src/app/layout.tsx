import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist } from "next/font/google";
import { profile } from "@/content/site";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const bricolage = Bricolage_Grotesque({ variable: "--font-bricolage", subsets: ["latin"], weight: ["600", "700", "800"] });

// Set by the Pages workflow, e.g. https://mahmoud-abo-al-ela.github.io/mahmoud-ali
const siteUrl = process.env.SITE_URL ?? "http://localhost:3000";

const title = `${profile.name}, ${profile.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description: profile.headline,
  authors: [{ name: profile.name, url: profile.github }],
  openGraph: { title, description: profile.headline, type: "website", url: `${siteUrl}/`, images: [{ url: `${siteUrl}/og.png`, width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title, description: profile.headline, images: [`${siteUrl}/og.png`] },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f3f7" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0c12" },
  ],
};

// Runs before first paint so the saved or system theme never flashes.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme="dark"}})()`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" dir="ltr" data-theme="dark" suppressHydrationWarning className={`${geist.variable} ${bricolage.variable} antialiased`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh font-sans">{children}</body>
    </html>
  );
}
