import React, { useState } from 'react';
import Navbar from './Navbar';
import About from './About';
import Resume from './Resume';
import  Project from './Project';
import Blog from './Blog';
import Contact from './Contact';

const PAGES = [
  { key: 'about', label: 'About', Component: About },
  { key: 'resume', label: 'Resume', Component: Resume },
  { key: 'project', label: 'Projects', Component: Project },
  { key: 'blog', label: 'Blog', Component: Blog },
  { key: 'contact', label: 'Contact', Component: Contact },
];

const MainContent = () => {
  const [activePage, setActivePage] = useState('about');

  return (
    <>
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      {PAGES.map(({ key, Component }) => (
        <Component key={key} className={key === activePage ? 'active' : ''} data-page={key} />
      ))}
    </>
  );
};

export default MainContent; 