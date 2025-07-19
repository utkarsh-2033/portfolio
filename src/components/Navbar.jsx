import React from 'react';

const NAV_ITEMS = [
  { key: 'about', label: 'About' },
  { key: 'resume', label: 'Resume' },
  { key: 'project', label: 'Projects' },
  // { key: 'blog', label: 'Blog' },
  { key: 'contact', label: 'Contact' },
];

const Navbar = ({ activePage, setActivePage }) => (
  <nav className="navbar">
    <ul className="navbar-list">
      {NAV_ITEMS.map(({ key, label }) => (
        <li className="navbar-item" key={key}>
          <button
            className={`navbar-link${activePage === key ? ' active' : ''}`}
            data-nav-link
            onClick={() => setActivePage(key)}
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar; 