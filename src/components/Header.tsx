import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { portfolio } from '../data/portfolio'

const links = ['About', 'Skills', 'Experience', 'Projects', 'Contact']

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <nav className="container nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label={`${portfolio.name}, home`}>
          AM<span>.</span>
        </a>
        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
        <div id="site-menu" className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>
              {link}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
