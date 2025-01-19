import { Link, useNavigate } from "react-router-dom";
import projects from "../data/projects.json";

const Portfolio = () => {
    const navigate = useNavigate();

    function goToDetail(project) {
        navigate(`/project-detail?id=${encodeURIComponent(project.projectId)}`);
    }

    return (
        <>
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
                                <li><Link to="home">Home</Link></li>
                                <li className="current">Portfolio</li>
                            </ol>
                        </div>
                    </nav>
                </div>
                <section id="portfolio" className="portfolio section">

                    <div className="container">

                            <div className="row gy-4" data-aos="fade-up" data-aos-delay="200">

                                {projects.map((project, index) => (
                                    <div className="col-lg-4 col-md-6 portfolio-item filter-branding" key={index} onClick={() => goToDetail(project)}>
                                        <div className="card d-flex flex-column p-3 rounded-3 shadow-md project-card">
                                            {/* Card Image */}
                                            <img
                                                className="mb-3"
                                                src="/img/no-img.svg"
                                                alt="Slick Portfolio"
                                                height="50"
                                                width="40"
                                                style={{ borderColor: "grey" }}
                                            />

                                            {/* Card Title and Link */}
                                            <div className="d-flex justify-content-between align-items-center mb-1">
                                                <h4 className="h5 mb-0" style={{ color: "#18d26e" }}>{project.projectName}</h4>
                                                <a
                                                    className="btn btn-outline-secondary btn-sm"
                                                    href={project.projectGithub}
                                                    title="GitHub"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    data-help="GitHub"
                                                    style={{ borderColor: "#2e2e2e" }}
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <i className="bi bi-github text-white h5"></i>
                                                </a>
                                            </div>

                                            {/* Divider */}
                                            <hr className="my-2" />

                                            {/* Meta Information */}
                                            <div className="small mt-2">
                                                <div className="d-flex align-items-center mb-2">
                                                    <i className="bi bi-diagram-3 me-2"></i>
                                                    <span>{project.projectType}</span>
                                                </div>
                                            </div>

                                            <hr className="my-2" />

                                            {/* <div className="small mt-2">
                                                <div className="d-flex align-items-center mb-2">
                                                    <i className="bi bi-clock me-2"></i>
                                                    <span>1 day</span>
                                                </div>
                                            </div>

                                            {/* Divider */}
                                            {/* <hr className="my-2" /> */}

                                            {/* Card Description */}
                                            <p className="small mb-4 fixed-height">
                                                {project.projectDescription}
                                            </p>

                                            {/* Buttons */}
                                            {/* <div className="d-flex justify-content-between mb-2">
                                                <button className="btn btn-outline-secondary btn-sm" style={{ borderColor: "grey", color: "white" }}>January 2025</button>
                                                <button className="btn btn-outline-secondary btn-sm" style={{ borderColor: "grey", color: "white" }}>now</button>
                                            </div> */}

                                            {/* Divider */}
                                            <hr className="my-2" />


                                            {/* Skills */}
                                            <div className="d-flex flex-wrap">
                                                {project.tehnologies.map((technology, index) => (
                                                    <a
                                                        className="badge text-white me-3 my-2 d-flex align-items-center tech-img"
                                                        data-help={technology.name}
                                                        key={index}
                                                        title={technology.name}>
                                                        <img
                                                            className="mx-1 my-1"
                                                            src={"tech/" + technology.id + ".png"}
                                                            alt={technology.name}
                                                            height="32"
                                                            width="32"
                                                        />
                                                    </a>

                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                    </div>

                </section>

            </main>

            <footer id="footer" className="footer dark-background">
                <div className="container">
                    <p>Empowering innovation through scalable, cloud-driven solutions, and crafting digital experiences that reflect precision, creativity, and user-first design.</p>
                    <div className="container">
                        <div className="copyright">
                            <span>Copyright</span> <strong className="px-1 sitename">Hannan Desai</strong> <span>All Rights Reserved</span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Portfolio;