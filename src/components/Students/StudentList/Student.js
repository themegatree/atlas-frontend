import React from "react";

const Student = (props) => {
  return (
    <div className="container">
      <h4><b>Name: {props.student.lastName.toUpperCase()} {props.student.firstName}</b></h4>
      <p>Github Username: {props.student.githubUsername}</p>
      <p>Email: {props.student.email}</p>
    </div>
  )
}

export default Student