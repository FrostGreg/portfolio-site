import "./globals.css";

// import { config } from "@fortawesome/fontawesome-svg-core";
// import "@fortawesome/fontawesome-svg-core/styles.css";
// config.autoAddCss = false;

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gregory Frost.",
  description:
    "Software engineer portfolio of Greg Frost, currently looking for opportunities in a Web development role",
  language: "English",
  keywords:
    "Student, Web developer, React, Next, Typescript, Javascript, Cypress, Portfolio, Gregory Frost",
  author: "Gregory Frost",
  themeColor: "#222831",
  colorScheme: "dark light",
  icons: {
    icon: "/favicon.ico?v=2",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
