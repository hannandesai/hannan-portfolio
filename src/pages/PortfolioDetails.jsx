import { Link, useNavigate } from "react-router-dom";
import projects from "../data/projects.json";
import { useEffect, useState } from "react";

const PortfolioDetails = () => {
    const navigate = useNavigate();
    const [projectDetail, setProjectDetail] = useState({});
    useEffect(() => {
        setProjectData();
        initSwiper();
    }, []);

    function setProjectData() {
        const projectId = new URLSearchParams(window.location.search).get("id");
        const project = projects.find((project) => project.projectId == projectId);
        if (project) {
            setProjectDetail(project);
        } else {
            navigate("/portfolio");
        }
    }

    function initSwiper() {
        const interval = setInterval(() => {
            if (Swiper) {
                clearInterval(interval);
                document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
                    let config = {
                        "loop": true,
                        "speed": 600,
                        "autoplay": {
                            "delay": 5000
                        },
                        "slidesPerView": "auto",
                        "pagination": {
                            "el": ".swiper-pagination",
                            "type": "bullets",
                            "clickable": true
                        }
                    };
                    new Swiper(swiperElement, config);
                });
            }
        }, 200);
    }

    return (
        <>
            <main className="main">
                <div className="page-title" data-aos="fade">
                    <div className="heading">
                        <div className="container">
                            <div className="row d-flex justify-content-center text-center">
                                <div className="col-lg-8">
                                    <h1>Portfolio Details</h1>
                                    {/* <p className="mb-0">Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav className="breadcrumbs">
                        <div className="container d-flex justify-content-between align-items-center">
                            <ol className="mb-0">
                                <li><Link to="/home">Home</Link></li>
                                <li className="current">Portfolio Detail</li>
                            </ol>
                            <Link to="/portfolio" className="download-link" style={{ textDecoration: "underline" }}>Back To Portfolio</Link>
                        </div>
                    </nav>
                </div>
                <section id="portfolio-details" className="portfolio-details section">

                    <div className="container" data-aos="fade-up" data-aos-delay="100">

                        <div className="row gy-4">

                            <div className="col-lg-8">
                                <div className="portfolio-details-slider swiper init-swiper">
                                    <div className="swiper-wrapper align-items-center">

                                        {projectDetail.gallery && projectDetail.gallery.map((image, index) => (
                                            <div className="swiper-slide" key={index}>
                                                <img src={"/img/portfolio/" + image} alt="" />
                                            </div>
                                        ))}

                                    </div>
                                    <div className="swiper-pagination"></div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="portfolio-info" data-aos="fade-up" data-aos-delay="200">
                                    <h3>{projectDetail.projectName}</h3>
                                    <ul>
                                        <li><strong>Category</strong>: {projectDetail.projectCategory}</li>
                                        {/* <li><strong>Domain</strong>: {projectDetail.projectType}</li> */}
                                        {/* <li><strong>Project date</strong>: 01 March, 2020</li> */}
                                        <li><strong>Github URL</strong>: <a href={projectDetail.projectGithub} target="_blank">{projectDetail.projectGithub}</a></li>
                                        <li><strong>Project Report</strong>: <a href={"/docs/" + projectDetail.reportDoc} target="_blank">{projectDetail.reportDoc}</a></li>
                                    </ul>
                                </div>
                                <div className="portfolio-description" data-aos="fade-up" data-aos-delay="300">
                                    <h2>{projectDetail.projectType}</h2>
                                    <p>
                                        {projectDetail.projectDescription}
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>

                </section>

            </main>

            <footer id="footer" className="footer dark-background">
                <div className="container">
                    {/* <h3 className="sitename">Personal</h3> */}
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
        </>
    )
}

export default PortfolioDetails;