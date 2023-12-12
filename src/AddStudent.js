import React, { useState } from 'react';
import axios from 'axios';

const AddStudent = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    middlename: '',
    age: '',
    gender: '',
    email: '',
    username: '',
    school: '',
    password: '',
    password_confirmation: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post('http://localhost:8000/api/signup', formData);
        console.log('Signup successful:', response.data);
    } catch (error) {
        console.error('Signup failed:', error.response.data);
    }
}; 

  return (
    <>
    <div class="center-container">
    <div className="Add-Student-container">
      <div className="flex-container">
      <div className="student-side">
        <img src="/assets/imgs/bata.png" />
      </div>

      <div className="student-reg">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            placeholder="First Name: "
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <input
          placeholder="Last Name: "
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="Lcontainer">
          <input
          placeholder="Middle Name: "
            type="text"
            id="middlename"
            name="middlename"
            value={formData.middlename}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
    
          <input
          placeholder="Parent Email: "
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
    
        </div>

        <div className="Rcontainer">
          <input
          placeholder="Age: "
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />

          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required>
            <option value="" disabled>
             Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="mb-4">
          <input
            placeholder="School: "
            type="text"
            id="school"
            name="school"
            value={formData.school}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        
        <div className="mb-4">
            <input
                placeholder="School ID: "
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
            />
        </div>
        <div className="mb-4">
            <input
                placeholder="Password: "
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
            />
        </div>
         <div className="mb-4">
            <input
              placeholder="Confirm Password: "
                type="password"
                id="password_confirmation"
                name="password_confirmation"
                value={formData.password_confirmation}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
            />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
         Create Account
        </button>
      </form>
      </div>
    </div>
    </div>
    </div>
    </>
  );
};

export default AddStudent;