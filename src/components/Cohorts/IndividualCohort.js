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
          <h1>Cohort's {this.state.cohort.id} Information </h1>
           <div>
            <p  data-testid= "name" id="name">Cohort Name: {this.state.cohort.name}</p>
            <p data-testid= "startDate" id="startDate">Start Date: {this.state.cohort.startDate}</p>
            <p id="cohortSize">Cohort Size: {this.state.cohort.cohortSize}</p>
            <p id="leadCoach">Lead Coach: {this.state.cohort.leadCoach}</p>

           </div>
            <div>
              <h3> List of Students</h3>
              {this.state.cohort.Students.map( (student,index) => {
              return student.cohortId === this.state.cohort.id ?
              <div className="div_style" id="studentList">
              <a className="link"  id={student.id} href ={`/students/${student.id}`} >
                <p id="firstName"> First Name:{student.firstName} </p>
                <p id="lastName"> Last Name:{student.lastName} </p>
              </a>
              <a className="link" id={`${student.cohortId}reportLink`} href ={`/cohorts/${student.cohortId}/reports`} >
                <p > Go To Report </p>
              </a>
              </div>
              :
              <h5> End of Student List</h5>
              }
              )}
              
              
            </div>
        </div>
    )
}
}

export default GetIndividualCohort;
export {IndividualCohort}