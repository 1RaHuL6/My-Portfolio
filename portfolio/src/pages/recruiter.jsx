import Nav from '../components/Nav' 


 function Recruiter () {

    const scrollto = (id) => {

        const element = document.getElementById(id); 
        if (element) {
            element.scrollIntoView({behaviour: "smooth"});
        }
            
        };

    return (

        
        <>

        <Nav>
        <ul className='nav-links'>
          <li><button onClick={() => scrollTo('home')}>Home</button></li>
          <li><button onClick={() => scrollTo('experience')}>Experience</button></li>
          <li><button onClick={() => scrollTo('skills')}>Skills</button></li>
          <li><button onClick={() => scrollTo('skills')}>Education</button></li>
          <li><button onClick={() => scrollTo('skills')}>Contact</button></li>
        </ul>
      </Nav>

      <section className='banner'>
        
        <div className="content">
            <h1 className="title">Rahul Kadam </h1>
            <p className="description">Full Stack Developer with 5+ years of experience building scalable web applications. Passionate about clean code and user-centered design.</p>
            <div className="buttons">
                <button className="btn btn-primary"><i className="fas fa-download"></i> Download Resume</button>
                <button className="btn btn-secondary"><i className="fas fa-envelope"></i> Contact Me</button>
            </div>
        </div>

      </section>

      <section className="content-section">
        <h2 className="section-title">Personal Statement</h2>
        <div className="profile-details">
            <img src="/images/image.jpg" alt="Profile Photo" className="profile-image " />
            <div className="profile-info">
                <h2 className="profile-name">Rahul Kadam</h2>
                <p className="profile-title">Full Stack Developer | JavaScript Expert</p>
                <p className="profile-bio">I am a passionate developer with expertise in JavaScript, React, Node.js, and cloud technologies. I thrive in agile environments and enjoy solving complex problems with elegant solutions. My goal is to create applications that not only meet business requirements but also provide exceptional user experiences.</p>
                <div className="stats">
                    <div className="stat-item">
                        <div className="stat-value">5+</div>
                        <div className="stat-label">Years Experience</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-value">24</div>
                        <div className="stat-label">Projects</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-value">12</div>
                        <div className="stat-label">Certifications</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="content-section">
        <h2 className="section-title">Experience</h2>
        <div className="card-row">
            <div className="info-card exp-card">
                <h3 className="card-title">Senior Developer</h3>
                <p className="card-description">TechCorp Inc. • 2020 - Present</p>
                <p className="card-description">Led a team of 5 developers to build a SaaS platform</p>
            </div>
            <div className="info-card exp-card">
                <h3 className="card-title">Full Stack Developer</h3>
                <p className="card-description">WebSolutions LLC • 2018 - 2020</p>
                <p className="card-description">Developed full-stack applications for clients in various industries</p>
            </div>
            <div className="info-card exp-card">
                <h3 className="card-title">Frontend Developer</h3>
                <p className="card-description">DigitalAgency • 2016 - 2018</p>
                <p className="card-description">Created responsive and interactive user interfaces</p>
            </div>
        </div>
    </section>

    <section className="content-section">
        <h2 className="section-title">Education</h2>
        <div className="card-row">
            <div className="info-card education-card">
                <h3 className="card-title">MSc in Computer Science</h3>
                <p className="card-description">Tech University • 2014 - 2016</p>
                <p className="card-description">Specialized in Software Engineering</p>
            </div>
            <div className="info-card education-card">
                <h3 className="card-title">BSc in Information Technology</h3>
                <p className="card-description">State University • 2010 - 2014</p>
                <p className="card-description">Graduated with Honors</p>
            </div>
        </div>
    </section>

    <section className="content-section">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="card-row">
            <div className="info-card skill-card">
                <h3 className="card-title">JavaScript</h3>
            </div>
            <div className="info-card skill-card">
                <h3 className="card-title">React</h3>
            </div>
            <div className="info-card skill-card">
                <h3 className="card-title">Node.js</h3>
            </div>
            <div className="info-card skill-card">
                <h3 className="card-title">AWS</h3>
            </div>
            <div className="info-card skill-card">
                <h3 className="card-title">UI/UX Design</h3>
            </div>
            <div className="info-card skill-card">
                <h3 className="card-title">Python</h3>
            </div>
        </div>
    </section>

        </>

    );
}


const navButtonStyle = {
  background: 'none',
  border: 'none',
  color: 'white',
  cursor: 'pointer',
  fontSize: '16px',
  textDecoration: 'underline',
};

export default Recruiter