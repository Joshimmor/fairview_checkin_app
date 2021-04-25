import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import logo from "../assests/loginlogo.png";
import "./UserFormStyles.css";
import PostToFireStore from "./PostToFireStore"

export class Confirm extends Component {
  
      continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  async componentDidMount(){
    const firebase = new PostToFireStore(this.props.values.firstName,
      this.props.values.lastName,
      this.props.values.department,
      this.props.values.mask,
      this.props.values.travel ,
      this.props.values.travelUS,
      this.props.values.fever,
      this.props.values.cough,
      this.props.values.shortBreath,
      this.props.values.cold,
      this.props.values.weakness,
      this.props.values.soreThroat,
      this.props.values.smell, 
      this.props.values.work,
      this.props.values.workCOVID,
      this.props.values.date);
   const postRequest = await firebase.postRequest();
  }
  render() {
  
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Confirm User Data" />
            <div className="logo-bar">
              <img className="Login-Logo" src={logo} alt="fairview"/>
            </div>
            <List>
              <ListItemText primary="First Name:" secondary={this.props.values.firstName}/>
              <ListItemText primary="Last Name:" secondary={this.props.values.lastName}/>
              <ListItemText primary="Department:" secondary={this.props.values.department}/>
              <ListItemText primary="Date:" secondary={this.props.values.date.toString()}/>
            </List>
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Confirm & Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;
