import React, { Component } from 'react';
import Response from './Response';

class Upload extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedFile   : null,
			assessmentType : 'selfAssessment',
			errors         : [],
			color          : ''
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
		console.log(this.state.assessmentType);
		formData.append('myFile', this.state.selectedFile, this.state.selectedFile.name);
		formData.append('assessmentType', this.state.assessmentType);

		fetch('http://localhost:5000/api/fileupload', {
			method : 'POST',
			body   : formData
		})
			.then(response => response.json())
			.then(data => {
				console.log(data.response)
				this.setState({ errors: data.response});
				this.setTheColor();
			});
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
				<Response color={this.state.color} errors={this.state.errors} />
			</div>
		);
	}
}

export default Upload;