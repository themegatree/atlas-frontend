import React from "react";

const DashboardHeader = (props) => {
    return(
        <div id={"dashboardHeader"}>
            <h1 id="dashboardTitle"> MSE Dashboard </h1>
            <h2 id="studentTotal">Student Total: {props.studentTotal}</h2>
            <h2 id="cohortTotal">Cohort Total: {props.cohortsTotal}</h2>
        </div>
    )
}

export default DashboardHeader