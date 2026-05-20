import { useState } from 'react'
import profileImage from '../assets/profile.webp'
import { projects } from '../data/projects'

const education = [
  {
    period: '2025 - 2027',
    title: 'Master of Computer Applications',
    place: 'Ayya Nadar Janaki Ammal College, Sivakasi',
    detail: 'Affiliated with Madurai Kamaraj University',
    percentage: '91.60%',
  },
  {
    period: '2025 - 2026',
    title: 'P.G. Diploma in Artificial Intelligence and Machine Learning',
    place: 'Ayya Nadar Janaki Ammal College, Sivakasi',
    detail: 'Affiliated with Madurai Kamaraj University',
    percentage: '88%',
  },
  {
    period: '2022 - 2025',
    title: 'Bachelor of Computer Applications',
    place: 'Ayya Nadar Janaki Ammal College, Sivakasi',
    detail: 'Affiliated with Madurai Kamaraj University',
    percentage: '85%',
  },
  {
    period: '2021 - 2022',
    title: 'Higher Secondary Education | XII',
    place: 'S.H.N.V. Higher Secondary School, Sivakasi',
    detail: 'State Board',
    percentage: '72.5%',
  },
  {
    period: '2019 - 2020',
    title: 'Secondary Education | X',
    place: 'S.H.N.V. Higher Secondary School, Sivakasi',
    detail: 'State Board',
    percentage: '74%',
  },
]

const technicalSkills = [
  'HTML',
  'CSS',
  'JavaScript',
  'ReactJS',
  'Node.js',
  'Flutter',
  'Java',
  'Python',
  'PHP',
  'MySQL',
  'Firebase',
  'GitHub',
];

const softSkills = [
  'Communication',
  'Teamwork',
  'Leadership',
  'Problem Solving',
  'Time Management',
  'Adaptability',
  'Quick Learning',
  'Creativity',
  'Critical Thinking',
  'Decision Making',
];
const achievements = [
  {
    title: 'Department Softech Association Secretary',
    meta: '2024 - 2025',
    desc: 'Elected as the Secretary of the Computer Applications Department Association for the academic year 2024-2025.'
  },
  {
    title: 'Intra-Hackathon Organizer',
    meta: '2024',
    desc: 'Organized a one-day Intra-Hackathon for both UG and PG students.'
  },
  {
    title: 'Peer Learning Program Organizer',
    meta: '2025',
    desc: 'Organized an intra-department peer learning program on basic programming skills for commerce UG students.'
  },
  {
    title: 'Word Wizard Event Organizer',
    meta: '2024',
    desc: 'Organized the Word Wizard event for UG students.'
  },
  {
    title: 'Puzzle Mysteries Event Organizer',
    meta: '2024',
    desc: 'Organized Puzzle Mysteries event for PG students.'
  },
  {
    title: 'Legacy of Code Event Organizer',
    meta: '2024',
    desc: 'Organized Legacy of Code event for both UG and PG students.'
  },
  {
    title: 'State Level Hackathon Winner - CodeFest’25',
    meta: '2025',
    desc: 'Won 1st Prize in the State Level Hackathon CodeFest’25 at Ayya Nadar Janaki Ammal College.'
  },
  {
    title: 'Code Chef - iStrom 2K24',
    meta: '2024',
    desc: 'Won 1st Prize in Code Chef event at Sarah Tucker College, Tirunelveli.'
  },
  {
    title: 'Tech Hunt - iStrom 2K24',
    meta: '2024',
    desc: 'Won 2nd Prize in Tech Hunt event at Sarah Tucker College, Tirunelveli.'
  }
];

const certificates = [
  {
    name:'Advanced Python Programming',
    issuer: 'Simplilearn & SkillUp',
    year: '2026'
  },
  {
    name: 'One Day Workshop on AI & ML Tools',
    issuer: 'Ayya Nadar Janaki Ammal College',
    year: '2023'
  },
   {
    name: 'Crash Course - Computer Networks',
    issuer: 'Ayya Nadar Janaki Ammal College',
    year: '2023'
  }
]

function SectionHeading({ eyebrow, title, highlight, description }) {
  return (
    <div className="section-heading">
      <p className="section-eyebrow"><span />{eyebrow}</p>
      <h2>{title} <span>{highlight}</span></h2>
      <p>{description}</p>
    </div>
  )
}

function Home() {
  const [projectFilter, setProjectFilter] = useState('web')
  const visibleProjects = projects.filter((project) => project.category === projectFilter)

  return (
    <>
      <section className="hero-section" id="home">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />

        <div className="hero-inner">
          <div className="photo-stage">
            <div className="photo-ring" />
            <div className="photo-ring photo-ring-two" />
            <div className="photo-glow" />
            <div className="photo-circle">
              <img src={profileImage} alt="Karthik Balan R profile" />
            </div>
            <div className="photo-dot" />
            <div className="photo-dot photo-dot-two" />
          </div>

          <div className="hero-content">
            <p className="hero-eyebrow"><span /> Portfolio</p>
            <h1>
              <small>Hi, I am</small>
              <span>Karthik Balan</span>
            </h1>
            <h3>BCA Graduate | Software Developer | MCA'27</h3>
            <p>
              I'm a passionate software developer who loves building clean, responsive, and user-friendly applications. With experience in React, Java, JavaScript, MySQL, and Firebase, I enjoy transforming ideas into real-world digital solutions. This portfolio showcases my projects, skills, achievements, certifications, and learning journey.
            </p>
            <div className="hero-buttons">
              <a
                className="btn-cyan"
                href="/Karthikbalanrbca_resume.pdf"
                download="Karthik_Balan_R_Resume.pdf"
              >
                Download Resume
              </a>
              <a className="btn-outline" href="#contact">Contact Me</a>
            </div>
            <div className="hero-stats">
              <div><strong>{projects.length}+</strong><span>Projects</span></div>
              <div><strong>10+</strong><span>Skills</span></div>
              <div><strong>6+</strong><span>Certificates</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-section section-alt" id="education">
        <SectionHeading
          eyebrow="Academic"
          title="Academic"
          highlight="Background"
          description="My education and learning path in computer applications and software development."
        />
        <div className="education-grid">
          {education.map((item) => (
            <article className="edu-card" key={item.title}>
              <span>{item.period}</span>
              <h3>{item.title}</h3>
              <h4>{item.place}</h4>
              <p>{item.detail}</p>
              <p>{item.percentage}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-section" id="skills">
        <SectionHeading
          eyebrow="Abilities"
          title="Technical"
          highlight="Skills"
          description="A collection of technologies, frameworks, and tools I work with."
        />
        <div className="skills-grid">
          {technicalSkills.map((skill) => (
            <div className="skill-card" key={skill}>
              <span>{skill.slice(0, 2).toUpperCase()}</span>
              {skill}
            </div>
          ))}
        </div>

        <h3 className="soft-title">Soft <span>Skills</span></h3>
        <div className="soft-grid">
          {softSkills.map((skill) => (
            <span className="soft-pill" key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="portfolio-section section-alt" id="projects">
        <SectionHeading
          eyebrow="Work"
          title="My"
          highlight="Projects"
          description="A collection of projects showcasing UI development, programming logic, database integration, and real-world implementation."
        />
        <div className="project-filter" aria-label="Project category filter">
          <button
            className={projectFilter === 'web' ? 'active' : ''}
            type="button"
            onClick={() => setProjectFilter('web')}
          >
            Web App
          </button>
          <button
            className={projectFilter === 'mobile' ? 'active' : ''}
            type="button"
            onClick={() => setProjectFilter('mobile')}
          >
            Mobile App
          </button>
          <button
            className={projectFilter === 'desktop' ? 'active' : ''}
            type="button"
            onClick={() => setProjectFilter('desktop')}
          >
            Desktop App
          </button>
        </div>
        <div className="projects-grid">
          {visibleProjects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-thumb">
                <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
                <span>
                  {project.category === 'mobile'
                    ? 'Mobile App'
                    : project.category === 'desktop'
                      ? 'Desktop App'
                      : 'Web App'}
                </span>
              </div>
              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <h4>Technologies Used</h4>
                <div className="project-tags">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-section" id="internship">
        <SectionHeading
          eyebrow="Experience"
          title="My"
          highlight="Internship"
          description="Real-world learning experience through practical web development work."
        />
        <article className="intern-card">
          <div className="intern-header">
            <div className="intern-logo">IN</div>
            <div>
              <h3>Web Developer Intern</h3>
              <p>Bluelines Tech Solutions, Kovilpatti.</p>
            </div>
          </div>
          <span className="intern-period">May 2024 - June 2024</span>
          <ul>
  <li>I developed a Hospital Management System web application using PHP.</li>
  <li>Learned and applied web development technologies like HTML, CSS, JavaScript, and React.</li>
  <li>Worked with forms, reusable UI components, and database-driven content.</li>
  <li>Improved debugging, teamwork, and project delivery skills.</li>
</ul>
        </article>
      </section>

      <section className="portfolio-section section-alt" id="achievements">
        <SectionHeading
          eyebrow="Recognition"
          title="My"
          highlight="Achievements"
          description="Milestones that reflect consistency, leadership, and technical growth."
        />
        <div className="achievement-grid">
          {achievements.map((item, index) => (
            <article className="achievement-card" key={item.title}>
              <strong>{String(index + 1).padStart(2, '0')}</strong>
              <div>
                <span>{item.meta}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-section" id="certificates">
        <SectionHeading
          eyebrow="Credentials"
          title="My"
          highlight="Certificates"
          description="Certifications and training programs that support my technical foundation."
        />
        <div className="cert-grid">
          {certificates.map((cert) => (
            <article className="cert-card" key={cert.name}>
              <div>CR</div>
              <h3>{cert.name}</h3>
              <p>{cert.issuer}</p>
              <span>{cert.year}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-card">
          <span className="contact-icon">@</span>
          <h2>Let's Connect</h2>
          <p>
            Have an opportunity, project idea, or interview update? My inbox is always open, and I’m ready to connect.
          </p>
          <a className="btn-cyan" href="mailto:karthikbalan.r@gmail.com">karthikbalan.r@gmail.com</a>
          <div className="social-pills">
            <a href="https://www.linkedin.com/in/karthik-balan-r-863496281?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/Karthikbalan21" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
