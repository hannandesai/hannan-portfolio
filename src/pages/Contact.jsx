import { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [alert, setAlert] = useState('');

    function sendMessage() {
        if (name && email && subject && message) {
            setAlert("inprocess");
            fetch('https://qg07jah810.execute-api.us-east-1.amazonaws.com/prod/sendContactEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, subject, message })
            }).then(response => response.json()).then(data => {
                if (data.success) {
                    setName('');
                    setEmail('');
                    setSubject('');
                    setMessage('');
                    setAlert("success");
                } else {
                    setAlert("error");
                }
            }).catch((error) => {
                console.error('Error:', error);
                setAlert("error");
            });
        } else {
            setAlert("missingData");
        }
    }

    return (
        <>
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
                                <li><Link to="/home">Home</Link></li>
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

                        <div className="php-email-form" data-aos="fade-up" data-aos-delay="600">
                            <div className="row gy-4">

                                <div className="col-md-6">
                                    <input type="text" name="name" className="form-control" placeholder="Your Name" value={name} onChange={(e) => { setName(e.target.value) }} />
                                </div>

                                <div className="col-md-6 ">
                                    <input type="email" className="form-control" name="email" placeholder="Your Email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                </div>

                                <div className="col-md-12">
                                    <input type="text" className="form-control" name="subject" placeholder="Subject" value={subject} onChange={(e) => { setSubject(e.target.value) }} />
                                </div>

                                <div className="col-md-12">
                                    <textarea className="form-control" name="message" placeholder="Message" value={message} onChange={(e) => { setMessage(e.target.value) }}></textarea>
                                </div>

                                <div className="col-md-12 text-center">
                                    {alert === "missingData" && <div className="alert alert-danger">Please fill all the fields</div>}
                                    {alert === "error" && <div className="alert alert-danger">Something went wrong. Please try again later.</div>}
                                    {alert === "success" && <div className="alert alert-success">Your message has been sent. Thank you!</div>}
                                    {alert === "inprocess" && <div className="alert alert-info">Sending your message...</div>}
                                    <button onClick={sendMessage}>Send Message</button>
                                </div>

                            </div>
                        </div>

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

            {/* <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a> */}

            {/* <div id="preloader"></div> */}

        </>
    );
}
export default Contact;