import React, { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';


export default function Login() {
  const [credentials, setCredentials] = useState({ password: "", email: ""});
  const navigate=useNavigate();


  const changeHandler = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();


    const data = await fetch("http://localhost:2000/api/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password}),
    });
    const json = await data.json();

    if (!json.success) {
      alert("enter valid credentials");

    }
    if (json.success) {
      alert("login Successfully");
      localStorage.setItem("authToken",json.authtoken);
      console.log(localStorage.getItem("authToken"));
      navigate("/")
    }

  }

  return (
    <>
      <div className='container'>

        <form onSubmit={handleSubmit}>
          
          <div className="form-group m-3">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" onChange={changeHandler} name="email" value={credentials.email} placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group m-3">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" name="password" value={credentials.password} onChange={changeHandler} placeholder="Password" />
          </div>
          
          <button type="submit" className="btn btn-success m-3">Submit</button>
          <Link to="/signup" className='btn btn-danger m-3'>Sign Up</Link>
        </form >
      </div>

    </>
  )
}
