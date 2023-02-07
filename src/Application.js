import React, { Component, useState } from "react";
import InputField from "./components/InputField";
import DisplayApplication from "./DisplayApplication";


class Application extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: new Map(),
    }


    this.handleChange = this.handleChange.bind(this);
  }


  
  handleChange(event) {
    const val = event.target.value;
    const id = event.target.id;
    this.props.changeMap(id, val);
  }


  render() {
    return (
      <div id="application">
        <div className="personal-details">
          <h1>Personal Details</h1>
          <InputField className="info" placeholder="Full Name" id="full-name" onChange = { this.handleChange }/>
          <InputField className="info" placeholder="Title" id="title" onChange = { this.handleChange }/>
          <InputField className="info" placeholder="Phone #" id="phone" onChange = { this.handleChange }/>
          <InputField className="info" placeholder="Email" id="email" onChange = { this.handleChange }/>
          <InputField className="info" placeholder="Location" id="location" onChange = { this.handleChange }/>
          <InputField className="info" placeholder="Description" id="description" onChange = { this.handleChange }/>
        </div>
        <div className="work-experience">
          <h1>Work Experience</h1>
          <InputField className="info" placeholder="Company Name" id="company" onChange = { this.handleChange }/>
          <InputField className="info" placeholder="Position" id="position" onChange = { this.handleChange }/>
          <InputField className="info" placeholder="Start Date" id="start-date" onChange = { this.handleChange }/>
          <InputField className="info" placeholder="End Date" id="end-date" onChange = { this.handleChange }/>
          <InputField className="info" placeholder="Job Description" id="job-description" onChange = { this.handleChange }/>
        </div>
        <div className="education">
          <h1>Education</h1>
          <InputField className="info" placeholder="Major" id="major" onChange = { this.handleChange }/>
          <InputField className="info" placeholder="University Name" id="university" onChange = { this.handleChange }/>
          <InputField className="info" placeholder="Start Date" id="start-date-u" onChange = { this.handleChange }/>
          <InputField className="info" placeholder="End Date" id="end-date-u" onChange = { this.handleChange }/>
          <InputField className="info" placeholder="Description" id="u-description" onChange = { this.handleChange }/>
        </div>
      </div>
    );
  }
  
}

export default Application;
