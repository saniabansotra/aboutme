import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/src/collapse.js";
import frontpic1 from "./front.png";

import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <h1> Navbar</h1>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Education
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About Me
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Projects
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <img
        src={frontpic1}
        class="frontpic"
        // width="50%"
        // height="50%"
        alt="Logo"
      />
      <div class="navtext">
        <h4>Hello.. My name is </h4>
        <h1 class="name">
          <b>Sania Bansotra</b>
        </h1>
        <h4>
          I am a <span class="name">Web Developer</span>
        </h4>
        <h6>To know more about me </h6>
        <button type="button" class="btn btn-secondary">
          Click here
        </button>
      </div>
    </>
  );
};
export default Navbar;
