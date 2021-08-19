import React from "react";

const ReportHeader = (props) => {
    return(
        <div id={"report" + props.id}>
            <h1>{props.name} Report</h1>
            <h2 id="cohortSize">Cohort Size: {props.size}</h2>
        </div>
    )
}

export default ReportHeader