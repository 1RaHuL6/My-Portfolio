import Nav from '../components/Nav' 
import { useState, useEffect } from 'react';

 function Recruiter () {


  const [profile, setProfile] = useState(null);
  const [experience, setExperience] = useState([]);
  const [projects, setProjects] = useState([]);
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [socialLinks, setSocialLinks] = useState([]);

useEffect (() => {
    const API_URL = import.meta.env.VITE_API_URL;

    const fetchData =async () => {
        try {
            const responses = await Promise.all([
                fetch(`${API_URL}/api/profile/`),
                fetch(`${API_URL}/api/experience/`),
                fetch(`${API_URL}/api/projects/`),
                fetch(`${API_URL}/api/education/`),
                fetch(`${API_URL}/api/skill/`),
                fetch(`${API_URL}/api/socialLinks/`)
          
            ]);
            const [profileData, expData, projData, eduData, skillData, linkData] = 
          await Promise.all(responses.map(res => res.json()));

        setProfile(profileData);
        setExperience(expData);
        setProjects(projData);
        setEducation(eduData);
        setSkills(skillData);
        setSocialLinks(linkData);
        }
        catch (error) {
            console.error("Error fetching data:", error);

        }

    };
     fetchData(); // Call the async function
  }, []);

  


   if (!profile) {
    return <div style={{ color: 'white' }}>Loading...</div>;
  }




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
          <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
          <li><button onClick={() => scrollToSection('experience')}>Experience</button></li>
          <li><button onClick={() => scrollToSection('education')}>Education</button></li>
          <li><button onClick={() => scrollToSection('skills')}>Skills</button></li>
          
        </ul>
      </Nav>

      <section id="home" className="banner">
        
        <div className="content">
            <h1 className="title">{profile.name} </h1>
            <p className="description">Building scalable backend systems and full-stack applications.</p>
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
                {/* <h2 className="profile-name">{profile.name}</h2> */}
                <p className="profile-title">Full Stack Developer | Python (Django) with React Frontend Experience</p>
                <p className="profile-bio">I am a highly motivated software engineer graduate with interest in backend and full-stack development. Skilled in Python, Django, React, and PostgreSQL. I build clean, scalable, and maintainable applications that solve real problems. My background spans academic projects and industry experience at Wipro technologies, where I developed strong problem-solving and system troubleshooting/maintenance skills. Passionate about technology, I thrive in Agile environments and enjoy deploying reliable solutions to the cloud.</p>
                <div className="stats">
                    <div className="stat-item">
                        <div className="stat-value">2</div>
                        <div className="stat-label">Years Experience</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-value">5</div>
                        <div className="stat-label">Academic Projects</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-value">2</div>
                        <div className="stat-label">Certifications</div>
                    </div>
                </div>
            </div>
        </div>

    </section>


    <section id="projects" className="content-section">

            <h2 className="section-title">Personal Projects</h2>
                <div className="card-row">
                   {projects.map(project => (
                  <div key={project.id} className="info-card project-card">
                    
                    {project.image_url && (
                      <div className="project-image">
                        <img 
                          src={project.image_url} 
                          alt={project.title}
                          onError={(e) => {
                            e.target.style.display = 'none'; 
                          }}
                        />
                      </div>
                    )}
                    
                    {/* Project Title */}
                    <h3 className="card-title">{project.title}</h3>
                    
                    {/* Project Description */}
                    <p className="card-description">{project.description}</p>
                    
                    {/* Technology Stack */}
                    <p className="card-description">
                      <i className="fas fa-code"></i> {project.tech_stack}
                    </p>
                    
                    {/* Project Links */}
                    <div className="project-links">
                      {project.github_url && (
                        <a 
                          href={project.github_url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <i className="fab fa-github"></i> GitHub
                        </a>
                      )}
                      
                      {project.live_demo_url && (
                        <a 
                          href={project.live_demo_url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <i className="fas fa-external-link-alt"></i> Live Demo
                        </a>
                      )}
                    </div>
                   </div>
            ))}
                    
                    
                </div>

      </section>

    <section id="experience" className="content-section">

        <h2 className="section-title">Experience</h2>
        <div className="card-row">
            
           { experience.map(experience => (
              <div key={experience.id} className="info-card project-card">
                  {experience.image_url && (
                      <div className="project-image">
                        <img 
                          src={experience.image_url} 
                          alt={experience.company}
                          onError={(e) => {
                            e.target.style.display = 'none'; 
                          }}
                        />
                      </div>
                    )}

                   {/* Work company */}
                    <h3 className="card-title">{experience.company}</h3>

                   {/* Role */}
                    <h3 className="card-title">{experience.role}</h3>

                   {/* start date */}
                    <h3 className="card-title">{experience.start_date}</h3>

                   {/* end date */}
                    <h3 className="card-title">{experience.end_date}</h3>

                    

                   {/* description */}
                    <h3 className="card-title">{experience.description}</h3>



               </div> 

           )) }

           


        </div>

    </section>

    <section id="education" className="content-section">

        <h2 className="section-title">Education</h2>
        <div className="card-row">
             { education.map(education => (
              <div key={education.id} className="info-card project-card">
                  {education.image_url && (
                      <div className="project-image">
                        <img 
                          src={education.image_url} 
                          alt={education.institute}
                          onError={(e) => {
                            e.target.style.display = 'none'; 
                          }}
                        />
                      </div>
                    )}
                  

                   {/* Work company */}
                    <h3 className="card-title">{education.degree}</h3>

                   {/* Role */}
                    <h3 className="card-title">{education.institution}</h3>

                   {/* start date */}
                    <h3 className="card-title">{education.start_year}</h3>

                   {/* end date */}
                    <h3 className="card-title">{education.end_year}</h3>

                    <h3 className="card-title">{education.description}</h3>

               </div> 

           )) }

        </div>

    </section>

    <section id="skills" className="content-section">

        <h2 className="section-title">Skills & Expertise</h2>
        <div className="card-row">
           { skills.map(skill => (
              <div key={skill.id} className="info-card project-card">
                  {skill.image_url && (
                      <div className="project-image">
                        <img 
                          src={skill.image_url} 
                          alt={skill.name}
                          onError={(e) => {
                            e.target.style.display = 'none'; 
                          }}
                        />
                      </div>
                    )}
                  

                   {/* Work company */}
                    <h3 className="card-title">{skill.name}</h3>

                   {/* Role */}
                    <h3 className="card-title">{skill.category}</h3>
                    
                  

               </div> 

           )) }
           
        </div>

    </section>

    

        <section id="contact" className="footer">
              <h2 className="section-title">Get In Touch</h2>
              <p>I'd love to hear from you!</p>


  <div className="social-links">

           {socialLinks.map(link => (
              <div key={link.id} >

              <a href={link.url} target="_blank" rel="noopener noreferrer">
              <i className={link.icon_class}></i>
              </a>

              </div>
           )
            
           )}
    
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