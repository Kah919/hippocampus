import React, { Component } from "react";

class Nav extends Component {
  render() {
    return(
      <div className="nav_container">
      <span className="logo"> Hippocampus </span>
        <ul className="nav_ul">
          <li> Home </li>
          <li> +New </li>
          <li> Categories </li>
        </ul>
      </div>
    )
  }
}

export default Nav;
