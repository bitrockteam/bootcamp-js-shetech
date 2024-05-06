import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bootcamp javascript Shetech - Bitrock",
  description: "Bootcamp javascript Shetech - Bitrock",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ minHeight: '100vh'}}>
        <Header />
        {children}
      </body>
    </html>
  );
}
