import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  ContactRound,
  Mail,
  MapPin,
} from 'lucide-react'
import { Header } from './components/Header'
import { SectionHeading } from './components/SectionHeading'
import { portfolio } from './data/portfolio'

function App() {
  return (
    <div id="top">
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />

      <main id="main">
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-glow" aria-hidden="true" />
          <div className="availability reveal">
            <span aria-hidden="true" /> Available for select projects
          </div>
          <h1 id="hero-title" className="reveal delay-1">
            Building digital products with <span>clarity and purpose.</span>
          </h1>
          <p className="hero-copy reveal delay-2">{portfolio.intro}</p>
          <div className="hero-actions reveal delay-3">
            <a className="button primary" href="#projects">
              View my work <ArrowDown size={17} />
            </a>
            <a className="button secondary" href={`mailto:${portfolio.email}`}>
              Get in touch <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="hero-meta reveal delay-3">
            <span><MapPin size={15} /> {portfolio.location}</span>
            <span>{portfolio.role}</span>
          </div>
        </section>

        <section id="about" className="section container split-section">
          <SectionHeading eyebrow="01 / About" title="A builder who cares about the details." />
          <div className="body-copy reveal">
            <p>{portfolio.about}</p>
            <p>
              My approach combines pragmatic engineering, careful interaction design,
              and close collaboration. The result is software that feels calm, fast,
              and obvious to use.
            </p>
          </div>
        </section>

        <section id="skills" className="section container split-section">
          <SectionHeading eyebrow="02 / Skills" title="Tools I use to ship quality work." />
          <ul className="skill-grid reveal" aria-label="Technical skills">
            {portfolio.skills.map((skill, index) => (
              <li key={skill}><span>{String(index + 1).padStart(2, '0')}</span>{skill}</li>
            ))}
          </ul>
        </section>

        <section id="experience" className="section container">
          <SectionHeading eyebrow="03 / Experience" title="Where I’ve made an impact." />
          <div className="timeline">
            {portfolio.experience.map((item) => (
              <article className="timeline-item reveal" key={item.company}>
                <p className="period">{item.period}</p>
                <div>
                  <h3>{item.role}</h3>
                  <p className="company">{item.company}</p>
                </div>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section container split-section">
          <SectionHeading eyebrow="04 / Education" title="The foundation." />
          <article className="education-card reveal">
            <div>
              <p className="period">{portfolio.education.period}</p>
              <h3>{portfolio.education.degree}</h3>
              <p>{portfolio.education.school}</p>
            </div>
          </article>
        </section>

        <section id="projects" className="section container">
          <SectionHeading eyebrow="05 / Projects" title="Selected work." />
          <div className="project-grid">
            {portfolio.projects.map((project, index) => (
              <article className="project-card reveal" key={project.title}>
                <div className="project-number">0{index + 1}</div>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul aria-label={`${project.title} technologies`}>
                    {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact section container">
          <p className="eyebrow reveal">06 / Contact</p>
          <h2 className="reveal">Have a thoughtful project in mind?</h2>
          <p className="reveal">I’m always interested in good problems and the people working on them.</p>
          <a className="contact-link reveal" href={`mailto:${portfolio.email}`}>
            <Mail size={22} /> {portfolio.email}
          </a>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} {portfolio.name}</p>
          <div className="social-links">
            <a href={portfolio.links.repository} target="_blank" rel="noreferrer" aria-label="Portfolio source code on GitHub"><Code2 size={19} /></a>
            <a href={portfolio.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><ContactRound size={19} /></a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
