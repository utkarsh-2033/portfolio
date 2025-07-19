import React from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  return (
    <main>
      <aside className="sidebar">
        <Sidebar />
      </aside>
      <div className="main-content">
        <MainContent />
      </div>
    </main>
  );
}

export default App;
