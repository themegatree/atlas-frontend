import React, { Component } from 'react';

import '../../assets/css/styles.css'
import './upload.css'

class Upload extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedFile   : null,
			assessmentType : 'selfAssessment',
			response       : { status: "", errors : [] },
			color          : '',
			invalid		   : ''
		};
	};

	setTheColor() {
		if (this.state.response.status === 'success') {
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
		else if (this.state.selectedFile.size /1000/1000 > 2){
			this.setState({invalid: 'The file you have chosen is above 2MB'})
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
				this.setState({ response: data.response });
				this.setTheColor();
			});
		}
		else{
			this.setState({invalid : 'You have not entered a .csv file'})
		}}
	};

	render() {
		return (
			<div id="card">
				<section className="page-section portfolio" id="portfolio">
					<div className="container">
						<h2 id="cohorts-list" className="page-section-heading text-center text-uppercase text-secondary mb-0">File Upload</h2>
						<div className="divider-custom">
							<div className="divider-custom-line"></div>
							<div className="divider-custom-icon"><i className="fas fa-star"></i></div>
							<div className="divider-custom-line"></div>
						</div>
					</div>

					<div className="form-control-sm">
										<input className="form-control" id="choose-file" type="file" accept=".csv" name="upload" onChange={this.onFileChange} />
				<button className="btn btn-uploadSubmit" id="upload" onClick={this.onFileUpload}>
					Upload
				</button>
					</div>

				<br />
				 <div id="errors">
                <p className="h4" id={`status`} style={{color:this.state.color}}>{this.state.response.status}</p>
                {this.state.response.errors.map((error, i) => <p className="h6" key={i} id={`error-${i+1}`} style={{color:this.state.color}}>{error}</p>)}
            </div>
				<p id="invalid" style={{color:"red"}}>{this.state.invalid}</p>
				</section>
			</div>
			
		);
	}
}

export default Upload;
