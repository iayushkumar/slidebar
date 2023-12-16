import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import './App.css';
import Content from './Components/Content';
import Footer from './Components/Footer';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <button style={{borderRadius:'100px'}} className=' text-white' onClick={toggleSidebar}>
        <img
          // className='bg-light'
          src="https://icons.veryicon.com/png/o/miscellaneous/big-data-regular-monochrome-icon/sidebar-4.png"
          alt=""
          style={{ height: '20px', width: '20px' }}
        />
      </button>

      {isSidebarOpen && <Sidebar isSidebarOpen={isSidebarOpen} onClose={toggleSidebar} />}


      <Navbar />
      <Content />
      <Footer />
    </>
  );
}

export default App;
