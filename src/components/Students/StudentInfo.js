import React, { Component, useEffect } from "react"
import { useParams } from "react-router-dom";

const GetStudentInfo = (props) => {
    return (<StudentInfo id={useParams().id}/>)
}

class StudentInfo extends Component{

    constructor(props) {
        super(props)
        this.state = {
            id: props.id,
            studentData: {} 
        }
      }

    async componentDidMount(){
        fetch(`${process.env.REACT_APP_API_URL}/api/student:${this.state.id}`)
        .then(res => res.json())
        .then(data => this.setState({studentData: data}))
    }
    render(){
        return (
            <div>
                <img id = "githubImage" src={`https://github.com/${this.state.studentData.githubUsername}.png/`}></img>
                <br></br>
                <p id="id">ID: {this.state.id}</p>
                <br></br>
                <p id="firstName">First Name: {this.state.studentData.firstName}</p>
                <br></br>
                <p id="lastName">Last Name: {this.state.studentData.lastName}</p>
                <br></br>
                <p id="github">Github Username: {this.state.studentData.githubUsername}</p>
                <br></br>
                <p id="email">Email: {this.state.studentData.email}</p>
            </div>

        )
    }
}

export default GetStudentInfo
export {StudentInfo}