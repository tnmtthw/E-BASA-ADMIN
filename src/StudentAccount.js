import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentAccount = () => {
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
    <div className='studentlist-content'>
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
  );
};

export default StudentAccount;