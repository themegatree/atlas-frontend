import React, { Component } from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import Report from './Report'
import ReportHeader from "./ReportHeader";
<<<<<<< HEAD
import buildData from "./buildData";
=======
import jsPDF from "jspdf";
<<<<<<< HEAD
>>>>>>> 7ed9ead (first draft of download button working, needs improvement)
=======
import Popup from 'reactjs-popup';
<<<<<<< HEAD
>>>>>>> 971aaff (handing over to ramiro)
=======
import "../../Css/index3.css"
>>>>>>> 4e2e6ca (Works now but can't get PDF to load in IFRAME)

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
        fetch(`${process.env.REACT_APP_API_URL}/api/cohorts/${this.props.id}/reports`)
      .then(res => res.json())
      .then(data => this.setState({reports: data.report}))
    }

    previewPdf = () => {
        const doc = new jsPDF();
       
        doc.html(document.querySelector('#test5'), {
        callback: function (doc) {
            doc.output('dataurlnewwindow')
        },
        x: 10,
        y: 10
        });
        
    }
    createPdf = () => {
        const doc = new jsPDF();
        doc.html(document.querySelector('#test5'), {
        callback: function (doc) {
            doc.save("Report.pdf")
        },
        x: 10,
        y: 10
        });
    }
    createPopUp = () => {
        return (
        <Popup trigger={<button>PDF</button>} position="bottom center">
            <div>
                <span>
                <button onClick = {this.previewPdf}>Preview PDF</button>
                <button onClick = {this.createPdf}>Create PDF</button>
                </span>
            </div>
        </Popup>

        )}

    render() {
        return(
<<<<<<< HEAD
            <div id='test2'>
                <ReportHeader name={this.state.reports.cohortName} id={this.state.reports.cohortId} size={this.state.reports.cohortSize}/>
                <Report name="gender" heading="Gender Distribution" data={this.state.reports.gender}/>
                <Doughnut id="genderDoughnut" data={buildData(this.state.reports.gender, "number")} />
                <Report name="background" heading="Background Data" data={this.state.reports.background}/>
                <Doughnut id="backgroundDoughnut" data={buildData(this.state.reports.background, "number")}/>
                <Report name="challenge" heading="Student Challenge Completion" data={this.state.reports.challenges}/>
                <Bar id="challengeBar" data={buildData(this.state.reports.challenges, "percentage")}/>
=======
            <div>
            
                
                <div id='test5'>
                    <ReportHeader name={this.state.reports.cohortName} id={this.state.reports.cohortId} size={this.state.reports.cohortSize}/>
                    <Report name="gender" heading="Gender Distribution" data={this.state.reports.gender}/>
                    <Report name="background" heading="Background Data" data={this.state.reports.background}/>
                    <Report name="challenge" heading="Student Challenge Completion" data={this.state.reports.challenges}/>
                   
                </div>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 7ed9ead (first draft of download button working, needs improvement)
            </div>
            
=======
=======
                <div >
                        {this.createPopUp()}
                    </div>
>>>>>>> 4e2e6ca (Works now but can't get PDF to load in IFRAME)
            </div> 
>>>>>>> 971aaff (handing over to ramiro)
        )
    }
}

export default Reports