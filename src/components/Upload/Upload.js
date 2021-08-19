import React, {Component} from "react";

class Upload extends Component {
   
    constructor(props){
        super(props)
        this.state = {
            selectedFile: null,
            assessmentType: 'selfAssessment',
            errors: []
        }
    }


    onFileChange = event => {
        this.setState({ selectedFile : event.target.files[0] });     
      };

    setAssessmentType = event => {
        this.setState({ assessmentType : event.target.value });
    }

    onFileUpload = () => {
        const formData = new FormData();
        console.log(this.state.assessmentType)
        formData.append(
          "myFile",
          this.state.selectedFile,
          this.state.selectedFile.name,
        );
        formData.append(
            "assessmentType",
            this.state.assessmentType
        )

        fetch("http://localhost:5000/api/fileupload",{
            method: "POST", 
            body: formData
        })
        .then(response => response.json())
        .then(data => this.setState({ errors: data}));
    }

    render() {
        return (
            <div>
                    <input id="choose-file" type="file" accept=".csv" name="upload" onChange={this.onFileChange}/>
                    <label htmlFor="assessment-type">Assessment Type</label>
                    <select value={this.state.assessmentType} name="assessmentType" id="assessmentType" onChange={this.setAssessmentType}>
                        <option value="selfAssessment">Self Assessment</option>
                        <option value="moduleChallenge">Module Challenge</option>
                    </select>
                    <button id="upload" onClick={this.onFileUpload}>Upload</button>
                    <br></br>
                    {this.state.errors.map(error => <p style={{color: "red"}}>{error}</p> )}
            </div>
        );
    }
}

export default Upload