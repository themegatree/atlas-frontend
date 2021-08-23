import React, { Component } from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import Report from './Report'
import ReportHeader from "./ReportHeader";
import buildData from "./buildData";

class Reports extends Component {
    constructor(props) {
        super(props)
        this.state = {
            reports: {
                cohortId: null,
                cohortName: null,
                cohortSize: null,
                gender: [],
                background: [],
                challenges: []
            }
        }
    }

    componentDidMount() {
        fetch(`${process.env.REACT_APP_API_URL}/api/cohorts/${this.props.cohortId}/reports`)
      .then(res => res.json())
      .then(data => this.setState({reports: data.report}))
    }

    render() {
        return(
            <div>
                <ReportHeader name={this.state.reports.cohortName} id={this.state.reports.cohortId} size={this.state.reports.cohortSize}/>
                <Report name="gender" heading="Gender Distribution" data={this.state.reports.gender}/>
                <Doughnut data={buildData(this.state.reports.gender, "number")} />
                <Report name="background" heading="Background Data" data={this.state.reports.background}/>
                <Doughnut data={buildData(this.state.reports.background, "number")}/>
                <Report name="challenge" heading="Student Challenge Completion" data={this.state.reports.challenges}/>
                <Bar data={buildData(this.state.reports.challenges, "percentage")}/>
            </div>
        )
    }
}

export default Reports