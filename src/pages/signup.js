import React, { useState } from 'react';
import './login.css';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';


function SignUp(props) {
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
 
  // handle button click of login form
  const handleLogin = () => {
    props.history.push('./home');
  }
 
  return (
    <div class="col-sm-12 col-md-6 right-container">
    <div class="right-item">
    <form id="login-form" action="javascript:;" autocomplete="off" class="" novalidate="novalidate">
      <div class="form-group">  
      <div class="controls">
      <label for="email" class="email-label">Email Address</label>
      <input type="email" {...username} class="form-control input " maxlength="128" placeholder="Email Address"></input>
      </div>
      </div>
      <div class="form-group">
      <div class="controls">
      <label for="password" class="password-label">Password</label>
      <div class="form-item-flex-wrap">
      <input type="password" id="password" name="password" autocomplete="new-password" class="form-control input" maxlength="99" placeholder="Password"></input>
      <a class="position-button" href="#">Forgot password?</a>
      </div>
      </div>
      </div>
      <div class="form-group">
      <div class="controls">
      <div class="signin">
      <button type="button" class="btn btn-primary signin user">Sign In</button>
      <i class="busy busy24"></i>
      </div>
      </div>
      </div>
      

      </form>
      </div>
      <ToggleButtonGroup type='checkbox' name='genre'>
        <ToggleButton value={'Professor'}>Professor</ToggleButton>
        <br></br>
        <ToggleButton value={'Student'}>Student</ToggleButton>
      </ToggleButtonGroup>
      </div>

    /* // <div>
    //   <div style={{ marginTop: 100}}>
    //     Username<br />
    //     <input type="text" {...username} autoComplete="new-password" />
    //   </div>
    //   <div style={{ marginTop: 10 }}>
    //     Password<br />
    //     <input type="password" {...password} autoComplete="new-password" />
    //   </div>
    //   {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
    //   <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
    // </div> */
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
 
export default SignUp;