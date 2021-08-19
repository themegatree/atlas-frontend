import React, { Component } from "react";
import Report from './Report'

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
                <div id="reportTitle">
                    <h1>{this.state.reports.cohortName} Report</h1>
                </div>
                <div>
                    <h2 id="cohortSize">Cohort Size: {this.state.reports.cohortSize}</h2>
                </div>
                <h2>Gender Distribution</h2>
               <Report name="gender" data={this.state.reports.gender}/>

               <h2>Background Data</h2>
               <Report name="background" data={this.state.reports.background}/>

               <h2>Student Challenge Completion</h2>
               <Report name="challenge" data={this.state.reports.challenges}/>
            </div>
        )
    }
}

export default Reports