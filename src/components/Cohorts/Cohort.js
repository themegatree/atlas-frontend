import React from "react";
import { Redirect } from "react-router-dom";

const Cohort = (props) => {

  function date(){
    return props.cohort.startDate.substring(0,10)
  }

  function changeScreen(){
    Redirect("/cohort/id")
  }

  return (
    <div>
      <div className="row">
        <div className="col-md" id= {props.cohort.id} >
      <p data-testid="name">Name: {props.cohort.name}</p>
      <p  data-testid="date" >Start Date: {date()}</p>
      <p><a className="btn btn-secondary" onClick={changeScreen} href="/cohort/id" role="button" data-testid="button">View details »</a></p>
      </div>
    </div>
          <br/>
    </div>
  )
}

export default Cohort

