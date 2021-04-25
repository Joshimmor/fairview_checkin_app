import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import logo from "../assests/loginlogo.png";
import "./UserFormStyles.css";

export class FormUserDetails extends Component {
  continue = e => {
    if(this.props.values.firstName != "" && this.props.values.lastName != ""){
      e.preventDefault();
      this.props.nextStep();
    }else{
      e.preventDefault();
    }
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Enter User Details" />
            <div className="logo-bar">
              <img className="Login-Logo" src={logo} alt="fairview"/>
            </div>
            <TextField
              placeholder="Enter Your First Name"
              label="First Name"
              error={this.props.values.firstName=== ""}
              helperText={this.props.values.firstName === "" ? 'Please enter first name' : ' '}
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Last Name"
              label="Last Name"
              error={this.props.values.lastName === ""}
              helperText={this.props.values.lastName === "" ? 'Please enter last name' : ' '}
              onChange={handleChange('lastName')}
              defaultValue={values.lastName}
              margin="normal"
              fullWidth
            />
            <br />
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;
