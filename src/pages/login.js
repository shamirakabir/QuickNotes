import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import Navbar from '../components/Navbar/Navbar';

function Login(props) {
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
 
  // handle button click of login form
  const handleLogin = () => {
    props.history.push('./');
  }
  const onLoginClick = (event) => {
    console.log(event);
    props.setloginProfessor(false);
    props.setloginStudent(true);
  }
 
  return (
    <div><Navbar/>
    <div class="col-sm-12 col-md-6 right-container">
    
    <div class="card-layout">
    <h1> Sign In </h1>
    <p>Welcome Back!</p>
    <form id="login-form" action="javascript:;" autocomplete="off" class="" novalidate="novalidate">
      <div class="form-group">  
      <div class="controls">
      <label class="email-label">Email Address</label>
      <input type="email" class="form-control input" maxlength="128" placeholder="Email Address"></input>
      </div>
      </div>
      <div class="form-group">
      <div class="controls">
      <div class="form-item-flex-wrap">
      <label class="email-label">Password</label>
      <input type="password" id="password" name="password" autocomplete="new-password" class="form-control input" maxlength="99" placeholder="Password"></input>
      <a class="position-button" href="#">Forgot password?</a>
      </div>
      </div>
      </div>
      <div class="form-group">
      <div class="controls">
      <div class="signin">
      <Link to="/studentHomePage" onClick={onLoginClick}>
      <button type="button" class="btn btn-primary signin user">Sign In</button>
      </Link>
      <i class="busy busy24"></i>
      </div>
      </div>
      </div>
      </form>
      </div>
      <p>New to QuickNotes? <a href="#" class="btn__tertiary--medium"> Join Now </a></p>
      </div>
      </div>

  );
}
 
const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
 
  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}
 
export default Login;