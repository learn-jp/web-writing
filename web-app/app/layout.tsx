import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Webライティングの教科書",
  description: "第1章 第1節 — Webライティングとは何か",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
