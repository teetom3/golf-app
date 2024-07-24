// frontend/src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/Dashboard.css";

function Dashboard() {
  const [courses, setCourses] = useState([]);
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      const token = localStorage.getItem('token');
      const { data } = await axios.get('http://localhost:5000/api/courses', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setCourses(data);
    };

    fetchCourses();
  }, []);

  const handleReserve = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.post('http://localhost:5000/api/courses', { date, startTime, endTime }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setCourses([...courses, { date, startTime, endTime, approved: false }]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='container'>
      <div id="overlay"></div>
      <h1>Mes cours</h1>
      <form onSubmit={handleReserve}>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} required />
        <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} required />
        <button type="submit">Reserver</button>
      </form>
      <h2>Vos cours</h2>
      <ul>
        {courses.map((course) => (
          <li key={course._id}>
            {course.date} {course.startTime} - {course.endTime} {course.approved ? 'Approuvé' : 'En attente de confirmation'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
