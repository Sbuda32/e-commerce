import React, { useState } from 'react';
import { Link } from "react-router-dom";

function NavBar( props ) {

  const [value, setValue] = useState("")

  return (
    <nav className="navbar navbar-dark navBackground title" >
        <Link to="/"> <img className="companyLogo" src="Images/Images/images/tshirtshop.png" alt="T-shirt shop logo"/> </Link>
        <Link to="/" className="navbar-brand" > Products </Link>
        <form className="form-inline" >
          {/* {console.log(props.value)} */}
          <input type="search" placeholder="Search" className="form-control mr-sm-2" value={value} onChange={ (e) => {
            
             setValue(e.target.value);
             
            props.setInputValue(e.target.value) } } />
            {console.log(props.value)}
            
          <button className="btn btn-outline-success" > Search </button>
        </form>
    </nav>
  );
}

export default NavBar;
