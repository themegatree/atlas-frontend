import React, { Component } from "react";

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
                    <h1>Cohort {this.state.reports.cohortId} Report</h1>
                </div>
                <div>
                    <h2 id="cohortSize">Cohort Size: {this.state.reports.cohortSize}</h2>
                </div>
                <div id="genderInfo">
                    <h2>Gender Distribution</h2>
                        <div id="genderData">{this.state.reports.gender.map((gender) => 
                                <div>
                                    <h3 id={"gender" + gender.type}>{gender.type}: </h3>
                                    <p id={gender.type + "Percentage"}>Percentage: {gender.percentage}%</p>
                                    <p id={gender.type + "Number"}>Number: {gender.number}</p>
                                </div>
                            )
                        }   
                </div>
                <div id="backgroundInfo">
                    <h2>Background Data</h2>
                    <div id="backgroundData">{this.state.reports.background.map((background) => 
                                <div>
                                    <h3 id={"background" + background.type}>{background.type}: </h3>
                                    <p id={background.type + "Percentage"}>Percentage: {background.percentage}%</p>
                                    <p id={background.type + "Number"}>Number: {background.number}</p>
                                </div>
                            )
                        }   
                    </div>
                </div>
                <div id="challengeCompletion">
                    <h2>Student Challenge Completion</h2>
                    <div id="challengeData">{this.state.reports.challenges.map((challenge) => 
                                <div>
                                    <h3 id={"challenge" + challenge.type}>{challenge.type}: </h3>
                                    <p id={challenge.type + "Percentage"}>Percentage: {challenge.percentage}%</p>
                                </div>
                            )
                        }   
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Reports