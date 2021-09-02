import React from "react";
import {useRouteMatch, Link, BrowserRouter as Router,} from "react-router-dom";

const Cohort = (props) => {

  const date = () =>  props.cohort.startDate.substring(0,10)
  

  let {  url } = useRouteMatch();

  return (
      <div className="row">
        <div className="col-md" id= {props.cohort.id} >
      <p data-testid="name">Name: {props.cohort.name}</p>
      <p  data-testid="date" >Start Date: {date()}</p>
      <Router>
          <li className="btn btn-secondary" data-testid="button">          
          <Link data-testid="link" id="link" to={`${url}/${props.cohort.id}`}>View details »</Link>
        </li>
      </Router>
      </div>
    </div> 
  )
}

export default Cohort;
