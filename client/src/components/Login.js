import React, { useState,useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { UserContext } from '../App';

const Login = () => {

  const {state, dispatch} = useContext(UserContext);
  
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/signin', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!res.ok) {
        console.error('Error:', res.statusText);
        window.alert('Invalid credentials!');
        return;
      }

      const data = await res.json();

      if (res.status === 400 || !data) {
        window.alert('Invalid credentials!');
        
      } else {
        dispatch({type:'USER',payload:true})
        window.alert('Login Successful!');
        navigate('/');
      }
    } catch (error) {
      console.error('Error:', error.message);
      window.alert('An error occurred during login.');
    }
  };

  return (
    <>
      <div className="container">
        <input type="checkbox" id="check" />
        <div className="login form">
          <header>Login</header>
          <form onSubmit={loginUser}>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
            <a href="#">Forgot password?</a>
            <button type="submit" className="button">
              Login
            </button>
          </form>
          <div className="signup">
            <span className="signup">
              Don't have an account?
              <Link to="/signup">Signup</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
