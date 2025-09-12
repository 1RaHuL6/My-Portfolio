import Nav from '../components/Nav' 


 function Recruiter () {

    const scrollToSection = (id) => {

        const element = document.getElementById(id); 
        if (element) {
            element.scrollIntoView({behavior: "smooth"});
        }
            
        };

    return (

        
        <>

          <Nav>
        <ul className="nav-links">
          <li><button onClick={() => scrollToSection('home')}>⇧</button></li>
          <li><button onClick={() => scrollToSection('experience')}>Experience</button></li>
          <li><button onClick={() => scrollToSection('education')}>Education</button></li>
          <li><button onClick={() => scrollToSection('skills')}>Skills</button></li>
          <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
        </ul>
      </Nav>

      <section id="home" className="banner">
        
        <div className="content">
            <h1 className="title">Rahul Kadam </h1>
            <p className="description">Full Stack Developer with 5+ years of experience building scalable web applications. Passionate about clean code and user-centered design.</p>
            <div className="buttons">
                <a href="/resume/KADAM-RAHUL_CV.pdf" download="KADAM-RAHUL_CV.pdf">
                <button className="btn btn-primary"><i className="fas fa-download"></i> Download Resume</button>
                </a>
                <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}><i className="fas fa-envelope"></i> Contact Me</button>
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

    <section id="experience" className="content-section">

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

    <section id="education" className="content-section">

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

    <section id="skills" className="content-section">

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

    <section id="projects" className="content-section">

            <h2 className="section-title">Personal Projects</h2>
            <div className="card-row">
                <div className="info-card project-card">
                    <h3 className="card-title">E-Commerce Platform</h3>
                    <p className="card-description">Full-stack e-commerce solution with React, Node.js, and MongoDB</p>
                    <p className="card-description"><i className="fas fa-code"></i> JavaScript, React, Node.js</p>
                </div>
                <div className="info-card project-card">
                    <h3 className="card-title">Task Management App</h3>
                    <p className="card-description">Productivity application with drag-and-drop functionality</p>
                    <p className="card-description"><i className="fas fa-code"></i> TypeScript, React, Firebase</p>
                </div>
                <div className="info-card project-card">
                    <h3 className="card-title">Weather Dashboard</h3>
                    <p className="card-description">Real-time weather application with forecast data</p>
                    <p className="card-description"><i className="fas fa-code"></i> JavaScript, API Integration</p>
                </div>
                <div className="info-card project-card">
                    <h3 className="card-title">Fitness Tracker</h3>
                    <p className="card-description">Mobile application for tracking workouts and progress</p>
                    <p className="card-description"><i className="fas fa-code"></i> React Native, Redux</p>
                </div>
            </div>

      </section>

        <section id="contact" className="footer">
  <h2 className="section-title">Get In Touch</h2>
  <p>I'd love to hear from you!</p>


  <div className="social-links">
    {/* LinkedIn */}
    <a href="https://linkedin.com/in/rahul-kadam-800b811a2" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-linkedin fa-2x"></i>
    </a>

    {/* GitHub */}
    <a href="https://github.com/1RaHuL6" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-github fa-2x"></i>
    </a>

    {/* Twitter/X */}
    <a href="https://twitter.com/RAhul16kadam" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-x-twitter fa-2x"></i>
    </a>

    {/* Instagram */}
    <a href="https://instagram.com/rahul_1_6__" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-instagram fa-2x"></i>
    </a>

    {/* Email */}
    <a href="mailto:16rahulkadam16@gmail.com">
      <i className="fas fa-envelope fa-2x"></i>
    </a>
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