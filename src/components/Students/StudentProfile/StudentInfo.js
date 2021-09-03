import React, { Component} from "react"
import { useParams } from "react-router-dom";

const GetStudentInfo = () => {
    return (<StudentInfo id={useParams().id}/>)
}

class StudentInfo extends Component{

    constructor(props) {
        super(props)
        this.state = {
            studentData: {},
            showTextbox: false,
            response: ""
        }
      }

    componentDidMount(){
      fetch(`${process.env.REACT_APP_API_URL}/api/students/${this.props.id}`)
        .then(res => res.json())
        .then(apiData => {
          fetch(`https://api.github.com/users/${apiData.student.githubUsername}`)
            .then(res => res.json())
            .then(githubData => this.setState({
              studentData: apiData.student,
              avatar_Url: githubData.avatar_url
            }))
        })
    }

    mainPage = () => {
        return (
            <section>
                <p id='response'>{this.state.response}</p>
                <img alt="Github Profile Not Found" id="githubImage" src={this.state.avatar_Url}></img>
                <br></br>
                <p id="id">ID: {this.props.id}</p>
                <br></br>
                <p id="firstName">First Name: {this.state.studentData.firstName}</p>
                <button id="firstNameUpdate" onClick={() => {this.showTextbox("First Name", "firstName")}}>Change First Name</button>
                <br></br>
                <p id="lastName">Last Name: {this.state.studentData.lastName}</p>
                <button id="lastNameUpdate" onClick={() => {this.showTextbox("Last Name", "lastName")}}>Change Last Name</button>
                <br></br>
                <p id="github">Github Username: {this.state.studentData.githubUsername}</p>
                <button id="githubUsernameUpdate" onClick={() => {this.showTextbox("Github Username", "githubUsername")}}>Change GitHub Username</button>
                <br></br>
                <p id="email">Email: {this.state.studentData.email}</p>
                <button id="emailUpdate" onClick={() => {this.showTextbox("Email", "email")}}>Change Email</button>
            </section>

        )
    }


    submitField = async (e) => {
        e.preventDefault()
        this.setState({showTextbox: false})
        const data = {}
        data[this.state.columnName] = e.target.childNodes[1].value
        const opts = {
            method: 'PUT',
            body: data
        }
        await fetch(`${process.env.REACT_APP_API_URL}/api/students/${this.props.id}`, opts
        ).then(res => res.json())
        .then(data => {
            if (data.status === 'success'){
                this.setState({studentData: data.student, response: 'Data Updated Successfully'})
            }
            else{
                this.setState({response: data.errors})
            }
        })
        .catch()
    }

    textbox = () => {
        const currentValue = this.state.studentData[this.state.columnName]
        return(
            <section>
                <form onSubmit={this.submitField}>
                    <p>{this.state.displayName}: </p>
                    <input id="updateInput" placeholder={currentValue}></input>
                    <input type="submit" value="Update" id="update"></input>
                </form>
            </section>
        )
    }

    showTextbox = (displayName, columnName) => {
        this.setState({
            showTextbox: true,
            displayName: displayName,
            columnName: columnName
        });
    }



    render(){
        return (this.state.showTextbox) ? this.textbox() : this.mainPage()
    }
}

export default GetStudentInfo
export {StudentInfo}
