import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { Analytics } from "@vercel/analytics/next"
function App() {
  const [sidebarActive, setSidebarActive] = useState(false);
  const handleSidebarToggle = () => setSidebarActive((prev) => !prev);
  return (
    <main>
      <Analytics/>
      <aside className={`sidebar${sidebarActive ? ' active' : ''}`}>
        <Sidebar onSidebarToggle={handleSidebarToggle} sidebarActive={sidebarActive} />
      </aside>
      <div className="main-content">
        <MainContent />
      </div>
    </main>
  );
}

export default App;
