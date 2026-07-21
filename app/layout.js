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

const siteUrl = "https://nirvana-beta-ten.vercel.app";
const siteTitle = "طراحی نیروانا | طراحی، آنالیز و کات‌مستر کابینت";
const siteDescription =
  "طراحی و ساخت کابینت مدرن و کلاسیک، آنالیز و کات‌مستر برای برش بهینه و کمترین دورریز، و طراحی اختصاصی آشپزخانه با بهترین متریال و کیفیت ماندگار.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: siteUrl,
    siteName: "طراحی نیروانا",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/img/faq-hero.jpg",
        width: 1448,
        height: 1086,
        alt: "طراحی نیروانا — طراحی و آنالیز کابینت",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/img/faq-hero.jpg"],
  },
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
