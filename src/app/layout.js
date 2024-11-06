import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import ToastProvider from "@/lib/ToastProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Akash Kumar | Portfolio",
  description:
    "Akash Kumar's Personal Portfolio | MERN Stack | Software Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ToastProvider>{children}</ToastProvider>
      </body>
      <Script
        type="module"
        src="https://unpkg.com/ionicons@7.4.0/dist/ionicons/ionicons.esm.js"
      ></Script>
      <Script
        noModule
        src="https://unpkg.com/ionicons@7.4.0/dist/ionicons/ionicons.js"
      ></Script>
    </html>
  );
}
