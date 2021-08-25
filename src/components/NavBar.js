import Body from './Cohorts/BootstrapStyles/Body.js'
import Reports from './Reports/Reports.js'
import StudentInfo from './Students/StudentInfo.js';
import Upload from "./Upload/Upload.js"
import Dashboard from "./Dashboard/Dashboard.js";
import Students from "./Students/Students.js"

import '../assets/css/styles.css'

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


function NavBar() {
  return (
    <div >
      <Router>
        <div className='navbar navbar-expand-lg bg-secondary text-uppercase fixed-top' id='mainNav'>
        <div className='container'>
        <button className='navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded' type='button' data-bs-toggle='collapse' data-bs-target='#navbarResponsive' aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation'>
        Menu 
        <i className='fas fa-bars'></i>
                </button>
          <div className='collapse navbar-collapse' id='navbarResponsive'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item mx-0 mx-lg-1'>
              <Link className='nav-link py-3 px-0 px-lg-3 rounded' to='/cohorts'>Cohorts</Link>
            </li>
            <li className='nav-item mx-0 mx-lg-1'>
              <Link className='nav-link py-3 px-0 px-lg-3 rounded'  to='/students'>Students</Link>
            </li>
            <li className='nav-item mx-0 mx-lg-1'>
              <Link className='nav-link py-3 px-0 px-lg-3 rounded' to="/assessments/upload">Assessments Upload</Link>
            </li>
          </ul>
          </div>
          </div>
</div>

          <Switch>
            <Route path='/cohorts/:cohortId/reports'>
              <Reports />
            </Route>
            <Route path='/cohorts' component={Body}/>
            <Route path="/students">
              <Students />
            </Route>
            </Switch>
            <Switch>
              <Route exact path='/students/:id'>
                <StudentInfo />
              </Route>
            <Route path="/assessments/upload">
              <Upload />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
      </Router>

    </div>
  );
}

export default NavBar;
