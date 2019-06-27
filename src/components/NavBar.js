import React from 'react';
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-dark navBackground title" >
        {/* <a href="../App.js" className="navbar-brand">  </a> */}
        <Link to="/"> <img className="companyLogo" src="Images/Images/images/tshirtshop.png" alt="T-shirt shop logo"/> </Link>
        <a href="../" className="navbar-brand" > Products </a>
        <form className="form-inline" >
          <input type="search" placeholder="Search" className="form-control mr-sm-2"  />
          <button className="btn btn-outline-success" > Search </button>
        </form>
    </nav>
  );
}

export default NavBar;
