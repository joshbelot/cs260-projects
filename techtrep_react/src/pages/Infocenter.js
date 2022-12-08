const Infocenter = () => {
  return (<>
            <main>

            <section className="hero section-hero section-padding infocenter">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-12 text-center mx-auto">
                            <div className="section-hero-text">

                                <h1 className="text-white">Tech Trep InfoCenter & Submission Tips</h1>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            
            <section className="about section-padding" id="section_2">
                <div className="container">
                    <div className="row l-row">

                        <div className="col-lg-6 col-12 d-flex flex-column l-col">
                            <div className="about-thumb bg-white shadow-lg">
                                
                                <div className="infocenter-videos lang">
                                    <div className="infocenter-vid1">
                                        <iframe width="334" height="266" 
                                            src="https://www.youtube.com/embed/mOUppGI7w4U" 
                                            title="InfoCenter Basics-How to use Google 
                                            Drive to submit Learning assessments." 
                                            frameborder="0" allow="accelerometer; 
                                            autoplay; clipboard-write; encrypted-media; 
                                            gyroscope; picture-in-picture" allowfullscreen>
                                        </iframe>
                                        
                                        <div className = "infocenter-link">
                                            <a href = "https://www.youtube.com/watch?v=mOUppGI7w4U" target = "blank" > <h2>Google Drive for Submissions Tutorial</h2> </a>
                                        </div>
                                    </div>
                                    <div className="infocenter-vid2">
                                        <iframe width="334" height="264" 
                                            src="https://www.youtube.com/embed/sisbJmScus8" 
                                            title="Google Drive App for Assessments Tutorial" 
                                            frameborder="0" allow="accelerometer; autoplay; 
                                            clipboard-write; encrypted-media; gyroscope; 
                                            picture-in-picture" allowfullscreen>
                                        </iframe>
                                        <div className = "infocenter-link">
                                            <a href = "https://www.youtube.com/embed/sisbJmScus8" target = "blank" > <h2>Google Drive App for Submissions Tutorial</h2> </a>
                                        </div>
                                    </div>

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
                    <p className = 'foot-color'>Learn More:</p>
                    
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

export default Infocenter;