import React, { Component, useEffect, useState } from "react";
import InputField from "./components/InputField";

export default function Application(props) {
  
  const handleChange = (event) => {
    const val = event.target.value;
    const id = event.target.id;
    props.changeMap(id, val);
  }

  return (
    <div id="application">
      <div className="personal-details">
        <h1>Personal Details</h1>
        <InputField className="info" placeholder="Full Name" id="full-name" onChange = { handleChange }/>
        <InputField className="info" placeholder="Title" id="title" onChange = { handleChange }/>
        <InputField className="info" placeholder="Phone #" id="phone" onChange = { handleChange }/>
        <InputField className="info" placeholder="Email" id="email" onChange = { handleChange }/>
        <InputField className="info" placeholder="Location" id="location" onChange = { handleChange }/>
        <InputField className="info" placeholder="Description" id="description" onChange = { handleChange }/>
      </div>
      <div className="work-experience">
        <h1>Work Experience</h1>
        <InputField className="info" placeholder="Company Name" id="company" onChange = { handleChange }/>
        <InputField className="info" placeholder="Position" id="position" onChange = { handleChange }/>
        <InputField className="info" placeholder="Start Date" id="start-date" onChange = { handleChange }/>
        <InputField className="info" placeholder="End Date" id="end-date" onChange = { handleChange }/>
        <InputField className="info" placeholder="Job Description" id="job-description" onChange = { handleChange }/>
      </div>
      <div className="education">
        <h1>Education</h1>
        <InputField className="info" placeholder="Major" id="major" onChange = { handleChange }/>
        <InputField className="info" placeholder="University Name" id="university" onChange = { handleChange }/>
        <InputField className="info" placeholder="Start Date" id="start-date-u" onChange = { handleChange }/>
        <InputField className="info" placeholder="End Date" id="end-date-u" onChange = { handleChange }/>
        <InputField className="info" placeholder="Description" id="u-description" onChange = { handleChange }/>
      </div>
    </div>
  );
}