import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jensen Omega - Software Developer Portfolio",
  description: "Professional portfolio of Jensen Omega, a full-stack software developer specializing in backend development, system design, and building real-world applications for education and management.",
  keywords: ["Software Developer", "Full Stack Developer", "Backend Developer", "Portfolio", "Web Development"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning translate="no" className="notranslate">
      <body suppressHydrationWarning className="notranslate">
        {children}
      </body>
    </html>
  );
}

