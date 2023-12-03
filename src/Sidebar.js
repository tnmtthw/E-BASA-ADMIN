// Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [selectedMenu, setSelectedMenu] = useState('Home');

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <div>
      <Link
        to="/student-account"
        onClick={() => handleMenuClick('StudentAccount')}
      >
        Home
      </Link>
      <Link
        to="/add-student"
        onClick={() => handleMenuClick('AddStudent')}
      >
        Add Student
      </Link>
    </div>
  );
};

export default Sidebar;