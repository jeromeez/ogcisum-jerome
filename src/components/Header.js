/*
 * Code that creates header component
 */

import React from "react";
import { Link } from "react-router-dom";
import "./styles/Header.css";

export default function Header() {
  return (
    <header className="navbar">
      <Link to="/" className="navbar-title">
        OgCiSum
      </Link>
      <p className="navbar-item">
        Create & Share Samples, Listen in Mobile App!
      </p>
    </header>
  );
}
