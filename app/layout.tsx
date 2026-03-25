import type { Metadata } from "next";
import "./globals.scss";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "FinTrack",
  description: "Gerencie suas transações e acompanhe seu saldo facilmente",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
