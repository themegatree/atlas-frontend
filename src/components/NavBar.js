import Body from './Cohorts/BootstrapStyles/Body.js'
import Reports from './Reports/Reports.js'
import '../assets/css/styles.css'

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


function App() {
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
          </ul>
          </div>
          </div>
</div>

          <Switch>
            <Route path='/cohorts/:cohortId/reports'>
              <Reports />
            </Route>
            <Route path='/cohorts' component={Body}/>
            <Route path='/students'>
              <p>replace me</p>
            </Route>

          </Switch>
      </Router>


    </div>
  );
}

export default App;


