"use client";
import Link from 'next/link';

export default function Home() {
    return (
        <div className="index-page">

            <header id="header" className="header d-flex align-items-center fixed-top">
                <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

                    <a href="index.html" className="logo d-flex align-items-center">
                        {/* <h1 className="sitename">Hannan</h1> */}
                    </a>

                    <nav id="navmenu" className="navmenu">
                        <ul>
                            <li><Link href="/home" className="active">Home</Link></li>
                            <li><Link href="/about" >About</Link></li>
                            <li><Link href="/resume">Resume</Link></li>
                            <li><Link href="/portfolio">Portfolio</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                    </nav>

                </div>
            </header>

            <main className="main">
                <section id="hero" className="hero section dark-background">

                    <img src="/img/landingpage1.jpg" alt="" data-aos="fade-in" />

                    <div className="container" data-aos="zoom-out" data-aos-delay="100">
                        {/* <h2>Mohammed</h2>1 */}
                        <h2>Hannan Desai</h2>
                        <p>I&apos;m <span className="typed" data-typed-items="Computer Enginner, Software Engineer, Web Application Developer">Software Engineer</span>
                            <span className="typed-cursor typed-cursor--blink"></span></p>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/mohannandesai0286" target='_blank'><i className="bi bi-linkedin"></i></a>
                            <a href="https://github.com/hannandesai" target='_blank'><i className="bi bi-github"></i></a>
                            <a href="https://medium.com/@desaihannan9900" target='_blank'><i className="bi bi-medium"></i></a>
                        </div>
                    </div>

                </section>

            </main>

            <footer id="footer" className="footer dark-background">
                <div className="container">
                    {/* <h3 className="sitename">Powered by caffeine and clean code.</h3> */}
                    <p>Powered by caffeine and clean code.</p>
                    {/* <div className="social-links d-flex justify-content-center">
                        <a href=""><i className="bi bi-twitter-x"></i></a>
                        <a href=""><i className="bi bi-facebook"></i></a>
                        <a href=""><i className="bi bi-instagram"></i></a>
                        <a href=""><i className="bi bi-skype"></i></a>
                        <a href=""><i className="bi bi-linkedin"></i></a>
                    </div> */}
                    <div className="container">
                        <div className="copyright">
                            <span>Copyright</span> <strong className="px-1 sitename">Hannan Desai</strong> <span>All Rights Reserved</span>
                        </div>
                    </div>
                </div>
            </footer>

            <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

            {/* <div id="preloader"></div> */}

        </div>
    );
}
