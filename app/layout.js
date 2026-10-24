import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "Mohammed Sameer Ahmed | Frontend Developer & BCA Student",
  description:
    "Personal portfolio of Mohammed Sameer Ahmed, a frontend developer and BCA student from Surat, Gujarat. Building clean, responsive web applications.",
  keywords: [
    "Mohammed Sameer Ahmed",
    "Frontend Developer",
    "BCA Student",
    "Surat Developer",
    "Web Developer Gujarat",
    "JavaScript Developer",
    "Portfolio",
  ],
  authors: [{ name: "Mohammed Sameer Ahmed" }],
  creator: "Mohammed Sameer Ahmed",
  metadataBase: new URL("https://portfolio.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio.vercel.app",
    title: "Mohammed Sameer Ahmed | Frontend Developer & BCA Student",
    description:
      "Frontend developer and BCA student from Surat, Gujarat. Exploring modern web interfaces, JavaScript, and digital commerce.",
    siteName: "Mohammed Sameer Ahmed Portfolio",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plusJakarta.variable} scroll-smooth dark`}>
      <body className="min-h-screen bg-[#0a0a0f] text-[#f1f5f9] font-sans antialiased selection:bg-sky-400 selection:text-black">
        {children}
      </body>
    </html>
  );
}
