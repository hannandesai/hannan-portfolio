import "../public/vendor/bootstrap/css/bootstrap.min.css";
import "../public/vendor/bootstrap-icons/bootstrap-icons.css";
import "../public/vendor/aos/aos.css";
import "../public/vendor/swiper/swiper-bundle.min.css";
import "./styles/scss/main.scss";
import "./App.css";

import { Routes, Route, Link, useLocation } from "react-router-dom";
import { routeGroups } from "./routes";
import * as Pages from "./pages";
import { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";
import Chatbot from "./components/Chatbot";

function App() {
  const location = useLocation();
  const pathname = location.pathname;
  useEffect(() => {
    toggleScrolled();
    // toggleScrollTop();
    aosInit();

    document.addEventListener('scroll', () => {
      toggleScrolled();
      // toggleScrollTop();
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

  function scrollToTop(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  const renderRoutes = (routes, parentPath = "") =>
    routes.map(({ path, component, children, parameters }) => {
      const ComponentToRender = Pages[component];
      const paramRoute =
        parameters?.length > 0 ? `/:${parameters.join("/:")}` : null;
      return children ? (
        <Route key={path} path={`${parentPath}${path}`}>
          {renderRoutes(children, `${parentPath}${path}/`)}
        </Route>
      ) : (
        <Route
          key={path}
          path={
            paramRoute
              ? `${parentPath}${path}${paramRoute}`
              : `${parentPath}${path}`
          }
          element={
            <ComponentToRender aria-label={`Navigate to ${component}`} />
          }
        />
      );
    });

  return (
    <>
      <ScrollToTop />
      <div className="index-page">

        <header id="header" className="header d-flex align-items-center fixed-top">
          <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

            <Link to="home" className="logo d-flex align-items-center">
              {(pathname !== '/home' && pathname !== '/') ? <h1 className="sitename">Mohammed Hannan</h1> : null}
            </Link>

            <nav id="navmenu" className="navmenu">
              <ul>
                <li>
                  <Link to="/home" onClick={hideMobileNavToggle} className={pathname === '/home' || pathname === '/' ? 'active' : ''}>Home</Link>
                </li>
                <li>
                  <Link to="/about" onClick={hideMobileNavToggle} className={pathname === '/about' ? 'active' : ''}>About</Link>
                </li>
                <li>
                  <Link to="/resume" onClick={hideMobileNavToggle} className={pathname === '/resume' ? 'active' : ''}>Resume</Link>
                </li>
                <li>
                  <Link to="/portfolio" onClick={hideMobileNavToggle} className={pathname === '/portfolio' ? 'active' : ''}>Portfolio</Link>
                </li>
                <li>
                  <Link to="/contact" onClick={hideMobileNavToggle} className={pathname === '/contact' ? 'active' : ''}>Contact</Link>
                </li>
              </ul>
              <i className="mobile-nav-toggle d-xl-none bi bi-list" onClick={toggleNavbar}></i>
            </nav>

          </div>
        </header>

        <Routes>{renderRoutes(routeGroups)}</Routes>
      </div>
      <Chatbot />

    </>
  )
}

export default App
