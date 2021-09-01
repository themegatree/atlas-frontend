import React from "react";
import {useRouteMatch, Link, BrowserRouter as Router,} from "react-router-dom";

const Cohort = (props) => {

  const date = () =>  props.cohort.startDate.substring(0,10)
  

  let {  url } = useRouteMatch();

  return (
       <a href = {`${url}/${props.cohort.id}`} className="card">
       <div className="col-md" id= {props.cohort.id} >
      <p data-testid="name">Name: {props.cohort.name}</p>
      <p  data-testid="date" >Start Date: {date()}</p>
   

      {/* <Router>
     <li className="link" data-testid="link">
       <Link data-testid="link" id="link" to={`${url}/${props.cohort.id}`}>View details »</Link>
      </li>
      </Router> */}
      </div>
       </a>
          
  )
}

export default Cohort;
