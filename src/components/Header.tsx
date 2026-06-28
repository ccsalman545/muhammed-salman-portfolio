import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { portfolio } from '../data/portfolio'

const links = ['About', 'Skills', 'Experience', 'Education', 'Projects', 'Contact']

export function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <header className="site-header">
      <nav className="container nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label={`${portfolio.name}, home`}>
          MS<span>.</span>
        </a>
        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
        <ul id="site-menu" className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>{link}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
