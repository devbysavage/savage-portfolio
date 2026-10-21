
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jobi F. Ayomide | Full-Stack Developer",
  description:
    "I'm Jobi F. Ayomide (Savage), a full-stack developer building practical web applications and thoughtful digital experiences.",
  openGraph: {
    title: "Jobi F. Ayomide | Full-Stack Developer",
    description:
      "Explore my projects in full-stack development, backend APIs, and modern web experiences.",
    siteName: "Jobi F. Ayomide Portfolio",
    type: "website",
  },
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
