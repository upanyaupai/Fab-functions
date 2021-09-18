import './App.css';
 import React, { useState } from "react";
import validator from 'validator'
import { Container } from 'react-bootstrap';

const App = () => {

const [emailError, setEmailError] = useState('')
const validateEmail = (e) => {
	var email = e.target.value

	if (validator.isEmail(email)) {
	setEmailError('Valid Email :)')
	} else {
	setEmailError('Enter valid Email!')
	}
}

  const [errorMessage, setErrorMessage] = useState('')

  const validate = (value) => {

    if (validator.isStrongPassword(value, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
      setErrorMessage('Is Strong Password')
    } else {
      setErrorMessage('Is Not Strong Password')
    }
  }

return (
	<Container>
	
  <pre>
		   <center> <h1>Happy Go Lucky</h1>
		<span>Enter Email: </span><input type="text" id="userEmail"
		onChange={(e) => validateEmail(e)}></input> 
		<span style={{
		fontWeight: 'bold',
		color: 'red',
		}}>{emailError}</span>
	
     <div>
        <span><br></br>Enter Password:{' '} </span><input type="text"
          onChange={(e) => validate(e.target.value)}></input> 
        <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{errorMessage}</span>
<h2><a href="#">Login</a></h2> 
  </div>
  </center>

      <div>
 
<span><h2>Check out the following public events happening around you! <br /> Login  to view more! &nbsp;
  <a href="#">Sign Up Here!</a></h2></span></div>
    	</pre>
      </Container>
  );
}

export default App
