import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "矯正歯科ネットPLUS | 選ばれる医院になる集患戦略",
  description:
    "比較される前に認知を取り、第三者記事・エリアSEO・AI検索・スマホ記事で矯正患者との接点を増やす掲載促進LPです。",
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
