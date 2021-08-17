import React from "react";

class Upload extends React.Component {
    render() {
        return (
            <div>
                <form action="/api/fileupload" method="POST">
                    <input id="choose-file" type="file" accept=".csv" name="file"/>
                    <label for="assessment-type">Assessment Type</label>
                    <select name="assessment-type" id="assessment-type">
                        <option value="self-assessment">Self Assessment</option>
                        <option value="module-challenge">Module Challenge</option>
                    </select>
                    <button id="upload" type="submit">Upload</button>
                </form>
            </div>
        );
    }
}

export default Upload