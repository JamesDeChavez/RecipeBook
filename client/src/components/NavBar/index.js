import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/NavBar.css'

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed ? 'collapse navbar-collapse'
      : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed'
      : 'navbar-toggler navbar-toggler-right';
    return (
      <nav className="navbar navbar-expand-lg navbar-dark header">
        <Link className="navbar-brand" to="/">Recipe Book</Link>
        <button
          onClick={this.toggleNavbar}
          className={`${classTwo}`}
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
        <div className={`${classOne}`}>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">My Recipes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">New Recipes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">About</Link>
            </li>
          </ul>
          <form className ="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search Recipes" aria-label="Search" />
            <button className="btn btn-outline-info my-2 my-sm-0" type="Submit">Search</button>
          </form>
        </div>
      </nav>
    );
  }
}
export default NavBar;
