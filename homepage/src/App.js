import './App.css';
 import React, { useState } from "react";
import validator from 'validator'
import { Container } from 'react-bootstrap';
import Grid from '@mui/material/Grid';
// import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const App = () => {

const [emailError, setEmailError] = useState('')
const validateEmail = (e) => {
	var email = e.target.value

	if (validator.isEmail(email)) {
	setEmailError('\nValid Email :)')
	} else {
	setEmailError('\nPlease enter valid Email!')
	}
}

  const [errorMessage, setErrorMessage] = useState('')

  const validate = (value) => {

    if (validator.isStrongPassword(value, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
      setErrorMessage('\nIs Strong Password')
    } else {
      setErrorMessage('\nIs Not Strong Password')
    }
  }

return (

	
  <pre>
		   <center> <h1>Happy Go Lucky</h1></center>
       <Container><center>
  <Row md={4}>
    <Col>
    <div class="col"><span>Enter Email: </span><input type="text" id="userEmail"
		       onChange={(e) => validateEmail(e)}></input> 
		        <span style={{
		        fontWeight: 'bold',
		         color: 'red',
		        }}>{emailError}</span>
       </div>
       </Col>

    <Col xs={6 } >
      <div class="col"><span>Enter Password:{' '} </span><input type="text"
          onChange={(e) => validate(e.target.value)}></input> 
         <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{errorMessage}</span>
     
      </div>
      </Col>
    <Col><div>
         <button onclick="">   Login  </button>     
      </div>
       <div class="w-100"></div></Col>
  </Row></center>
</Container>


       {/* <div class="row">
       <div class="col"><span>Enter Email: </span><input type="text" id="userEmail"
		       onChange={(e) => validateEmail(e)}></input> 
		        <span style={{
		        fontWeight: 'bold',
		         color: 'red',
		        }}>{emailError}</span>
       </div>
      <div class="col"><span>Enter Password:{' '} </span><input type="text"
          onChange={(e) => validate(e.target.value)}></input> 
         <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{errorMessage}</span>
     
      </div>
      <div>
         <button onclick="">   Login  </button>     
      </div>
       <div class="w-100"></div>
      </div> */}
	    


      <div>
 <center>
<span><h2><br></br>Check out the following public events happening around you! <br /> <center>Login  to view more! &nbsp;
  <a href="#">Sign Up Here!</a></center></h2></span></center>
  </div>
    	</pre>
      
  );
}

export default App
