import React, { Component } from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardElement from "./DashboardElement"

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dashboard: {
                studentTotal: null,
                cohortsTotal: null,
                gender: [],
                background: [],
                challenges: []
            }
        }
    }

    componentDidMount() {
        fetch(`${process.env.REACT_APP_API_URL}/api/dashboard`)
      .then(res => res.json())
      .then(data => this.setState({dashboard: data.dashboard}))
    }

    render() {
        return(
            <div>
                <DashboardHeader studentTotal={this.state.dashboard.studentTotal} cohortsTotal={this.state.dashboard.cohortsTotal}/>
                <DashboardElement name="gender" heading="Gender Distribution" data={this.state.dashboard.gender}/>
                <DashboardElement name="background" heading="Background Data" data={this.state.dashboard.background}/>
                <DashboardElement name="challenge" heading="Student Challenge Completion" data={this.state.dashboard.challenges}/>
            </div>
        )
    }
}

export default Dashboard