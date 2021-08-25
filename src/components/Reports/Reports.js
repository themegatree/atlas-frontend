import React, { Component } from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import Report from './Report'
import ReportHeader from "./ReportHeader";
import buildData from "./buildData";
import jsPDF from "jspdf";

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
        document.body.addEventListener('click', function(e) { 
            if(document.querySelector("#reportIframe")) {
                document.querySelector("#reportIframe").remove();
            }
        })
        fetch(`${process.env.REACT_APP_API_URL}/api/cohorts/${this.props.cohortId}/reports`)
      .then(res => res.json())
      .then(data => this.setState({reports: data.report}))
    }
    createPdf = () => {
    const pdf = new jsPDF('p', 'pt', 'letter');
        pdf.html(document.querySelector("#test2"), {
            callback: function (pdf) {
                const iframe = document.createElement('iframe');
                iframe.setAttribute('style', 'position:absolute;top:10%;left:10%;height:80%; width:80%');
                iframe.setAttribute('id','reportIframe')
                document.body.appendChild(iframe);
                iframe.src = pdf.output('datauristring');
            }
        }
    );
    }
    render() {
        return(
            <div>
                <button onClick={this.createPdf}>PDF</button>
                <div id='test2'>
                    <ReportHeader name={this.state.reports.cohortName} id={this.state.reports.cohortId} size={this.state.reports.cohortSize}/>
                    <Report name="gender" heading="Gender Distribution" data={this.state.reports.gender}/>
                    <Doughnut id="genderDoughnut" data={buildData(this.state.reports.gender, "number")} />
                    <Report name="background" heading="Background Data" data={this.state.reports.background}/>
                    <Doughnut id="backgroundDoughnut" data={buildData(this.state.reports.background, "number")}/>
                    <Report name="challenge" heading="Student Challenge Completion" data={this.state.reports.challenges}/>
                    <Bar id="challengeBar" data={buildData(this.state.reports.challenges, "percentage")}/>
                </div>
            </div> 
        )
    }
}

export default Reports