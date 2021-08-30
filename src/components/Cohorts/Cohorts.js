import React, { Component } from "react";
import CohortList from "./CohortList.js"

class Cohorts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cohorts: []
    }
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_API_URL}/api/cohorts`)
      .then(res => res.json())
      .then(data => this.setState({cohorts: data.cohorts}))
  }

  render() {
    return(
      <div>
        <br />
        <CohortList cohorts={this.state.cohorts} />
      </div>
    )
  }
}

export default Cohorts