import localFont from "next/font/local";
import "./globals.css";
import HeaderLayout from "@/layout/HeaderLayout/HeaderLayout";
import FooterLayout from "@/layout/FooterLayout/FooterLayout";

const inter = localFont({
  src: "./fonts/Inter.woff2",
  variable: "--font-inter",
  weight: "100 900"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} antialiased`}
        data-theme="dark"
      >
        <div className="w-full min-h-screen flex flex-col">
          <HeaderLayout></HeaderLayout>
          <main className="flex-1">
            {children}
          </main>
          <FooterLayout></FooterLayout>
        </div>
      </body>
    </html>
  );
}
