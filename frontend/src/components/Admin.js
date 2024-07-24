// src/components/Admin.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/Dashboard.css"

const Admin = () => {
  const [courses, setCourses] = useState([]);
  
  useEffect(() => {
    // Récupération des cours non approuvés
    const fetchCourses = async () => {
      const response = await axios.get('http://localhost:5000/api/courses/pending', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      setCourses(response.data);
    };

    fetchCourses();
  }, []);

  const handleApprove = async (courseId) => {
    await axios.post(`http://localhost:5000/api/courses/${courseId}/approve`, {}, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });

    // Actualisation de la liste des cours après l'approbation
    setCourses(courses.filter(course => course._id !== courseId));
  };

  return (
    <div className='dashboard'>
      <h1>Admin Page</h1>
      <ul>
        {courses.map(course => (
          <li key={course._id}>
            {course.date} - {course.time}
            <button className='button'onClick={() => handleApprove(course._id)}>Approve</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
