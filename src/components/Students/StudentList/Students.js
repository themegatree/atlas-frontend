import React, { Component } from "react";
import StudentList from "./StudentList.js";
import { sortByPropAsc } from "../../../utils/arrayObjects.js";

class Students extends Component {
  constructor(props) {
    super(props)
    this.state = {
      students: []
    }
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_API_URL}/api/students`)
      .then(res => res.json())
      .then(data => this.setState({students: sortByPropAsc(data.students, "lastName")}))
  }

  render() {
    return(      
      <div>
         <StudentList students={this.state.students} />
      </div>
    )}
}

export default Students