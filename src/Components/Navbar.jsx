import React, { useRef, useEffect, useState } from 'react';
import './Sidebar.css';
import RightSidebar from '../Components/RightSidebar';

export default function Navbar() {

  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
 

  const toggleRightSidebar = () => {
    setIsRightSidebarOpen(!isRightSidebarOpen);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="https://img.freepik.com/free-vector/colorful-letter-gradient-logo-design_474888-2309.jpg?size=338&ext=jpg&ga=GA1.1.1803636316.1701302400&semt=ais" alt="" style={{ height: '30px', width: '30px' }} />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Your existing navbar links go here */}
          </div>

          <a className="navbar-brand" href="#">About</a>
          <a className="navbar-brand" href="#">Help</a>
          <a className="navbar-brand" href="#">Services</a>

          {/* Right Sidebar Open Button */}
          <button className='bg-dark text-white right-sidebar-toggle-button' onClick={toggleRightSidebar}>
            Open Right Sidebar
          </button>
        </div>
      </nav>

      {isRightSidebarOpen && (
        <RightSidebar isRightSidebarOpen={isRightSidebarOpen} onClose={() => setIsRightSidebarOpen(false)} />
      )}
    </div>
  );
}
