import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
function Links() {


  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/formCompany">form company</Link>
        </li>
        <li>
          <Link to="/formUser">form user</Link>
        </li>
      </ul>

    </Router>
  )
}

export default Links