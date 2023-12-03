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
    <div>
      <h2>Data from Laravel API</h2>
      <ul>
        {data.map(student => (
          <li key={student.id}>
            {`${student.firstname} ${student.lastname}, ${student.age}, ${student.gender}, ${student.school}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentAccount;