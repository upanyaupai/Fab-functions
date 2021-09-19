// import logo from './logo.svg';
// import './App.css';
// import Tabs from 'react-bootstrap/Tabs'

// function PrivateEvent() {
//   return (
//     <div>
//         <h3>Create New Private Event</h3>
    
//      </div>
//   );
// }

// export default PrivateEvent;
import React from "react";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
 

const App = () => {
const [value, setValue] = React.useState(2);

return (
  <div><h3><center>Create  Private Event</center></h3>
 
	<div
      style={{
        marginLeft: "10%",
      }}

    > 
		<Paper >
		<Tabs
		value={value}
		textColor="primary"
		indicatorColor="primary"
		onChange={(event, newValue) => {
			setValue(newValue);
		}}
		>
		<Tab label="Basic" />
		<Tab label="Guests" disabled/>
		<Tab label="Image"  disabled/>
		<Tab label="Confirm" disabled/>
		</Tabs>
	
	</Paper>
  <Form>
      <FormGroup>
        <Label for="Event Name">Event Name</Label>
        <Input type="Event Name" name="Event Name" id="Event Name"  />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Category</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>EVENT 1</option>
          <option>EVENT 2</option>
          <option>EVENT 3</option>
          <option>EVENT 4</option>
          <option>EVENT 5</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="Date">Date</Label>
        <Input type="Date" name="Date" id="Date" />
      </FormGroup>
      <FormGroup>
        <Label for="Time">Time</Label>
        <Input type="Time" name="Time" id="Time" />
      </FormGroup>
      <FormGroup>
        <Label for="Venue">Venue</Label>
        <Input type="Venue" name="Venue" id="Venue"  />
      </FormGroup>
      <FormGroup>
        <Label for="Number">Number of Guests</Label>
        <Input type="Number" name="Number" id="Number"  min="0" max="100"/>
      </FormGroup>
      
           
      <Button>Save & Proceed</Button>
    </Form>
 


  </div>

	 </div>



    

)}

export default App;
