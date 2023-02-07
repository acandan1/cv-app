import React from "react";
  
export default function DisplayApplication(props) {
  const { map } = props;

  return (
    <div id="display-application">
      <div className="display-personal-info">
        <h1> { map.get("full-name") } </h1>
        <h2> { map.get("title") } </h2>
        <h4> { map.get("phone") } </h4>
        <h4> { map.get("email") } </h4>
        <h4> { map.get("location") } </h4>
        <p> { map.get("description") } </p>
      </div>
      <div className="display-work-experience">
        <h2> { map.get("company") } </h2>
        <h3> { map.get("position") } </h3>
        <h5> { map.get("start-date") } </h5>
        <h5> { map.get("end-date") } </h5>
        <p> { map.get("job-description") } </p>
      </div>
      <div className="display-education">
        <h2> { map.get("major") } </h2>
        <h3> { map.get("university") } </h3>
        <h5> { map.get("start-date-u") } </h5>
        <h5> { map.get("end-date-u") } </h5>
        <p> { map.get("u-description") } </p>
      </div>
    </div>
  );
}