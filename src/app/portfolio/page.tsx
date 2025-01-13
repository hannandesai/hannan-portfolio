import Link from "next/link";

export default function Portfolio() {
    return (
        <div className="portfolio-page">

            <header id="header" className="header d-flex align-items-center fixed-top">
                <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

                    <Link href="home" className="logo d-flex align-items-center">
                        <h1 className="sitename">Mohammed Hannan</h1>
                    </Link>

                    <nav id="navmenu" className="navmenu">
                        <ul>
                            <li><Link href="/home">Home</Link></li>
                            <li><Link href="/about" >About</Link></li>
                            <li><Link href="/resume">Resume</Link></li>
                            <li><Link href="/portfolio" className="active">Portfolio</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                    </nav>

                </div>
            </header>

            <main className="main">

                <div className="page-title" data-aos="fade">
                    <div className="heading">
                        <div className="container">
                            <div className="row d-flex justify-content-center text-center">
                                <div className="col-lg-8">
                                    <h1>My Work</h1>
                                    <p className="mb-0">Below are some of the projects I have completed as an independent learning experience or via academic coursework.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav className="breadcrumbs">
                        <div className="container">
                            <ol>
                                <li><Link href="home">Home</Link></li>
                                <li className="current">Portfolio</li>
                            </ol>
                        </div>
                    </nav>
                </div>
                <section id="portfolio" className="portfolio section">

                    <div className="container">

                        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

                            <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
                                <li data-filter="*" className="filter-active">All</li>
                                <li data-filter=".filter-app">App</li>
                                <li data-filter=".filter-product">Product</li>
                                <li data-filter=".filter-branding">Branding</li>
                                <li data-filter=".filter-books">Books</li>
                            </ul>

                            <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">


                                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                                    <div className="portfolio-content h-100">
                                        <img src="/img/portfolio/project-3.png" className="img-fluid" style={{ width: '410px', height: '250px' }} alt="" />
                                        <div className="portfolio-info">
                                            <h4>UniTrade</h4>
                                            <p>Web Application</p>
                                            <a href="/img/portfolio/project-3.png" title="Branding 1" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                            <a href="https://github.com/hannandesai/electronic-trading-system-app" title="Github URL" className="details-link" target="_blank"><i className="bi bi-link-45deg"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                                    <div className="portfolio-content h-100">
                                        <img src="/img/portfolio/project-4.png" className="img-fluid" style={{ width: '410px', height: '250px' }} alt="" />
                                        <div className="portfolio-info">
                                            <h4>Quality Management System(QMS)</h4>
                                            <p>Project & Task Management Tool - Web Application</p>
                                            {/* <a href="/img/portfolio/project-4.png" title="Branding 1" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a> */}
                                            <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                                    <div className="portfolio-content h-100">
                                        <img src="/img/portfolio/project-1.jpg" className="img-fluid" style={{ width: '410px', height: '250px' }} alt="" />
                                        <div className="portfolio-info">
                                            <h4>Wine Quality Prediction</h4>
                                            <p>Trained Machine Learning model using AWS</p>
                                            {/* <a href="/img/portfolio/project-1.jpg" title="App 1" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a> */}
                                            <a href="https://github.com/hannandesai/wine-quality-prediction" title="Github URL" className="details-link" target="_blank"><i className="bi bi-link-45deg"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                                    <div className="portfolio-content h-100">
                                        <img src="/img/portfolio/project-2.jpg" className="img-fluid" style={{ width: '410px', height: '250px' }} alt="" />
                                        <div className="portfolio-info">
                                            <h4>Image Recognition Service</h4>
                                            <p>Detects object & text from images using AWS</p>
                                            {/* <a href="/img/portfolio/project-2.jpg" title="Product 1" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a> */}
                                            <a href="https://github.com/hannandesai/image-recognizition" title="Github URL" className="details-link" target="_blank"><i className="bi bi-link-45deg"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                                    <div className="portfolio-content h-100">
                                        <img src="/img/portfolio/project-5.png" className="img-fluid" style={{ width: '410px', height: '250px' }} alt="" />
                                        <div className="portfolio-info">
                                            <h4>Dike ChatBot For Recruitment</h4>
                                            <p>ChatBot for recruitment - Web Application</p>
                                            {/* <a href="/img/portfolio/project-5.png" title="App 2" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a> */}
                                            <a href="https://github.com/hannandesai/dike-chat-bot" title="Github URL" className="details-link" target="_blank"><i className="bi bi-link-45deg"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </section>

            </main>

            <footer id="footer" className="footer dark-background">
                <div className="container">
                    {/* <h3 className="sitename">Turning Ideas into Impactful Software.</h3> */}
                    <p>Turning Ideas into Impactful Software.</p>
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
