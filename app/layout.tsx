import type { Metadata } from "next";
import { Cabin } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

const cabin = Cabin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cabin.className + " bg-gray-100 text-gray-800"}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}

