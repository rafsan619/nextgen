import type { Metadata } from "next"
import "./globals.css"
import { ClerkProvider } from "@clerk/nextjs"
import { Toaster } from "@/components/ui/toaster"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Next Gen",
  description: "Next Gen E-Learning System",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <ClerkProvider dynamic>
      <html lang="en">
        <body className="antialiased">
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
    </Suspense>
  )
}
