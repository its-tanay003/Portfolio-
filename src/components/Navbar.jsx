import { useState } from 'react';
import { Menu, X, Shield } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: 'Terminal', href: '#terminal-section' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Leadership', href: '#extracurricular' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav>
      <div className="container nav-content">
        <a href="#home" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Shield size={24} color="var(--accent-primary)" />
          Tanay<span>Tanishk</span>
        </a>
        
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={item.href} onClick={() => setIsOpen(false)}>{item.name}</a>
            </li>
          ))}
        </ul>

        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Navigation">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
