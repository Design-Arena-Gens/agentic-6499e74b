import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eloise Cardigan Crochet Course",
  description:
    "Beginner-friendly step-by-step crochet course for the Eloise Cardigan with sizing charts, construction guide, assembly, finishing, and image prompts.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
