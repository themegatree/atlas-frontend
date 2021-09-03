import React from "react";
import {useRouteMatch} from "react-router-dom";

const Cohort = (props) => {

  const date = () =>  props.cohort.startDate.substring(0,10)
    
  let { url } = useRouteMatch();

  return (
      <a data-testid="link" id="link" href = {`${url}/${props.cohort.id}/`} className="card">
        <div className="col-md" id= {props.cohort.id} >
          <p data-testid="name">Name: {props.cohort.name}</p>
          <p data-testid="date" >Start Date: {date()}</p>
        </div>
      </a>
          
  )
}

export default Cohort;
