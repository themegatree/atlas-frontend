import React, { Component } from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import DashboardHeader from "./DashboardHeader";
import DashboardElement from "./DashboardElement"
import buildData from "./buildData";

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
                <Doughnut id="genderDoughnut" data={buildData(this.state.dashboard.gender, "number")} />
                <DashboardElement name="gender" heading="Gender Distribution" data={this.state.dashboard.gender}/>
                <Doughnut id="backgroundDoughnut" data={buildData(this.state.dashboard.background, "number")}/>
                <DashboardElement name="background" heading="Background Data" data={this.state.dashboard.background}/>
                <DashboardElement name="challenge" heading="Student Challenge Completion" data={this.state.dashboard.challenges}/>
                <Bar id="challengeBar" data={buildData(this.state.dashboard.challenges, "percentage")}/>
            </div>
        )
    }
}

export default Dashboard