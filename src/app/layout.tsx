"use client";
import "../../public/vendor/bootstrap/css/bootstrap.min.css";
import "../../public/vendor/bootstrap-icons/bootstrap-icons.css";
import "../../public/vendor/aos/aos.css";
import "../../public/vendor/swiper/swiper-bundle.min.css";
import "../../public/vendor/glightbox/css/glightbox.min.css";
import "./styles/scss/main.scss";
import Script from 'next/script';
import Head from 'next/head';
import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from 'next/navigation'

declare const AOS: any;
export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  const pathname = usePathname();
  useEffect(() => {
    toggleScrolled();
    toggleScrollTop();
    aosInit();

    document.addEventListener('scroll', () => {
      toggleScrolled();
      toggleScrollTop();
    });
  }, []);

  function aosInit() {
    const interval = setInterval(() => {
      if (AOS) {
        clearInterval(interval);
        AOS.init({
          duration: 600,
          easing: 'ease-in-out',
          once: true,
          mirror: false
        });
      }
    }, 100);
  }

  function toggleScrollTop() {
    const scrollTop = document.querySelector('.scroll-top');
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }

  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (selectHeader && !selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) {
      return;
    }
    if (selectBody) {
      window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
    }
  }

  function toggleNavbar() {
    const body = document.querySelector('body');
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
    if (body) {
      body.classList.toggle('mobile-nav-active');
    }
    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.classList.toggle('bi-list');
      mobileNavToggleBtn.classList.toggle('bi-x');
    }
  }

  function hideMobileNavToggle() {
    if (document.querySelector('.mobile-nav-active')) {
      toggleNavbar();
    }
  }

  function scrollToTop(e: any) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

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
        <div className="index-page">

          <header id="header" className="header d-flex align-items-center fixed-top">
            <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

              <Link href="home" className="logo d-flex align-items-center">
                <h1 className="sitename">Mohammed Hannan</h1>
              </Link>

              <nav id="navmenu" className="navmenu">
                <ul>
                  <li>
                    <Link href="/home" onClick={hideMobileNavToggle} className={pathname === '/home' || pathname === '/' ? 'active' : ''}>Home</Link>
                  </li>
                  <li>
                    <Link href="/about" onClick={hideMobileNavToggle} className={pathname === '/about' ? 'active' : ''}>About</Link>
                  </li>
                  <li>
                    <Link href="/resume" onClick={hideMobileNavToggle} className={pathname === '/resume' ? 'active' : ''}>Resume</Link>
                  </li>
                  <li>
                    <Link href="/portfolio" onClick={hideMobileNavToggle} className={pathname === '/portfolio' ? 'active' : ''}>Portfolio</Link>
                  </li>
                  <li>
                    <Link href="/contact" onClick={hideMobileNavToggle} className={pathname === '/contact' ? 'active' : ''}>Contact</Link>
                  </li>
                </ul>
                <i className="mobile-nav-toggle d-xl-none bi bi-list" onClick={toggleNavbar}></i>
              </nav>

            </div>
          </header>

          {children}

          <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center" onClick={scrollToTop}><i className="bi bi-arrow-up-short"></i></a>
        </div>

        <Script src="/vendor/bootstrap/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/vendor/bootstrap/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/vendor/aos/aos.js" strategy="afterInteractive" />
        <Script src="/vendor/typed.js/typed.umd.js" strategy="afterInteractive" />
        {/* <Script src="/vendor/purecounter/purecounter_vanilla.js" strategy="afterInteractive" /> */}
        <Script src="/vendor/waypoints/noframework.waypoints.js" strategy="afterInteractive" />
        <Script src="/vendor/swiper/swiper-bundle.min.js" strategy="afterInteractive" />
        <Script src="/vendor/glightbox/js/glightbox.min.js" strategy="afterInteractive" />
        <Script src="/vendor/imagesloaded/imagesloaded.pkgd.min.js" strategy="afterInteractive" />
        {/* <Script src="/vendor/isotope-layout/isotope.pkgd.min.js" strategy="afterInteractive" /> */}
        {/* <Script src="/js/main.js" strategy="afterInteractive" /> */}
      </body>
    </html>
  );
}
