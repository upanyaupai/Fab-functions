//FF-29 UI that is throughout the project

import React from 'react';
import ReactBootstrap from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import Avatar from "@material-ui/core/Avatar"; 
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';



//style for vertical navigationbar
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      padding : 30,
      position: "absolute",
      left: 5,
      top: 5,
    },
    paper: {
      marginRight: theme.spacing(2),
    },
  }));
  
//function for vertical navigationbar
  function MenuListComposition() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
  
    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };
  
    const handleClose = (event) => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }
  
      setOpen(false);
    };
  
    function handleListKeyDown(event) {
      if (event.key === 'Tab') {
        event.preventDefault();
        setOpen(false);
      }
    }
  
    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
      if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
      }
  
      prevOpen.current = open;
    }, [open]);
  
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <MenuList>
       
            <MenuItem href="./Userdetails">My Profile</MenuItem>
            <MenuItem>My Events</MenuItem>
            <MenuItem>Explore Events</MenuItem>
            <MenuItem>Event History</MenuItem>
          </MenuList>
        </Paper>
    
      </div>
    );
  }
  
//function for the 'Happy Go Lucky'
function Header(){
    return(
        <div 
            style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
         <h1>Happy Go Lucky</h1>
        </div>
    )
}

//function for avatar and dropdow including logout
function ProfileAvatar(){
    return(
        <div style={{ display: "flex" ,
        position: "absolute",
        right: 5,
        top: 15,
        }}>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <Avatar
              style={{ border: "1px solid black", margin: 10 }}
            />
          </Dropdown.Toggle>
        <Dropdown.Menu>

          <Dropdown.Item href="./Homepage">Logout</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        </div>
    )
}
//function for add button for creating new events
function AddButton(){
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
  return(
  <div style={{ display: 'flex',
  position: "absolute",
  right: 100,
  bottom: 100,
  }}>
    <Button variant="primary" size="lg" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
    <AddCircleOutlineRoundedIcon size="large"/>
    </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>New Private Event</MenuItem>
        <MenuItem onClick={handleClose}>New Public Event</MenuItem>

      </Menu>
     
    </div>
  )
}


export {MenuListComposition,Header,ProfileAvatar,AddButton}; //exported to App.js
