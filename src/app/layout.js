import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/shared/NavBar";

const inter = Inter({ subsets: ["latin"] });
export const poppins = Poppins ({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar></NavBar>
        {children}
        </body>
    </html>
  );
}
