// import React from 'react';
// import './RightSidebar.css'; // Import your RightSidebar styling here

// const RightSidebar = ({ isRightSidebarOpen, onClose }) => {


//     const rightSidebarRef = useRef();

//     const handleOutsideClick = (e) => {
//       const button = document.querySelector('.right-sidebar-toggle-button');
  
//       if (
//         rightSidebarRef.current &&
//         !rightSidebarRef.current.contains(e.target) &&
//         e.target !== button
//       ) {
//         // setIsRightSidebarOpen(false);
//         onClose();
//       }
//     };
  
    
//       useEffect(() => {
//         document.addEventListener('mousedown', handleOutsideClick);
    
//         return () => {
//           document.removeEventListener('mousedown', handleOutsideClick);
//         };
//       }, [onClose]);




//   return (
//     <div className={`right-sidebar ${isRightSidebarOpen ? 'open' : ''}`}>
//       <div className="right-sidebar-content">
//         {/* Your content for the right sidebar goes here */}
//         <h2>Right Sidebar Content</h2>
//         <p>This is the content of the right sidebar.</p>
//       </div>
//       <button className="close-button" onClick={onClose}>
//         Close
//       </button>
//     </div>
//   );
// };

// export default RightSidebar;


// RightSidebar.js
import React, { useRef, useEffect } from 'react';
import './RightSidebar.css';

const RightSidebar = ({ isRightSidebarOpen, onClose }) => {
  const rightSidebarRef = useRef();

  const handleOutsideClick = (e) => {
    const button = document.querySelector('.right-sidebar-toggle-button');

    if (
      rightSidebarRef.current &&
      !rightSidebarRef.current.contains(e.target) &&
      e.target !== button
    ) {
      onClose();
    }
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      const button = document.querySelector('.right-sidebar-toggle-button');

      if (
        rightSidebarRef.current &&
        !rightSidebarRef.current.contains(e.target) &&
        e.target !== button
      ) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]); // Removed onClose from the dependency array

  return (
    <div className={`right-sidebar ${isRightSidebarOpen ? 'open' : ''}`} ref={rightSidebarRef}>
      <div className="right-sidebar-content">
       
         {/* Website Ad */}
         <iframe
          title="Website Ad"
          src="https://getbootstrap.com/docs/5.3/getting-started/introduction/"
          width="100%"
          height="300"
          frameBorder="0"
          allowFullScreen
        ></iframe>

    



     <iframe width="97%" height="40%" src="https://www.youtube.com/embed/ZyrkZm7ufJg?si=hA8VUtKV11CiSm9o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" autoplay=""></iframe>














      </div>
      
    </div>
  );
};

export default RightSidebar;
