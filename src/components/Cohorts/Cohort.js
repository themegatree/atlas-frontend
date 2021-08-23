import React from "react";


const Cohort = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-md" id= {props.cohort.id}>
 
      <p>Name: {props.cohort.name}</p>
      <p>Start Date: {props.cohort.startDate.substring(0,10)}</p>
      <p><a className="btn btn-secondary" href="/cohorts/:id" role="button">View details »</a></p>
      </div>
    </div>
          <br/>
    </div>
  )
}

export default Cohort

