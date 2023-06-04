import { Inter } from "next/font/google";
import { ReactNode } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

type LayoutProps = {
  children?: ReactNode;
};

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: LayoutProps) {
  return (
    <main className={`${inter.className}`}>
      <NavBar />
      {children}
      <Footer />
    </main>
  );
}
