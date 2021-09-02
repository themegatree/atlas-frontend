import React, { Component } from "react";
import { useParams } from "react-router-dom";


const GetIndividualCohort= () => {
  return (<IndividualCohort id={useParams().id}/>)
}
class IndividualCohort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cohort:{},
     };
  }
  
 async componentDidMount() {
      await fetch(`${process.env.REACT_APP_API_URL}/api/cohorts/${this.props.id}`)
      .then(res => res.json())
      .then(data => this.setState({cohort: data}))      
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
        </div>
    )
}
}

export default GetIndividualCohort;
export {IndividualCohort}
