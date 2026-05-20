import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Home', path: '#home' },
  { label: 'Education', path: '#education' },
  { label: 'Skills', path: '#skills' },
  { label: 'Projects', path: '#projects' },
  { label: 'Internship', path: '#internship' },
  { label: 'Achievements', path: '#achievements' },
  { label: 'Certificates', path: '#certificates' },
  { label: 'Contact', path: '#contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLight, setIsLight] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    document.body.classList.toggle('light-theme', isLight)
  }, [isLight])

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.path))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -45% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="navbar">
      <a className="brand" href="#home" onClick={() => setIsOpen(false)}>
        <span>KB</span>
        <strong>Karthik<span>.</span></strong>
      </a>

      <nav className={isOpen ? 'nav-menu open' : 'nav-menu'} aria-label="Primary navigation">
        {navLinks.map((link) => (
          <a
            key={link.path}
            href={link.path}
            className={activeSection === link.path.slice(1) ? 'nav-link active' : 'nav-link'}
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <button
          className="theme-switch"
          type="button"
          aria-label="Toggle theme"
          onClick={() => setIsLight((value) => !value)}
        >
          <span />
        </button>
        <button
          className="menu-button"
          type="button"
          aria-label="Toggle menu"
          onClick={() => setIsOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Navbar
