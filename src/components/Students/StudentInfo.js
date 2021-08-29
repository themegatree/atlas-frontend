import React, { Component} from "react"
import { useParams } from "react-router-dom";

const GetStudentInfo = (props) => {
    return (<StudentInfo id={useParams().id}/>)
}

class StudentInfo extends Component{
    constructor(props) {
        super(props)
        this.state = {
            studentData: []
        }
      }

    async componentDidMount(){
        await fetch(`${process.env.REACT_APP_API_URL}/api/students/${this.props.id}`)
        .then(res => res.json())
        .then(data => this.setState({studentData: data.student, studentChallenges: data.studentChallenges}))
        await fetch(`https://api.github.com/users/${this.state.studentData.githubUsername}`)
        .then(res => res.json())
        .then(data =>  this.setState({avatar_Url: data.avatar_url}))
    }

    render(){
        return (
            <div>
                <br />
                <img alt="Github Profile Not Found" id="githubImage" src={this.state.avatar_Url}></img>
                <br />
                <p id="id"><b>ID:</b> {this.props.id}</p>
                <p id="firstName"><b>First Name:</b> {this.state.studentData.firstName}</p>
                <p id="lastName"><b>Last Name:</b> {this.state.studentData.lastName}</p>
                <p id="github"><b>Github Username:</b> {this.state.studentData.githubUsername}</p>
                <p id="email"><b>Email:</b> {this.state.studentData.email}</p>
                <h3>Challenges</h3>
                <table>
                    <tr>
                        <th>Challenge</th>
                        <th>Language</th>
                        <th>Student Score</th>
                        <th>Coach Score</th>
                        <th>Due Date</th>
                        <th>Submission Date</th>
                    </tr>
                        {!(this.state.studentData.length === 0) &&
                            this.state.studentData.ModuleChallenges.map((challenge, index) => (
                                <tr>
                                    <td>{challenge.challengeName}</td>
                                    <td>{challenge.language}</td>
                                    <td>{challenge.studentScore}</td>
                                    <td>{challenge.coachScore}</td>
                                    <td>{challenge.dueDate.slice(0, 10)}</td>
                                    {challenge.submissionDate.length > 0 ? 
                                        <td>{challenge.submissionDate.slice(0, 10)}</td> : <td>Not submitted</td>
                                    }
                                </tr>
                            ))
                        }
                </table>
                <br />
            </div>
        )
    }
}

export default GetStudentInfo
export {StudentInfo}