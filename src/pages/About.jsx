import { useEffect } from "react";
import { Link } from "react-router-dom";

const About = () => {
    useEffect(() => {
        initializeSkills();
    }, []);


    function initializeSkills() {
        const interval = setInterval(() => {
            if (Waypoint) {
                const skillsAnimation = document.querySelectorAll('.skills-animation');
                skillsAnimation.forEach((item) => {
                    new Waypoint({
                        element: item,
                        offset: '80%',
                        handler: function () {
                            const progress = item.querySelectorAll('.progress .progress-bar');
                            progress.forEach((el) => {
                                el.style.width = el.getAttribute('aria-valuenow') + '%';
                            });
                        }
                    });
                });
                clearInterval(interval);
            }
        }, 500);
    }
    return (
        <>
            <main className="main">
                <div className="page-title" data-aos="fade">
                    <div className="heading">
                        <div className="container">
                            <div className="row d-flex justify-content-center text-center">
                                <div className="col-lg-8">
                                    <h1>About</h1>
                                    {/* <p className="mb-0">Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav className="breadcrumbs">
                        <div className="container">
                            <ol>
                                <li><Link to="home">Home</Link></li>
                                <li className="current">About</li>
                            </ol>
                        </div>
                    </nav>
                </div>
                <section id="about" className="about section">

                    <div className="container" data-aos="fade-up" data-aos-delay="100">

                        <div className="row gy-4 justify-content-center">
                            <div className="col-lg-4">
                                <img src="/img/hannan.jpeg" className="img-fluid" alt="" style={{height: "715px"}}/>
                            </div>
                            <div className="col-lg-8 content">
                                <h2>Software Engineer/Architect & Full-Stack Web Developer</h2>
                                {/* <p className="fst-italic py-3">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                </p> */}
                                <div className="row py-3">
                                    <div className="col-lg-6">
                                        <ul>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>4 April 1997</span></li>
                                            {/* <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li> */}
                                            <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>(551) 254-8706</span></li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>New Jersey, USA</span></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>27</span></li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Highest Degree:</strong> <span>Master of Science</span></li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>desaihannan9900@gmail.com</span></li>
                                            {/* <li><i className="bi bi-chevron-right"></i> <strong>Alt Email:</strong> <span>desaihannan9904@icloud.com</span></li> */}
                                        </ul>
                                    </div>
                                </div>
                                <p className="pt-3">
                                    I am a passionate Software Engineer with over five years of experience in designing and developing scalable software solutions. I earned my Bachelor of Technology in Computer Engineering from Indus University, Gujarat, in 2018. Motivated to expand my expertise in the rapidly evolving field of computer science, I pursued a Master of Science in Computer Science at the New Jersey Institute of Technology, completing it in December 2024. During my graduate studies, I delved into courses like Cloud Computing, Data Structures and Algorithms, Machine Learning, Internet and Higher Layer Security Protocols, Operating System Design, and Software Design and Production Methodology.
                                </p>
                                <p className="py-1">
                                    My professional journey began in 2018 as a Software Developer at I-Link Infosoft Consultants Pvt Ltd, focusing on responsive web applications and microservices architecture. In 2021, I joined Inventyv Software Services Pvt Ltd as a Senior Software Developer, where I optimized frontend performance, integrated AI-driven customer support systems, and pioneered innovations in micro frontends.
                                </p>
                                <p className="py-1">
                                    In 2023, I advanced to the role of Technical Lead at Inventyv Software Services, managing a team of developers while implementing secure architectures using OAuth and leveraging Rust for high-performance application development. In 2024, as a Graduate Intern at New Jersey Courts, I developed a React- and Node.js-based system to simplify the legal expungement process, integrating AI capabilities through OpenAIs GPT-4 API for a seamless user experience.
                                </p>
                                <p className="py-1">
                                    My expertise spans modern frameworks such as Angular, React, and Rust, alongside a strong foundation in microservices, cloud platforms like AWS and GCP, and secure web application architectures. I am passionate about crafting user-centric, high-performance solutions and staying at the forefront of emerging technologies to drive innovation.
                                </p>
                            </div>
                        </div>

                    </div>

                </section>
                {/* <section id="stats" className="stats section">

                    <div className="container" data-aos="fade-up" data-aos-delay="100">

                        <div className="row gy-4">

                            <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
                                <i className="bi bi-emoji-smile"></i>
                                <div className="stats-item">
                                    <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                                    <p>Happy Clients</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
                                <i className="bi bi-journal-richtext"></i>
                                <div className="stats-item">
                                    <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
                                    <p>Projects</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
                                <i className="bi bi-headset"></i>
                                <div className="stats-item">
                                    <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" className="purecounter"></span>
                                    <p>Hours Of Support</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
                                <i className="bi bi-people"></i>
                                <div className="stats-item">
                                    <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter"></span>
                                    <p>Hard Workers</p>
                                </div>
                            </div>

                        </div>

                    </div>

                </section> */}
                <section id="skills" className="skills section">
                    <div className="container section-title" data-aos="fade-up">
                        <h1>Skills</h1>
                        {/* <div><span>My</span> <span className="description-title">Skills</span></div> */}
                    </div>
                    <div className="container" data-aos="fade-up" data-aos-delay="100">

                        <div className="row skills-content skills-animation">

                            <div className="col-lg-6">

                                <div className="progress">
                                    <span className="skill"><span>Frontend | <span style={{ color: "darkgray" }}>Angular, React, Javascript, Typescript, Bootstrap, Tailwind, HTML, SAAS</span></span> <i className="val">100%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
                                    </div>
                                </div>

                                <div className="progress">
                                    <span className="skill"><span>Databases & Storage | <span style={{ color: "darkgray" }}>PostgreSQL, MySQL, Couchbase, MongoDB, S3, Elasticsearch, Minio</span></span> <i className="val">80%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}></div>
                                    </div>
                                </div>

                                <div className="progress">
                                    <span className="skill"><span>Cloud & DevOps | <span style={{ color: "darkgray" }}>AWS (EC2, Lambda, RDS), Docker, Kubernetes, CI/CD (Spinnaker, Github)</span></span> <i className="val">60%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}></div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-6">

                                <div className="progress">
                                    <span className="skill"><span>Backend | <span style={{ color: "darkgray" }}>Node.js, Express.js, Java, Rust</span></span> <i className="val">90%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
                                    </div>
                                </div>
                                <div className="progress">
                                    <span className="skill"><span>Messaging & Event-Driven Architectures | <span style={{ color: "darkgray" }}>Kafka, SQS, Socket.io, Websockets, WebRTC</span></span> <i className="val">70%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}></div>
                                    </div>
                                </div>

                                <div className="progress">
                                    <span className="skill"><span>Tools |  <span style={{ color: "darkgray" }}>Git, Agile(Jira), VS Code, MS Office, Figma, Postman</span></span> <i className="val">100%</i></span>
                                    <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* <section id="interests" className="interests section">
                    <div className="container section-title" data-aos="fade-up">
                        <h2>Features</h2>
                        <div><span>I'm</span> <span className="description-title">interested in</span></div>
                    </div>

                    <div className="container">

                        <div className="row gy-4">

                            <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="100">
                                <div className="features-item">
                                    <i className="bi bi-eye" style={{ color: '#ffbb2c' }}></i>
                                    <h3><a href="" className="stretched-link">Lorem Ipsum</a></h3>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="200">
                                <div className="features-item">
                                    <i className="bi bi-infinity" style={{ color: '#5578ff' }}></i>
                                    <h3><a href="" className="stretched-link">Dolor Sitema</a></h3>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="300">
                                <div className="features-item">
                                    <i className="bi bi-mortarboard" style={{ color: '#e80368' }}></i>
                                    <h3><a href="" className="stretched-link">Sed perspiciatis</a></h3>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="400">
                                <div className="features-item">
                                    <i className="bi bi-nut" style={{ color: '#e361ff' }}></i>
                                    <h3><a href="" className="stretched-link">Magni Dolores</a></h3>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="500">
                                <div className="features-item">
                                    <i className="bi bi-shuffle" style={{ color: '#47aeff' }}></i>
                                    <h3><a href="" className="stretched-link">Nemo Enim</a></h3>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="600">
                                <div className="features-item">
                                    <i className="bi bi-star" style={{ color: '#ffa76e' }}></i>
                                    <h3><a href="" className="stretched-link">Eiusmod Tempor</a></h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="700">
                                <div className="features-item">
                                    <i className="bi bi-x-diamond" style={{ color: '#11dbcf' }}></i>
                                    <h3><a href="" className="stretched-link">Midela Teren</a></h3>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="800">
                                <div className="features-item">
                                    <i className="bi bi-camera-video" style={{ color: '#4233ff' }}></i>
                                    <h3><a href="" className="stretched-link">Pira Neve</a></h3>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="900">
                                <div className="features-item">
                                    <i className="bi bi-command" style={{ color: '#b2904f' }}></i>
                                    <h3><a href="" className="stretched-link">Dirada Pack</a></h3>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="1000">
                                <div className="features-item">
                                    <i className="bi bi-dribbble" style={{ color: '#b20969' }}></i>
                                    <h3><a href="" className="stretched-link">Moton Ideal</a></h3>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="1100">
                                <div className="features-item">
                                    <i className="bi bi-activity" style={{ color: '#ff5828' }}></i>
                                    <h3><a href="" className="stretched-link">Verdo Park</a></h3>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="1200">
                                <div className="features-item">
                                    <i className="bi bi-brightness-high" style={{ color: '#29cc61' }}></i>
                                    <h3><a href="" className="stretched-link">Flavor Nivelanda</a></h3>
                                </div>
                            </div>

                        </div>

                    </div>

                </section> */}


                {/* <section id="testimonials" className="testimonials section">


                    <div className="container section-title" data-aos="fade-up">
                        <h2>Testimonials</h2>
                        <div><span>Check my</span> <span className="description-title">Testimonials</span></div>
                    </div>

                    <div className="container" data-aos="fade-up" data-aos-delay="100">

                        <div className="swiper init-swiper" data-speed="600" data-delay="5000">
                            <div className="swiper-wrapper">

                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <p>
                                            <i className=" bi bi-quote quote-icon-left"></i>
                                            <span>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</span>
                                            <i className="bi bi-quote quote-icon-right"></i>
                                        </p>
                                        <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                                        <h3>Saul Goodman</h3>
                                        <h4>Ceo &amp; Founder</h4>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <p>
                                            <i className="bi bi-quote quote-icon-left"></i>
                                            <span>Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.</span>
                                            <i className="bi bi-quote quote-icon-right"></i>
                                        </p>
                                        <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                                        <h3>Sara Wilsson</h3>
                                        <h4>Designer</h4>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <p>
                                            <i className="bi bi-quote quote-icon-left"></i>
                                            <span>Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.</span>
                                            <i className="bi bi-quote quote-icon-right"></i>
                                        </p>
                                        <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
                                        <h3>Jena Karlis</h3>
                                        <h4>Store Owner</h4>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <p>
                                            <i className="bi bi-quote quote-icon-left"></i>
                                            <span>Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.</span>
                                            <i className="bi bi-quote quote-icon-right"></i>
                                        </p>
                                        <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
                                        <h3>Matt Brandon</h3>
                                        <h4>Freelancer</h4>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <p>
                                            <i className="bi bi-quote quote-icon-left"></i>
                                            <span>Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.</span>
                                            <i className="bi bi-quote quote-icon-right"></i>
                                        </p>
                                        <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
                                        <h3>John Larson</h3>
                                        <h4>Entrepreneur</h4>
                                    </div>
                                </div>

                            </div>
                            <div className="swiper-pagination"></div>
                        </div>

                    </div>

                </section> */}

            </main>

            <footer id="footer" className="footer dark-background">
                <div className="container">
                    {/* <h3 className="sitename">I speak fluent JavaScript... and coffee.</h3> */}
                    <p>Building future-proof applications for modern challenges.</p>
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

export default About;