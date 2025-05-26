import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Importera Poppins med olika vikter om du vill
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"], // Justera vikter efter behov
    variable: "--font-poppins",
});

export const metadata: Metadata = {
    title: "Simklubb",
    description: "Officiell hemsida för simklubben",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="sv">
        <body className= {`${poppins.variable} antialiased bg-gray-200`}>
        {children}
        </body>
        </html>
    );
}
