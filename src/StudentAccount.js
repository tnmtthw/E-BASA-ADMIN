import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const StudentAccount = () => {
  const [selectedMenu, setSelectedMenu] = useState('Home');

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/students') // Update the endpoint to match your Laravel route
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
    <br />
    <br />
    <br />
    
    <div className='studentlist-content'>
    <div class='header5'>
  <span>Student list</span>
  <Link to="/add-student"
              onClick={() => handleMenuClick('add-student')}>
  <button class="header5">Add Student<img src="/assets/imgs/+.png" alt="Add Icon" /></button>
</Link>
</div>     
 <div className="header6">
      <div className="header-item id">ID</div>
      <div className="header-item full-name">Full Name</div>
      <div className="header-item date">Date</div>
      <div className="header-item type">Type</div>
      <div className="header-item school">School</div>
      <div className="header-item actions">Actions</div>
    </div>
      <div className='center-container'>
      <div className='student-container'>
      <ul>
  {data.map(student => (
    <li className='student-lines' key={student.id}>
      {`${student.firstname} ${student.lastname}, ${student.age}, ${student.gender}, ${student.school}`}
    </li>
  ))}
</ul>

      </div>
      </div>
    </div>
    </>
  );
};

export default StudentAccount;