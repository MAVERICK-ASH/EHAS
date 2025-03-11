import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import StudentInfo from './components/StudentInfo';
import Tassign from './components/Tassign';
import HallAllocation from './components/HallAllocation';
import HallGenerator from './components/HallGenerator';

import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'student':
        return <StudentInfo />;
      case 'teacher':
        return <Tassign />; 
      case 'hall':
        return <HallAllocation />;
      case 'generator':
        return <HallGenerator />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Navbar setActiveTab={setActiveTab} />
      {renderContent()}
    </div>
  );
}

export default App;
