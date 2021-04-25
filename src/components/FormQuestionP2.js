import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl'; 
import logo from "../assests/loginlogo.png";
import "./UserFormStyles.css";


export class FormQuestionP2 extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
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
            <AppBar title="Enter Personal Details" />
            <div className="logo-bar">
              <img className="Login-Logo" src={logo} alt="fairview"/>
            </div>
            <FormControl component="fieldset"  >
                <FormLabel component="legend">Are you coughing?</FormLabel>
                    <RadioGroup RadioGroup aria-label="cough" name="cough" value={values.cough} onClick={handleChange('cough')}>
                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="No" control={<Radio />} label="No" />
                    </RadioGroup>
            </FormControl>
           <br/>
            <FormControl component="fieldset"  >
                <FormLabel component="legend">Do you have shortness of breath?</FormLabel>
                    <RadioGroup RadioGroup aria-label="shortBreath" name="shortBreath" value={values.shortBreath} onClick={handleChange('shortBreath')}>
                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="No" control={<Radio />} label="No" />
                    </RadioGroup>
            </FormControl>
            <br/>
            <FormControl component="fieldset"  >
                <FormLabel component="legend">Are you experiencing colds?</FormLabel>
                    <RadioGroup RadioGroup aria-label="cold" name="cold" value={values.cold} onClick={handleChange('cold')}>
                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="No" control={<Radio />} label="No" />
                    </RadioGroup>
            </FormControl>
            <br/>
            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

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

export default FormQuestionP2;
