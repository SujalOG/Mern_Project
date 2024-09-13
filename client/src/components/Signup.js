import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

const Signup = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    work: '',
    password: '',
    cpassword: ''
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, phone, work, password, cpassword
      })
    });

    const data = await res.json();

    if (data.status === 422 || !data) {
      window.alert("Invalid Registration!");
      console.log("Invalid Registration!");
    } else {
      window.alert("Successful Registration!");
      console.log("Successful Registration!");

      navigate('/login'); // Use navigate instead of history.push
    }
  };

  return (
    <>
      <div className="container">
        <div className="title">Registration</div>
        <div className="content">
          <form method="POST" onSubmit={handleSubmit}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">Full Name</span>
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={user.name}
                  onChange={handleInputs}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input
                  type="text"
                  placeholder="Enter your email"
                  name="email"
                  value={user.email}
                  onChange={handleInputs}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Phone Number</span>
                <input
                  type="text"
                  placeholder="Enter your number"
                  name="phone"
                  value={user.phone}
                  onChange={handleInputs}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Profession</span>
                <input
                  type="text"
                  placeholder="Enter your profession"
                  name="work"
                  value={user.work}
                  onChange={handleInputs}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Password</span>
                <input
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  value={user.password}
                  onChange={handleInputs}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Confirm Password</span>
                <input
                  type="password"
                  placeholder="Confirm password"
                  name="cpassword"
                  value={user.cpassword}
                  onChange={handleInputs}
                  required
                />
              </div>
            </div>

            <div className="button">
              <input type="submit" value="Register" onClick={PostData} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
