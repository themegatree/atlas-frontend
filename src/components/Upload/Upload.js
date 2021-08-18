import React from "react";

class Upload extends React.Component {
    render() {
        return (
            <div>
                <form action="http://localhost:5000/api/fileupload" method="POST"encType="multipart/form-data" >
                    <input id="choose-file" type="file" accept=".csv" name="upload"/>
                    <label for="assessment-type">Assessment Type</label>
                    <select name="assessmentType" id="assessment-type">
                        <option value="selfAssessment">Self Assessment</option>
                        <option value="moduleChallenge">Module Challenge</option>
                    </select>
                    <button id="upload" type="submit">Upload</button>
                </form>
            </div>
        );
    }
}

export default Upload