import React, { Component} from "react"
import { useParams } from "react-router-dom";

const GetStudentInfo = (props) => {
    return (<StudentInfo id={useParams().id}/>)
}

class StudentInfo extends Component{

    constructor(props) {
        super(props)
        this.state = {
            studentData: {} 
        }
      }

    async componentDidMount(){
        await fetch(`${process.env.REACT_APP_API_URL}/api/students/${this.props.id}`)
        .then(res => res.json())
        .then(data => this.setState({studentData: data}))
        await fetch(`https://api.github.com/users/${this.state.studentData.githubUsername}`)
        .then(res => res.json())
        .then(data =>  this.setState({avatarUrl: data.avatarUrl}))
    }
    render(){
        return (
            <div>
                <img alt="Github Profile Not Found" id="githubImage" src={this.props.avatarUrl}></img>
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