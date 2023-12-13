import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('Home');
  const [sidebarStyles, setSidebarStyles] = useState({
    bt1MarginLeft: '-220px',
    bt2MarginLeft: '-220px',
    bt3MarginLeft: '-220px',
    bt4MarginLeft: '-220px',
    bt5MarginLeft: '-220px',
  });

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);

    let newStyles = {
      bt1MarginLeft: '-220px',
      bt2MarginLeft: '-220px',
      bt3MarginLeft: '-220px',
      bt4MarginLeft: '-220px',
      bt5MarginLeft: '-220px',
    };

    // Apply specific margin-left for the active button based on the selected menu
    switch (menu) {
      case 'Home':
        newStyles.bt1MarginLeft = '-140px';
        break;
      case 'StudentAccounts':
        newStyles.bt2MarginLeft = '-140px';
        break;
      case 'EducatorsAccounts':
        newStyles.bt3MarginLeft = '-140px';
        break;
      case 'Test':
        newStyles.bt4MarginLeft = '-140px';
        break;
      case 'Ranks':
        newStyles.bt5MarginLeft = '-140px';
        break;
      default:
        break;
    }

    setSidebarStyles(newStyles);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
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
              to="/"
              onClick={() => handleMenuClick('Home')}
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
              onClick={() => handleMenuClick('StudentAccounts')}
              id='sbbt2'
            >
              Student Account
            </Link>
          </div>
          <div
            className='sidebarbt3'
            id='sidebarbt3'
            style={{ marginLeft: sidebarStyles.bt3MarginLeft }}
          >
            <Link
              to="EducatorsAccounts"
              onClick={() => handleMenuClick('EducatorsAccounts')}
              id='sbbt3'
            >
              Educators Account
            </Link>
          </div>
          <div
className='sidebarbt4'
id='sidebarbt4'
style={{ marginLeft: sidebarStyles.bt4MarginLeft }}
>
<Link
  to="/test"  // Change the path to "/test"
  onClick={() => handleMenuClick('Test')}
  id='sbbt4'
>
  Test
</Link>
</div>
<div
className='sidebarbt5'
id='sidebarbt5'
style={{ marginLeft: sidebarStyles.bt5MarginLeft }}
>
<Link
  to="/ranks"  // Change the path to "/ranks"
  onClick={() => handleMenuClick('Ranks')}
  id='sbbt5'
>
  Ranks
</Link>
</div>

        </div>
      </div>
    </>
  );
};

export default Sidebar;
