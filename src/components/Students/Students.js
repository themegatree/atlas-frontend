import React, { Component } from "react";
import StudentList from "./StudentList.js";

class Students extends Component {
  constructor(props) {
    super(props)
    this.state = {
      students: []
    }
  }

  sortBy(students, sortVariable, direction) {
    if (direction === "alphabetical"){return students.sort((a,b) => (a[sortVariable] > b[sortVariable]) ? 1 : -1)}
    else if (direction === "reverse"){return students.sort((a,b) => (a[sortVariable] < b[sortVariable]) ? 1 : -1)}
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_API_URL}/api/students`)
      .then(res => res.json())
      .then(data => this.setState({students: this.sortBy(data.students, "lastName", "alphabetical")}))
  }

  render() {
    return(      
      <div>
         <StudentList students={this.state.students} />
      </div>
    )}
}

export default Students