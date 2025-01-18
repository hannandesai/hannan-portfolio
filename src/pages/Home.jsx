import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    initTyped();
  }, []);

  function initTyped() {
    const interval = setInterval(() => {
      if (Typed) {
        clearInterval(interval);
        const selectTyped = document.querySelector('.typed');
        if (selectTyped) {
          let typed_strings = selectTyped.getAttribute('data-typed-items')?.split(',') || [];
          new Typed('.typed', {
            strings: typed_strings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000
          });
        }
      }
    }, 100);
  }
  return (
    <>
      <main className="main">
        <section id="hero" className="hero section dark-background">

          <img src="/img/landingpage1.jpg" alt="" data-aos="fade-in" />

          <div className="container" data-aos="zoom-out" data-aos-delay="100">
            {/* <h2>Mohammed</h2>1 */}
            <h2>Hannan Desai</h2>
            <p>I&apos;m <span className="typed" data-typed-items="Computer Engineer, Software Engineer, Web Application Developer">Software Engineer</span>
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

      {/* <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a> */}

      {/* <div id="preloader"></div> */}
    </>
  );
}

export default Home;