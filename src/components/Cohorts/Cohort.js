import React from "react";
import App from '../../App.js'
import {
  Route,
  Link
} from 'react-router-dom';

const Cohort = (props) => {

  function date(){
    return props.cohort.startDate.substring(0,10)
  }

  return (
    <div>
      <div className="row">
        <div className="col-md" id= {props.cohort.id} >
      <p data-testid="name">Name: {props.cohort.name}</p>
      <p  data-testid="date" >Start Date: {date()}</p>
      <Link to="/insert/your/path/here" className="btn btn-secondary" role="button" data-testid="button">View details »</Link>
      </div>
    </div>
    <br/>
    <Route path="/cohorts/id" component={App} />  {/* Route to be replaced with Individual cohort page */}
    </div>
  )
}

export default Cohort

