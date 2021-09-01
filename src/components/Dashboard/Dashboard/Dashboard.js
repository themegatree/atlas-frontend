import React, { Component } from "react";
import { Doughnut, Bar, Line } from "react-chartjs-2";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import DashboardElement from "../DashboardElement/DashboardElement"
import buildData from "./buildData";
import buildLineData from "../Charts/Line/buildLineData"
import doughnutChartOptions from "./doughnutChartOptions"
import barChartOptions from "./barChartOptions"
import lineChartOptions from "../Charts/Line/lineChartOptions"
import "./Dashboard.css"

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dashboard: {
                studentTotal: null,
                cohortsTotal: null,
                gender: [],
                background: [],
                challenges: [],
                fileUploads:[
                    {type: "Module Challenges"},
                    {type: "Self Assessment"}
                ]
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
                <div className="graphGrid">
                    <div className="graph"><Doughnut id="genderDoughnut" data={buildData(this.state.dashboard.gender, "number")} options={doughnutChartOptions("Gender Distribution")}/></div>
                    <div className="graph"><Doughnut id="backgroundDoughnut" data={buildData(this.state.dashboard.background, "number")} options={doughnutChartOptions("Background Distribution")}/></div>
                    <div className="graph"><Bar id="challengeBar" data={buildData(this.state.dashboard.challenges, "percentage")} options={barChartOptions("Challange Progress")}/></div>
                    <div className="graph"><Line id="fileUploadLine" data={buildLineData(this.state.dashboard.fileUploads)} options={lineChartOptions("Files Uploaded this Week")}/></div>
                </div>
                <DashboardElement name="gender" heading="Gender Distribution" data={this.state.dashboard.gender}/>
                <DashboardElement name="background" heading="Background Data" data={this.state.dashboard.background}/>
                <DashboardElement name="challenge" heading="Student Challenge Completion" data={this.state.dashboard.challenges}/>
            </div>
        )
    }
}

export default Dashboard