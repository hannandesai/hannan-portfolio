"use client";
import "../../public/vendor/bootstrap/css/bootstrap.min.css";
import "../../public/vendor/bootstrap-icons/bootstrap-icons.css";
import "../../public/vendor/aos/aos.css";
import "../../public/vendor/swiper/swiper-bundle.min.css";
import "../../public/vendor/glightbox/css/glightbox.min.css";
import "./styles/scss/main.scss";
import Script from 'next/script';
import Head from 'next/head';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport"></meta>
        <title>Mohammed Hannan Desai</title>

        <link href="assets/img/favicon.png" rel="icon" />
        <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
      </Head>
      <body>
        {children}

        <Script src="/vendor/bootstrap/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/vendor/bootstrap/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/vendor/php-email-form/validate.js" strategy="afterInteractive" />
        <Script src="/vendor/aos/aos.js" strategy="afterInteractive" />
        <Script src="/vendor/typed.js/typed.umd.js" strategy="afterInteractive" />
        <Script src="/vendor/purecounter/purecounter_vanilla.js" strategy="afterInteractive" />
        <Script src="/vendor/waypoints/noframework.waypoints.js" strategy="afterInteractive" />
        <Script src="/vendor/swiper/swiper-bundle.min.js" strategy="afterInteractive" />
        <Script src="/vendor/glightbox/js/glightbox.min.js" strategy="afterInteractive" />
        <Script src="/vendor/imagesloaded/imagesloaded.pkgd.min.js" strategy="afterInteractive" />
        <Script src="/vendor/isotope-layout/isotope.pkgd.min.js" strategy="afterInteractive" />
        <Script src="/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
