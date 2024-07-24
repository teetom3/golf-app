// frontend/src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../styles/Login.css";
import Logo from "../assets/LOGO FINAL THOMAS GOLF-01 (1).png"

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('token', data.token);
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='form_container'>
      <img className="logo" src={Logo} alt="logo"/>
    <form onSubmit={handleLogin}>
      <label>Identifiant :</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />

      <label>Mot de passe</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Login</button>

      <p>Si vous n'avez pas de compte vous pouvez en creer un en cliquant <a href='/register'><b>ici</b></a></p>
    </form>
    </div>
    
  );
}

export default Login;
