import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function Home() {
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
            <div className="header">
                <h2>Dashboard</h2>
            </div>
            <div className="center-container">
            <div className="student-container">
                <div className="image-gallery">
                    <div className="image-container">
                        <img src="/assets/imgs/ucount.png" />
                        <button className="image-button">User Count</button>
                    </div>
                    <div className="image-container">
                        <img src="/assets/imgs/test.png" />
                        <button className="image-button">Test</button>
                    </div>
                    <div className="image-container">
                        <img src="/assets/imgs/sample.png" />
                        <button className="image-button"> Sample</button>
                    </div>
                    <div className="image-container">
                        <img src="/assets/imgs/rank.png" />
                        <button className="image-button">Ranks</button>
                    </div>
                </div>
            </div>
            </div>
            <div className="header3">
                <h2>Activity</h2>
            </div>
            
<div className="student-wrapper">
  <div className="student-container">
    <div className="header4">
      <div className="header-item id">ID</div>
      <div className="header-item full-name">Full Name</div>
      <div className="header-item date">Date</div>
      <div className="header-item type">Type</div>
      <div className="header-item school">School</div>
      <div className="header-item actions">Actions</div>
    </div>
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

    )
}
