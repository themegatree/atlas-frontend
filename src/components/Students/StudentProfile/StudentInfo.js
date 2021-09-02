import React, { Component} from "react"
import { useParams } from "react-router-dom";

const GetStudentInfo = (props) => {
    return (<StudentInfo id={useParams().id}/>)
}

class StudentInfo extends Component{
    constructor(props) {
        super(props)
        this.state = {
            studentData: {
                ModuleChallenges: []
            }
        }
    }

    async componentDidMount(){
        await fetch(`${process.env.REACT_APP_API_URL}/api/students/${this.props.id}`)
        .then(res => res.json())
        .then(data => this.setState({studentData: data.student}, () => {
            console.log(this.state.studentData)
        }))
        await fetch(`https://api.github.com/users/${this.state.studentData.githubUsername}`)
        .then(res => res.json())
        .then(data =>  this.setState({avatar_Url: data.avatar_url}))
    }

    render(){
        return (
            <div id="studentInfoDiv">
                <img alt="Github Profile Not Found" id="githubImage" src={this.state.avatar_Url}></img>
                <p id="id"><b>ID:</b> {this.props.id}</p>
                <p id="firstName"><b>First Name:</b> {this.state.studentData.firstName}</p>
                <p id="lastName"><b>Last Name:</b> {this.state.studentData.lastName}</p>
                <p id="github"><b>Github Username:</b> {this.state.studentData.githubUsername}</p>
                <p id="email"><b>Email:</b> {this.state.studentData.email}</p>

                <h3 id="challengesHeading">Challenges</h3>

                <div className="grid-container">
                    <div className="grid-item">
                        <h5>Challenge</h5>
                    </div>
                    <div className="grid-item">
                        <h5>Language</h5>
                    </div>
                    <div className="grid-item">
                        <h5>Student Score</h5>
                    </div>
                    <div className="grid-item">
                        <h5>Coach Score</h5>
                    </div>
                    <div className="grid-item">
                        <h5>Due Date</h5>
                    </div>
                    <div className="grid-item">
                        <h5>Submission Date</h5>
                    </div>
                </div>

                {this.state.studentData.ModuleChallenges.map((challenge, index) => (
                    <div className="grid-container">
                        <div className="grid-item">
                            <p id={`challengeName-${index}`}>{challenge.challengeName}</p>
                        </div>
                        <div className="grid-item">
                            <p id={`language-${index}`}>{challenge.language}</p>
                        </div>
                        <div className="grid-item">
                            <p id={`studentScore-${index}`}>{challenge.studentScore}</p>
                        </div>
                        <div className="grid-item">
                            <p id={`coachScore-${index}`}>{challenge.coachScore}</p>
                        </div>
                        <div className="grid-item">
                            <p id={`dueDate-${index}`}>{challenge.dueDate.slice(0, 10)}</p>
                        </div>

                        <div className="grid-item">          
                            {challenge.submissionDate.length > 0 ? 
                                <p id={`submissionDate-${index}`}>{challenge.submissionDate.slice(0, 10)}</p> : 
                                <p id={`submissionDate-${index}`}>Not submitted</p>
                            }
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default GetStudentInfo
export {StudentInfo}