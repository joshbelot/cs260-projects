import "./css/bootstrap-icons.css";
import "./css/bootstrap.min.css";
import "./css/magnific-popup.css";
import "./css/styles.css";
import "./css/tooplate-waso-strategy.css";
import homeschool1 from "../images/homeschool1.jpeg";
import homeschool2 from "../images/homeschool2.jpg";
import family_learning_small from "../images/family_learning_small.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
        <>
        <main>

            <section className="hero">
                <div className="container-fluid h-100">
                    <div className="row h-100">

                        <div id="carouselExampleCaptions" className="carousel carousel-fade hero-carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                

                                    <div className="container position-relative h-100">

                                        <div className="carousel-caption d-flex flex-column justify-content-center">
                                            
                                            <h1>Welcome to the Tech Trep Academy Program!</h1>
                                            
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <br />

                                            <h1>New to our program? <span>Start Here!</span></h1>

                                            <div className="d-flex align-items-center mt-4">
                                                <a className="custom-btn btn custom-link" href="#section_2">Get Started</a>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="carousel-image-wrap">
                                        <img src={homeschool1} className="img-fluid carousel-image" alt="Homeschool1"></img>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <div className="container position-relative h-100">
                                        <div className="carousel-caption d-flex flex-column justify-content-center">
                                            
                                            <h1>Welcome to the Tech Trep Academy Program!</h1>
                                            
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <br />

                                            <h1>New to our program?<span> Start Here!</span></h1>

                                            <div className="d-flex align-items-center mt-4">
                                                <a className="custom-btn btn custom-link" href="#section_2">Get Started</a>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="carousel-image-wrap">
                                        <img src={homeschool2.jpg} className="img-fluid carousel-image" alt=""></img>
                                    </div>
                                </div>

                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>

                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section className="about section-padding" id="section_2">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-12 mb-5 mb-lg-0">
                            <div className="about-image-wrap h-100">
                                <img src={family_learning_small} className="img-fluid about-image" alt=""></img>
                            </div>
                        </div>

                        <div className="col-lg-6 col-12 d-flex flex-column">
                            <div className="about-thumb bg-white shadow-lg">
                                
                                <div className="about-info">

                                    <h2 className="mb-3">Welcome!</h2>

                                    <h5 className="mb-3">Whether you’re a seasoned Tech Trep Academy parent or new to our program, we want to give you the tools and information you need for a successful year!</h5>

                                    <p> It is always our goal to provide you the very best resources and 
                                    services we possibly can! If you have suggestions or recommendations, 
                                    we’d love to hear them! That is how we continue to improve our program! </p>
                                    
                                    <p>Our Parent Resource Site is filled with resources, links, ideas, 
                                    information, policies, and key calendar items to help you along this 
                                    journey of designing a truly personalized education experience for your child.</p>
                                    
                                    <p>Refer to this information often and if you have questions, 
                                    please contact us. We’re happy to help anytime!</p>

                                </div>
                            </div>

                            <div className="row h-100">
                                <div className="col-lg-6 col-6">
                                    <div className="about-thumb d-flex flex-column justify-content-center bg-primary-color mb-lg-0 h-100">
                                        
                                        <div className="about-info">
                                            <h5 className="text-white mb-4">Have a question?</h5>

                                            <a className="custom-btn btn custom-bg-secondary" href="#">Contact Us</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-6">
                                    <div className="about-thumb d-flex flex-column justify-content-center bg-secondary-color mb-lg-0 h-100">
                                        
                                        <div className="about-info">
                                            <h5 className="text-white mb-4">Confused about a word or phrase? Check out our glossary</h5>

                                            <Link to="/glossary" className="custom-btn btn custom-bg-secondary" > Glossary </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            

            <section className="contact" id="section_5">

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4424e4" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>

                <div className="contact-container-wrap">
                    <div className="container">
                        <div className="row main-help-container">

                            <div className="about-thumb bg-white shadow-lg help-us-bx">
                                
                                <div className="about-info center">
                                    <h5 className="mb-3">Please Help Us Improve!</h5>
                                    <p>Have you noticed any issues
                                    with this site? If you have comments or 
                                    suggestions, please <a className= "g-link" href="https://docs.google.com/forms
                                    /d/e/1FAIpQLSeMHv8s7fHfyOIAqlCKIaxbmjKJDP6kbrW6_paj4LRnMA9MsQ/viewform"><u><strong>click here</strong></u></a> to tell us 
                                    about it! Help us make this site better!</p>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </main>

        <footer className="site-footer">
            <div className="foot">
                <div className="f-column">
                    <p className = "foot-color">Learn More:</p>
                    
                    <ul>
                        <li><a className = "foot-color" href="https://id.techtrepacademy.com/" target="_blank"><u>Idaho Tech Trep Academy Website</u></a></li>
                        <li><a className = "foot-color" href="https://sites.google.com/techtrepacademy.com/ttahighschool/home" target="_blank"><u>TTA High School Course Catalog</u></a></li>
                        <li><a className = "foot-color" href="https://sites.google.com/techtrepacademy.com/k-8classesandclubs/jr-high-classes" target="_blank"><u>Idaho InfoCenter</u></a></li>
                        <li><a className = "foot-color" href="https://sites.google.com
                        /techtrepacademy.com/k-8classesandclubs/home?authuser=0" target="_blank">
                            <u>TTA K-8 Classes & Clubs Website</u></a></li>
                        <li><a className = "foot-color" href="https://sites.google.com/techtrepacademy.com/k-8classesandclubs/virtual-bridge-program" target="_blank">
                            <u>K-8 Virtual Bridge Program </u></a></li>
                    </ul>
                    
                </div>
                <div className="f-column">
                    <p className = "foot-color">Connect with other Families:</p>
                    
                    <ul>
                        <li><a className = "foot-color" href="https://www.facebook.com/groups/131068137565664/ " target="_blank"><u>General TTA Facebook Group</u></a></li>
                        <li><a className = "foot-color" href="https://www.facebook.com/groups/2544589755857985/" target="_blank"><u>High School Parent Facebook Group</u></a></li>
                        <li><a className = "foot-color" href="https://www.facebook.com/groups/2092122590827882/" target="_blank"><u>Bridge Program Facebook Group</u></a></li>
                    </ul>

                </div>
                <div className="f-column">
                    <p className = "foot-color">Questions:</p>
                    
                    <ul>
                        <li><a className = "foot-color" href="mailto:enrollment@techtrepacademy.com"><u>Enrollment: enrollment@techtrepacademy.com</u></a></li>
                        <li><a className = "foot-color" href="mailto:funding@techtrepacademy.com"><u>Funding and Reimbursement: funding@techtrepacademy.com</u></a></li>
                        <li><a className = "foot-color" href="mailto:emileeb@techtrepacademy.com"><u>Jr./Sr. High School: emileeb@techtrepacademy.com </u></a></li>
                        <li><a className = "foot-color" href="mailto:idaho@techtrepacademy.com"><u>General TTA Program Questions: idaho@techtrepacademy.com</u></a></li>
                    </ul>

                </div>
            </div>
            <div>
                <a className = "foot-color" href = "https://github.com/joshbelot/cs260-projects/tree/main/techtrep_react">Github Link</a>
            </div>
        </footer>
        </> 
    );

};

export default Home;