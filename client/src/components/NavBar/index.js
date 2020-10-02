import React from 'react';
import "./css/NavBar.css";

const NavBar = (props) => {

  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">RecipeBook</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active"><a className="nav-link" href="/">My Recipes</a></li>
          <li className="nav-item"><a className="nav-link" href="/">New Recipe</a></li>
          <li className="nav-item"><a className="nav-link" href="/">About</a></li>
        </ul>
        <form className ="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search Recipes" aria-label="Search" />
          <button className="btn btn-outline-info my-2 my-sm-0" type="Submit">Search</button>
        </form>
      </div>
    </nav>
  )
}

export default NavBar;
