import "./globals.css";
import NavbarComponent from "../components/Navbar";
import { Plus_Jakarta_Sans } from "next/font/google";
import Footer from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // pilih bobot yang dipakai
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jakarta.className}>
        <NavbarComponent/>
        <main className="pt-18">{children}</main>
        {/* <Footer/> */}
      </body>
    </html>
  );
}
