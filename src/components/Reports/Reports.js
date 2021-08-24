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
>>>>>>> 971aaff (handing over to ramiro)

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

    createPdf = () => {
        const doc = new jsPDF();
        console.log('createPdf button pressed!')

        doc.html(document.querySelector('#test5'), {
        callback: function (doc) {
            doc.save();
        },
        x: 10,
        y: 10
        });
    }

    // createPopup = () => {
    //     return (
    //         <Popup trigger={<button> Trigger</button>} position="right center">
    //             <div>Popup content here !!</div>
    //         </Popup>
    //     )
    // }

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
            <button onClick={this.createPdf} >Download PDF</button>
            {/* <iframe src={"test.js"+encodeURIComponent(content)}/> */}
                <div id='test5'>
                    <ReportHeader name={this.state.reports.cohortName} id={this.state.reports.cohortId} size={this.state.reports.cohortSize}/>
                    <Report name="gender" heading="Gender Distribution" data={this.state.reports.gender}/>
                    <Report name="background" heading="Background Data" data={this.state.reports.background}/>
                    <Report name="challenge" heading="Student Challenge Completion" data={this.state.reports.challenges}/>
                </div>
<<<<<<< HEAD
>>>>>>> 7ed9ead (first draft of download button working, needs improvement)
            </div>
            
=======
            </div> 
>>>>>>> 971aaff (handing over to ramiro)
        )
    }
}

export default Reports