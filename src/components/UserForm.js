import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';
import FormQuestion from './FormQuestion';
import FormQuestionP2 from "./FormQuestionP2";
import FormQuestionP3 from "./FormQuestionP3";
import WorkDetails from "./WorkDetails";

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    department: '',
    mask: "",
    travel: "",
    travelUS:"",
    fever:"",
    cough:"",
    shortBreath:"",
    cold:"",
    weakness:"",
    soreThroat:"",
    smell:"",
    work:"",
    workCOVID:"",
    date: new Date()
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {
       firstName,
       lastName,
       department,
       mask,
       travel ,
       travelUS,
       fever,
       cough,
       shortBreath,
       cold,
       weakness,
       soreThroat,
       smell, 
       work,
       workCOVID,
       date} = this.state;
    const values = 
    {
      firstName,
      lastName,
      department,
      mask,
      travel ,
      travelUS,
      fever,
      cough,
      shortBreath,
      cold,
      weakness,
      soreThroat,
      smell,
      work,
      workCOVID,
      date};

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <FormQuestion
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );  
      case 4:
        return (
           <FormQuestionP2
             nextStep={this.nextStep}
             prevStep={this.prevStep}
            handleChange={this.handleChange}
             values={values}
          />
        );  
      case 5:
        return (
           <FormQuestionP3
             nextStep={this.nextStep}
             prevStep={this.prevStep}
            handleChange={this.handleChange}
             values={values}
          />
        );  
      case 6:
        return (
           <WorkDetails
             nextStep={this.nextStep}
             prevStep={this.prevStep}
            handleChange={this.handleChange}
             values={values}
          />
        );   
      case 7:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 8:
        return <Success />;
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default UserForm;
