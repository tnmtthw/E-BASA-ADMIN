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
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Student Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="firstname" className="block text-sm font-medium text-gray-600">
            First Name
          </label>
          <input
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
          <label htmlFor="lastname" className="block text-sm font-medium text-gray-600">
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="middlename" className="block text-sm font-medium text-gray-600">
            Middle Name
          </label>
          <input
            type="text"
            id="middlename"
            name="middlename"
            value={formData.middlename}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="age" className="block text-sm font-medium text-gray-600">
            Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="gender" className="block text-sm font-medium text-gray-600">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          >
            <option value="" disabled>
              Select Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="school" className="block text-sm font-medium text-gray-600">
            School
          </label>
          <input
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
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
                Username
            </label>
            <input
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
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                Password
            </label>
            <input
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
            <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-600">
                Confirm Password
            </label>
            <input
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
          Register
        </button>
      </form>
    </div>
  );
};

export default AddStudent;