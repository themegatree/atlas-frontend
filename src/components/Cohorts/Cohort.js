import React from "react";

const Cohort = (props) => {
  return (
    <div id= {props.cohort.id}>
      <p>Name: {props.cohort.name}</p>
      <p>Start Date: {props.cohort.startDate}</p>
    </div>
  )
}

export default Cohort
