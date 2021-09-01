import CohortsContainer from './Cohorts/CohortsContainer.js'
import Reports from './Reports/Reports/Reports'
import StudentInfo from './Students/StudentProfile/StudentInfo.js';
import Upload from "./Upload/Upload.js"
import Dashboard from "./Dashboard/Dashboard/Dashboard";
import Students from "./Students/StudentList/Students.js"

import '../assets/css/styles.css'

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


const NavBar = () => {
  return (
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
            <Route exact path='/cohorts' component={CohortsContainer}/>
            <Route exact path="/students">
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
            <Route exact path="/cohorts/:id">
            </Route>
          </Switch>
      </Router>
  );
}

export default NavBar;
