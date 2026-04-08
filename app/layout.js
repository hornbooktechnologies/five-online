import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/common/WhatsAppButton";
import AosInit from "./components/common/AosInit";

export const metadata = {
  title: {
    template: "%s | Five Online | Best Web Design Company in Mumbai",
    default: "Five Online | Best Web Design Company in Mumbai",
  },
  description:
    "Five Online is a premium web design company helping enterprises and D2C brands increase leads, sales, and ROAS through conversion-driven websites.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" rel="stylesheet" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col">
        <AosInit />
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
