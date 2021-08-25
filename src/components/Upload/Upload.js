import React, { Component } from 'react';


class Upload extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedFile   : null,
			assessmentType : 'selfAssessment',
			errors         : [],
			color          : '',
			invalid		   : ''
		};
	};

	setTheColor() {
		if (this.state.errors[0] === 'Updated the database successfully.') {
			this.setState({color: 'green'});
		} else {
			this.setState({color: 'red'});
		}
	};

	onFileChange = event => {
		this.setState({ selectedFile: event.target.files[0] });
	};

	setAssessmentType = event => {
		this.setState({ assessmentType: event.target.value });
	};

	onFileUpload = () => {
		const formData = new FormData();
		if(this.state.selectedFile === null){
			this.setState({invalid: 'No file selected'})
		}
		else{
		let name = this.state.selectedFile.name
		let extension = name.split('.').pop()
		if(extension === 'csv'){
		formData.append('myFile', this.state.selectedFile, this.state.selectedFile.name);
		formData.append('assessmentType', this.state.assessmentType);

		fetch(`${process.env.REACT_APP_API_URL}/api/fileupload`, {
			method : 'POST',
			body   : formData
		})
			.then(response => response.json())
			.then(data => {
				this.setState({ errors: data.response});
				this.setTheColor();
			});
		}
		else{
			this.setState({invalid : 'You have not entered a .csv file'})
		}}
	};

	render() {
		return (
			<div>
				<input id="choose-file" type="file" accept=".csv" name="upload" onChange={this.onFileChange} />
				<label htmlFor="assessment-type">Assessment Type</label>
				<select
					value={this.state.assessmentType}
					name="assessmentType"
					id="assessmentType"
					onChange={this.setAssessmentType}
				>
					<option value="selfAssessment">Self Assessment</option>
					<option value="moduleChallenge">Module Challenge</option>
				</select>
				<button id="upload" onClick={this.onFileUpload}>
					Upload
				</button>
				<br />
				 <div id="errors">
                {this.state.errors.map((error, i) => <p key={i} id={`error-${i+1}`} style={{color:this.state.color}}>{error}</p>)}
            </div>
				<p id="invalid">{this.state.invalid}</p>
			</div>
		);
	}
}

export default Upload;
