import React, { Component } from "react";
import StudentList from "./StudentList.js";
import studentData from "./__mocks__/student-data.js";


class Students extends Component {
  constructor(props) {
    super(props)
    this.state = {
      students: []
    }
  }

  sortByLastNameDesc(students) {
    return students.sort((a,b) => (a.lastName > b.lastName) ? 1 : -1)
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_API_URL}/api/students`)
      .then(res => res.json())
      .then(data => this.setState({students: this.sortByLastNameDesc(data.students)}))
  }

  render() {
    return(      
      <div>
         <StudentList students={this.state.students} />
      </div>
    )}
}

export default Students