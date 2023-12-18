import React, { useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';


export default function Signup() {
  const [credentials, setCredentials] = useState({ name: "", password: "", email: "", location: "" });
  const navigate = useNavigate();



  const changeHandler = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();


    const data = await fetch("http://localhost:2000/api/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.location }),
    });
    const json = await data.json();

    if (!json.success) {
      alert(json.errors);

    }
    if (json.success) {
      alert("Sign Up Successfully");
      navigate("/login")
    }

  }

  return (
    <>
      <div className='container'>

        <form onSubmit={handleSubmit}>
          <div className="form-group m-3">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" placeholder='Name' value={credentials.name} name="name" onChange={changeHandler} />
          </div>
          <div className="form-group m-3">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" onChange={changeHandler} name="email" value={credentials.email} placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group m-3">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" name="password" value={credentials.password} onChange={changeHandler} placeholder="Password" />
          </div>
          <div className="form-group m-3">
            <label htmlFor="exampleInputPassword1">Address</label>
            <input type="text" className="form-control" name="location" value={credentials.location} onChange={changeHandler} placeholder="Address" />
          </div>

          <button type="submit" className="btn btn-success m-3">Sign Up</button>
          <Link to="/login" className='btn btn-danger m-3'>Login</Link>
        </form >
      </div>

    </>
  )
}
