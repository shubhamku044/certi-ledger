import React, { useState, useEffect } from 'react';

const Registration = () => {
  // Step 1: Set up state variables
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
  });

  // Step 2: Create input fields for user data
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Step 3: Handle form submission
  const formSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Step 7: Add validation and error handling as needed
    if (formData.username && formData.firstName && formData.password && formData.email) {
      // You can send the formData to an API for registration here
      // Reset the form after submission
      setFormData({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: '',
      });
    } else {
      alert('Please fill in all required fields.');
    }
  };

  useEffect(() => {
    // Step 4: Use the useEffect hook for any side effects
  }, []);

  return (
    <>
      <form onSubmit={formSubmit}>
        {/* Step 5: Use onChange event to update state */}
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Registration;
