"use client";
import Link from 'next/link';
export default function Resume() {
    return (
        <div className="resume-page">

            <header id="header" className="header d-flex align-items-center fixed-top">
                <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

                    <Link href="home" className="logo d-flex align-items-center">
                        <h1 className="sitename">Mohammed Hannan</h1>
                    </Link>

                    <nav id="navmenu" className="navmenu">
                        <ul>
                            <li><Link href="/home">Home</Link></li>
                            <li><Link href="/about" >About</Link></li>
                            <li><Link href="/resume" className="active">Resume</Link></li>
                            <li><Link href="/portfolio">Portfolio</Link></li>
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
                                    <h1>Resume</h1>
                                    {/* <p className="mb-0">Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav className="breadcrumbs">
                        <div className="container d-flex justify-content-between align-items-center">
                            <ol className="mb-0">
                                <li><Link href="home">Home</Link></li>
                                <li className="current">Resume</li>
                            </ol>
                            <a href="/Resume_MohammedHannanDesai.pdf" className="download-link" download style={{textDecoration: "underline"}}>Download Resume</a>
                        </div>
                    </nav>
                </div>
                <section id="resume" className="resume section">

                    <div className="container">

                        <div className="row">

                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                                <h3 className="resume-title">Sumary</h3>

                                <div className="resume-item pb-0">
                                    <h4>Mohammed Hannan Desai</h4>
                                    <p><em>Dynamic and results-driven Software Engineer with over 5 years of experience in designing, developing, and optimizing scalable web and software applications. Proficient in modern frameworks and technologies such as Angular, React, Node.js, and Rust. Skilled in implementing secure, high-performance solutions, including microservices.</em></p>
                                    <ul>
                                        <li>252 Passaic Ave, East Newark, NJ</li>
                                        <li>(551) 254-8706</li>
                                        <li>desaihannan9900@gmail.com</li>
                                    </ul>
                                </div>

                                <h3 className="resume-title">Education</h3>
                                <div className="resume-item">
                                    <h4>Master of Science In Computer Science</h4>
                                    <h5>2023 - 2024</h5>
                                    <p><em>New Jersey Institute Of Technology, Newark, NJ</em></p>
                                    <p>CGPA Of 3.75 out of 4.</p>
                                </div>

                                <div className="resume-item">
                                    <h4>Bachelor of Technology In Computer Engineering</h4>
                                    <h5>2014 - 2018</h5>
                                    <p><em>Indus University, Ahmedabad, India</em></p>
                                    <p>CGPA Of 6.48 out of 9.</p>
                                </div>

                            </div>

                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                                <h3 className="resume-title">Professional Experience</h3>
                                <div className="resume-item">
                                    <h4>Graduate Intern</h4>
                                    <h5>Sept 2024 - Dec 2024</h5>
                                    <p><em>New Jersey Courts, Trenton, NJ </em></p>
                                    <ul>
                                        <li>Designed and implemented an expungement form system to automate document generation for court users, simplifying the filing process for expungements and extending access to additional legal documents.</li>
                                        <li>Developed a scalable and maintainable application using a React frontend and Node.js backend in an Agile workflow.</li>
                                        <li>Leveraged OpenAI GPT 4.0 API into the application, conducted initial fine-tuning with Llama 3.0 to enhance functionality.</li>
                                        <li>Implemented end-to-end data encryption to ensure the security and confidentiality of user information.</li>
                                    </ul>
                                </div>

                                <div className="resume-item">
                                    <h4>Technical Lead</h4>
                                    <h5>May 2023 - Sept 2023</h5>
                                    <p><em>Inventyv Software Services Pvt Ltd, Ahmedabad, Gujarat, India</em></p>
                                    <ul>
                                        <li>Led and supervised a team of 5 plus software developers in the design and development of web applications.</li>
                                        <li>Defined and optimized workflows and architecture for new software development requirements.</li>
                                        <li>Strengthened web application security by implementing OWASP standards and Backend-for-Frontend (BFF) architecture to standardize authentication processes, incorporated OAuth with Keycloak & Gluu for secure access management.</li>
                                        <li>Implemented assembly-level languages like Rust in frontend browser applications to optimize performance and accelerate the execution of resource-intensive tasks, achieving a 40%-50% improvement in web performance.</li>
                                        <li>Established and enforced coding and security standards for web applications to ensure high-quality development.</li>
                                        <li>Conducted research and implemented new technologies to enhance project roadmaps and drive innovation.</li>
                                        <li>Worked and guided designers to create UI/UX mockups in Figma by engaging with stakeholders and implemented them.</li>
                                    </ul>
                                </div>

                                <div className="resume-item">
                                    <h4>Senior Software Developer</h4>
                                    <h5>June 2021 - May 2023</h5>
                                    <p><em>Inventyv Software Services Pvt Ltd, Ahmedabad, Gujarat, India</em></p>
                                    <ul>
                                        <li>Steered full-stack development on projects across various domains including US tax, healthcare and CRM applications utilizing technologies like JavaScript, Angular, Node.js, Rust, Bootstrap, Couchbase, SQL, Google Cloud Platform (GCP).</li>
                                        <li>Optimized frontend application performance by reducing initial load times by 40% and enhancing rendering speed by 35% through the adoption of technologies such as AOT (Ahead-of-Time) Compilation, Cache-First Serving, and lazy loading.</li>
                                        <li>Improved maintainability and enabled simultaneous development by breaking down large frontend applications into micro frontends using Web Components and Webpack 5 Module Federation. </li>
                                        <li>Designed the Solution Center for a US tax software, integrated IBM Watson AI to enhance customer support by providing accurate and relevant tax-related articles based on customer queries, leading to a 70% reduction in support tickets.</li>
                                        <li>Partnered with the DevOps team to set up and deploy new software applications on cloud and monitor it over kibana.</li>
                                    </ul>
                                </div>

                                <div className="resume-item">
                                    <h4>Software Developer</h4>
                                    <h5>May 2018 - May 2021</h5>
                                    <p><em>I-Link Infosoft Consultants Pvt Ltd, Ahmedabad, Gujarat, India</em></p>
                                    <ul>
                                        <li>Worked as a UI Developer for developing responsive, user-focused web interfaces using modern frontend frameworks and technologies, ensuring smooth interaction with backend services in a microservice architecture.</li>
                                        <li>Collaborated in a cross-functional team to develop RESTful APIs in a microservice architecture.</li>
                                        <li>Migrated legacy AngularJS projects to the latest Angular version using TypeScript, improving functionality and reducing codebase issues by 40%, while enhancing application performance by 30%.</li>
                                        <li>Participated in the full software development lifecycle, from requirements gathering and design to development & release.</li>
                                    </ul>
                                </div>

                            </div>

                        </div>

                    </div>

                </section>

            </main>

            <footer id="footer" className="footer dark-background">
                <div className="container">
                    {/* <h3 className="sitename">Debugging: Turning 'Oops' into 'Aha!' since 8 years.</h3> */}
                    <p>Debugging: Turning &apos;Oops&apos; into &apos;Aha!&apos; since 8 years.</p>
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
