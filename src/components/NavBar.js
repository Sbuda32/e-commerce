import React from 'react';

function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-dark" >
        <a href="../App.js" className="navbar-brand"> Some-Brand-Word </a>
        <a href="../Products" className="navbar-brand" > Products </a>
        <form className="form-inline" >
          <input type="search" placeholder="Search" className="form-control mr-sm-2"  />
          <button className="btn btn-outline-success" > Search </button>
        </form>
    </nav>
  );
}

export default NavBar;
