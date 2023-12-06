import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track sidebar visibility
  const [selectedMenu, setSelectedMenu] = useState('Home');
  const [sidebarStyles, setSidebarStyles] = useState({
    bt1MarginLeft: '-220px',
    bt2MarginLeft: '-220px',
  });

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);

    // Apply specific margin-left for the active button
    if (menu === 'StudentAccount') {
      setSidebarStyles({ bt1MarginLeft: '-140px', bt2MarginLeft: '-220px' });
    } else if (menu === 'AddStudent') {
      setSidebarStyles({ bt1MarginLeft: '-220px', bt2MarginLeft: '-140px' });
    }

    // Your other logic here...
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggles the sidebar visibility
  };

  return (
    <>
      <div className={`topnav ${isOpen ? 'topnav-open' : ''}`}>
        <a className="toggle-btn" onClick={toggleSidebar}>
          {isOpen ? '' : ''} <img src='/assets/imgs/sb.png' alt="Toggle Sidebar" />
        </a>
      </div>
      <div className={`sidebar-container ${isOpen ? 'open' : 'closed'}`}>
        <img src='/assets/imgs/logo.png' id='logo'/>
        <div className={`sidebar-content ${isOpen ? 'visible' : 'hidden'}`}>
          <div
            className='sidebarbt'
            id='sidebarbt'
            style={{ marginLeft: sidebarStyles.bt1MarginLeft }}
          >
            <Link
              to="/add-student"
              onClick={() => handleMenuClick('StudentAccount')}
              id='sbbt1'
            >
              Home
            </Link>
          </div>
          <div
            className='sidebarbt2'
            id='sidebarbt2'
            style={{ marginLeft: sidebarStyles.bt2MarginLeft }}
          >
            <Link
              to="/student-account"
              onClick={() => handleMenuClick('AddStudent')}
              id='sbbt2'
            >
              Student Account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
