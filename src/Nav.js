import React, { useEffect, useState } from "react";
import "./Nav.css";
import logo from './movieflix.png'

function Nav() {
  return (
    <div className="nav">
      <img
        className="nav_logo"
        src={logo}
        alt="Netflix Logo"
      />

      <img
        className="nav_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
