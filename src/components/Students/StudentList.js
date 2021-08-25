import React from "react";
import Student from "./Student.js"

const StudentList = (props) => {
  return (
    <div id="card">
      {props.students.map((student, index) => <Student key={student.id} student={student} index={index} />)}
    </div>
  )
}

export default StudentList