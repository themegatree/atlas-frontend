import React from "react";
import Cohort from "./Cohort.js"

const CohortList = (props) => {
  return (
    <div id="cohorts-list">
      {props.cohorts.map(cohort => <Cohort key={cohort.id} cohort={cohort} />)}
    </div>
  )
}

export default CohortList
