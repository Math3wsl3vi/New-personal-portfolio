import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

// No font import is needed here anymore

export const metadata: Metadata = {
  title: "Levi Kulei - Full Stack Developer",
  description: "Full Stack Developer from Kenya with 5 years of experience.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      {/* No className is needed on the body tag for the font */}
      <body className="antialiased">{children}</body>
    </html>
  )
} 