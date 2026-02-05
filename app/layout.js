import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL('https://vigneshkumar.dev'),
  title: "Vignesh Kumar S - Senior Developer | Mobile & Full Stack",
  description: "Senior Developer with 3.8+ years of experience specializing in high-performance React Native mobile applications and scalable Python (FastAPI) backend solutions.",
  keywords: ["Senior Developer", "React Native Developer", "Full Stack Developer", "Mobile App Developer", "iOS", "Android", "JavaScript", "TypeScript", "Python", "FastAPI", "Redux", "Firebase", "AWS"],
  authors: [{ name: "Vignesh Kumar S" }],
  creator: "Vignesh Kumar S",
  openGraph: {
    title: "Vignesh Kumar S - Senior Developer | Mobile & Full Stack",
    description: "Senior Developer with 3.8+ years of experience in React Native and Python FastAPI",
    url: "https://vigneshkumar.dev",
    siteName: "Vignesh Kumar S Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vignesh Kumar S - Senior Developer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vignesh Kumar S - Senior Developer | Mobile & Full Stack",
    description: "Senior Developer with 3.8+ years of experience in React Native and Python FastAPI",
    images: ["/og-image.jpg"],
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plusJakarta.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
