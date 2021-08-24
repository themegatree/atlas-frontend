import './App.css';
import Cohorts from "./components/Cohorts/Cohorts.js"
import Reports from "./components/Reports/Reports.js"
import StudentInfo from './components/Students/StudentInfo.js';
import Upload from "./components/Upload/Upload.js"


import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/cohorts">Cohorts</Link>
            </li>
            <li>
              <Link to="/students">Students</Link>
            </li>
            <li>
              <Link to="/assessments/upload">Assessments Upload</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/cohorts/:cohortId/reports">
              <Reports />
            </Route>
            <Route path="/cohorts">
              <Cohorts />
            </Route>
            <Route exact path="/students">
              <p>replace me</p>
            </Route>
            </Switch>
            <Switch>
              <Route exact path='/students/:id'>
                <StudentInfo />
              </Route>
            <Route path="/assessments/upload">
              <Upload />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
