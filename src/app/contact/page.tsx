import Link from "next/link";

export default function Contact() {
  return (
    <div className="contact-page">

      <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

          <a href="index.html" className="logo d-flex align-items-center">
            <h1 className="sitename">Mohammed Hannan</h1>
          </a>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li><Link href="/home">Home</Link></li>
              <li><Link href="/about" >About</Link></li>
              <li><Link href="/resume">Resume</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/contact" className="active">Contact</Link></li>
              {/* <li className="dropdown"><a href="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                  <ul>
                    <li><a href="#">Dropdown 1</a></li>
                    <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                      <ul>
                        <li><a href="#">Deep Dropdown 1</a></li>
                        <li><a href="#">Deep Dropdown 2</a></li>
                        <li><a href="#">Deep Dropdown 3</a></li>
                        <li><a href="#">Deep Dropdown 4</a></li>
                        <li><a href="#">Deep Dropdown 5</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Dropdown 2</a></li>
                    <li><a href="#">Dropdown 3</a></li>
                    <li><a href="#">Dropdown 4</a></li>
                  </ul>
                </li> */}
              {/* <li><a href="contact.html" className="active">Contact</a></li> */}
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
                  <h1>Contact</h1>
                  <p className="mb-0">Feel free to connect with me to discuss innovative ideas, technical challenges, or exciting collaboration opportunities!</p>
                </div>
              </div>
            </div>
          </div>
          <nav className="breadcrumbs">
            <div className="container">
              <ol>
                <li><a href="index.html">Home</a></li>
                <li className="current">Contact</li>
              </ol>
            </div>
          </nav>
        </div>
        <section id="contact" className="contact section">

          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="row gy-4">

              <div className="col-md-6">
                <div className="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
                  <i className="icon bi bi-geo-alt flex-shrink-0"></i>
                  <div>
                    <h3>Address</h3>
                    <p>252 Passaic Ave, East Newark, NJ 07029</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="300">
                  <i className="icon bi bi-telephone flex-shrink-0"></i>
                  <div>
                    <h3>Call Me</h3>
                    <p>+1(551) 254-8706</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="400">
                  <i className="icon bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h3>Email Me</h3>
                    <p>desaihannan9900@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="500">
                  <i className="icon bi bi-share flex-shrink-0"></i>
                  <div>
                    <h3>Social Profiles</h3>
                    <div className="social-links">
                      {/* <a href="#"><i className="bi bi-twitter-x"></i></a> */}
                      {/* <a href="#"><i className="bi bi-facebook"></i></a> */}
                      {/* <a href="#"><i className="bi bi-instagram"></i></a> */}
                      {/* <a href="#"><i className="bi bi-skype"></i></a> */}
                      <a href="http://www.linkedin.com/in/mohannandesai0286"><i className="bi bi-linkedin"></i></a>
                      <a href="https://github.com/hannandesai"><i className="bi bi-github"></i></a>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <form className="php-email-form" data-aos="fade-up" data-aos-delay="600">
              <div className="row gy-4">

                <div className="col-md-6">
                  <input type="text" name="name" className="form-control" placeholder="Your Name" />
                </div>

                <div className="col-md-6 ">
                  <input type="email" className="form-control" name="email" placeholder="Your Email" />
                </div>

                <div className="col-md-12">
                  <input type="text" className="form-control" name="subject" placeholder="Subject" />
                </div>

                <div className="col-md-12">
                  <textarea className="form-control" name="message" placeholder="Message"></textarea>
                </div>

                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>

                  <button type="submit">Send Message</button>
                </div>

              </div>
            </form>

          </div>

        </section>

      </main>

      <footer id="footer" className="footer dark-background">
        <div className="container">
          {/* <h3 className="sitename">Personal</h3> */}
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
