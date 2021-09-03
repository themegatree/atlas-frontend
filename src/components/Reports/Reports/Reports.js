import React, { Component } from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import Report from '../Report/Report'
import ReportHeader from "../ReportHeader/ReportHeader";
import buildData from "./buildData";
import jsPDF from "jspdf";
import "./Reports.css"
import barChartOptions from "./barChartOptions"
import doughnutChartOptions from "./doughnutChartOptions"

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
        this.exitIframeListener()
        fetch(`${process.env.REACT_APP_API_URL}/api/cohorts/${this.props.cohortId}/reports`)
        .then(res => res.json())
        .then(data => this.setState({reports: data.report}))
    }

    exitIframeListener = () => {
        document.body.addEventListener('click', function(e) {
            if(document.querySelector("#reportIframe")) {
                document.querySelector("#reportIframe").remove();
            }
        })
    }
    createPdf = () => {
    const pdf = new jsPDF('p', 'pt', 'letter');
        pdf.html(document.querySelector("#content"), {
            callback: function (pdf) {
                const iframe = document.createElement('iframe');
                iframe.setAttribute('style', 'position:relative; height:500px; width:80%');
                iframe.setAttribute('id','reportIframe')
                iframe.src = pdf.output('datauristring');
                document.getElementById('iframe').appendChild(iframe);
            }
        }
    );
    }
    render() {
        return(
            <div>
                <div className='iframeContainer' id='iframe'></div>
                <div id='content'>
                    <ReportHeader name={this.state.reports.cohortName} id={this.state.reports.cohortId} size={this.state.reports.cohortSize}/>
                    <div className="graphGrid">
                        <div className="graph"><Doughnut id="genderDoughnut" data={buildData(this.state.reports.gender, "number")} options={doughnutChartOptions('Gender Distribution')}/></div>
                        <div className="graph"><Doughnut id="backgroundDoughnut" data={buildData(this.state.reports.background, "number")} options={doughnutChartOptions('Background Distribution')}/></div>
                        <div className="graph"><Bar id="challengeBar" data={buildData(this.state.reports.challenges, "percentage")} options={barChartOptions('Challenge Progress')}/></div>
                    </div>
                    <Report name="gender" heading="Gender Distribution" data={this.state.reports.gender}/>
                    <Report name="background" heading="Background Data" data={this.state.reports.background}/>
                    <Report name="challenge" heading="Student Challenge Completion" data={this.state.reports.challenges}/>
                </div>
                <button id="previewPDF" onClick={this.createPdf}>Download PDF</button>
            </div>
        )
    }
}

export default Reports
