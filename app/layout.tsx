import type { Metadata } from "next";
import "./globals.css";
import { roboto_flex } from "./fonts/fonts";
import style from "./layout.module.css";

export const metadata: Metadata = {
  title: "Digital StreetArtizz",
  description: "Identify yourself with your music taste, upload and share your music to and with others",
  applicationName: "Digital StreetArtizz",
  keywords: ["music", "streaming", "entertainment"],
  authors: { name: "Daan Roelofs" },
  openGraph: {
    title: "Digital StreetArtizz",
    description: "Identify yourself with your music taste, upload and share your music to and with others",
    url: "",
    siteName: "Digital StreetArtizz",
    type: "website",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto_flex.className}>
        <div className={style.container}>
          <div className={style.top}>
            <h3>Music Streaming</h3>
          </div>
          {children}
          <div className={style.footer}>
            <h3>Browse and listen to music of your choice</h3>
          </div>
        </div>
      </body>
    </html>
  );
}
