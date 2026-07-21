import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollEffects from "@/components/ScrollEffects";

const vazir = Vazirmatn({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-vazir",
});

export const metadata = {
  title: "طراحی نیروانا | طراحی، ساخت کابینت و کلبه چوبی",
  description:
    "طراحی و ساخت کابینت مدرن و کلاسیک، طراحی اختصاصی آشپزخانه و معرفی بهترین متریال.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className={vazir.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollEffects />
      </body>
    </html>
  );
}
