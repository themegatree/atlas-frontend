import React, { Component } from "react";
import { useParams } from "react-router-dom";


const GetIndividualCohort= (props) => {
  return (<IndividualCohort id={useParams().id}/>)
}
class IndividualCohort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cohort:{Students:[]},
     };
  }

 async componentDidMount() {
      await fetch(`${process.env.REACT_APP_API_URL}/api/cohorts/${this.props.id}`)
      .then(res => res.json())
      .then(data => this.setState({cohort: data.cohort}))      
  }

 render(){
      return (
        <div>
            <p id="name">Cohort Name: {this.state.cohort.name}</p>
            <br></br>
            <p id="startDate">Start Date: {this.state.cohort.startDate}</p>
            <br></br>
            <p id="cohortSize">Cohort Size: {this.state.cohort.cohortSize}</p>
            <br></br>
            <p id="leadCoach">Lead Coach: {this.state.cohort.leadCoach}</p>

            <div>
              <h3> List of Students</h3>
              {this.state.cohort.Students.map( (student,index) => 
              <div>
                <p id="firstName"> First Name:{student.firstName} </p>
                <p id="lastName"> Last Name:{student.lastName} </p>,
              </div>
              )}
              
              
            </div>
        </div>
    )
}
}

export default GetIndividualCohort;
export {IndividualCohort}