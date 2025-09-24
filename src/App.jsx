import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import profile from './assets/images/profile.jpg';

function Header() {
  return (
    <div className="header">
      <img src={profile} alt="Profile" className="profile-pic" />
      <h1>Alizah Henson</h1>
    </div>
  );
}

function Contact() {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <p>
        <strong>Address</strong><br/>
        City of San Fernando
      </p>
      <p>
        <strong>Phone</strong><br/>
        +63925877009
      </p>
      <p>
        <strong>E-mail</strong><br/>
        henson.patriciaalizah@gmail.com
      </p>
    </div>
  );
}

function Skills() {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <ul>
        <li>Certified in Database Management with hands-on experience in data modeling and SQL queries</li>
        <li>Skilled in designing and developing responsive websites using HTML, CSS, JavaScript, and React</li>
        <li>Knowledgeable in database design, optimization, and ensuring data integrity</li>
        <li>Experienced in creating user-friendly interfaces and applying modern web design principles</li>
        <li>Strong technical problem-solving, analytical, and documentation skills</li>
        <li>Ability to collaborate with teams and deliver efficient IT and web solutions</li>
      </ul>
    </div>
  );
}

function Education() {
  return (
    <div className="education">
      <h2>Education</h2>
        <strong>Master of Science: Information Technology</strong><br/>
        <p>University of the Philippines Diliman – Quezon City, Philippines</p>
      
        <strong>Bachelor of Science: Information Technology</strong><br/>
        <p>University Of The Assumption - San Fernando, Province Of Pampanga, Philippines</p>
    </div>
  );
}

function JobEntry({ years, title, company, details }) {
  return (
    <div className="job-entry">
      <div className="job-years">{years}</div>
      <div className="job-details">
        <h3>{title}</h3>
        <p><em>{company}</em></p>
        <ul>
          {details.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <div className="experience">
      <h2>Experience</h2>
      <JobEntry
        years="2028 - Current"
        title="Database Analyst"
        company="Converge ICT Solutions"
        details={[
          "Analyze, design, and optimize company databases to improve efficiency and performance.",
          "Develop SQL queries, stored procedures, and reporting tools for internal stakeholders.",
          "Collaborate with IT teams to ensure data integrity, security, and backup compliance."
        ]}
      />
      <JobEntry
        years="June 2027 - August 2027"
        title="Web Developer"
        company="Sutherland Global Services"
        details={[
          "Will assist in designing and developing responsive websites using HTML, CSS, and JavaScript.",
          "Expected to collaborate with senior developers to improve UI/UX for client projects.",
          "Anticipated role in testing web applications for compatibility and performance."
        ]}
      />
      <JobEntry
        years="January 2026 - March 2026"
        title="Database Management Intern"
        company="Converge ICT Solutions"
        details={[
          "Will support the IT team in managing and optimizing MySQL databases.",
          "Expected to prepare database reports and ensure data accuracy.",
          "Will assist in implementing backup and recovery procedures."
        ]}
      />
      <JobEntry
        years="2025 - 2027"
        title="Treasurer, Student Society on Information Technology Education (SSITE)"
        company="University Of The Assumption, San Fernando, Province Of Pampanga, Philippines"
        details={[
          "Managed and monitored the organization’s financial transactions and budget.",
          "Prepared financial reports and ensured transparency in fund allocation.",
          "Coordinated with officers to plan events and allocate resources effectively."
        ]}
      />
    </div>
  );
}

function App() {
  return (
    <div className="resume-container">
      <div className="left-panel">
        <Header />
        <Contact />
        <Skills />
      </div>
      <div className="right-panel">
        <p className="profile">
          Detail-oriented IT professional with a strong foundation in database management, web development, and networking. Skilled in designing efficient systems, optimizing databases, and building user-friendly web applications. Certified in Database Management, with a proven ability to troubleshoot technical issues and deliver reliable solutions. Known for problem-solving, adaptability, and a commitment to high-quality results.
        </p>
        <Education />
        <Experience />
      </div>
    </div>
  );
}

export default App;