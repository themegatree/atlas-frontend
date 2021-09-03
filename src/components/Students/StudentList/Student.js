import React from "react";
import { useRouteMatch } from "react-router-dom";
import "./Student.css";

const Student = (props) => {

  let {  url } = useRouteMatch();

  return (
    <div className="studentContainer">
       <a href={`${url}/${props.student.id}`}>
      <h4><b>Name: {props.student.lastName.toUpperCase()} {props.student.firstName}</b></h4>
      <p>Github Username: {props.student.githubUsername}</p>
      <p>Email: {props.student.email}</p>
      </a>
      {/* <li className="btn btn-secondary"><a href={`${url}/${props.student.id}`} id={`button-${props.index}`}>View Profile</a></li> */}
    </div>
  )
}

export default Student