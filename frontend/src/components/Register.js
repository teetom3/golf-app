// frontend/src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../styles/Register.css"

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', { firstName, lastName, email, address, password });
      navigate('/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="register" onSubmit={handleRegister}>
      <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Prenom" required />
      <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Nom" required />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Addresse" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe" required />
      <button type="submit">Creer un compte</button>
    </form>
  );
}

export default Register;
