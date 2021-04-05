import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import resume from "../Rushit Jain Resume.pdf";

const nav = () => {
  return (
    <Navbar className="navbar" expand="xl">
      <NavLink className="nav-brand" to="/profile">
        Rushit Jain
      </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink
            className="nav-link-style"
            activeClassName="active-link"
            to="/profile"
          >
            Profile
          </NavLink>
          <NavLink
            className="nav-link-style"
            activeClassName="active-link"
            to="/experience"
          >
            Experience
          </NavLink>
          <NavLink
            className="nav-link-style"
            activeClassName="active-link"
            to="/education"
          >
            Education
          </NavLink>
          <NavLink
            className="nav-link-style"
            activeClassName="active-link"
            to="/skills"
          >
            Skills
          </NavLink>
          <NavLink
            className="nav-link-style"
            activeClassName="active-link"
            to="/certifications"
          >
            Certifications
          </NavLink>
          <NavLink
            className="nav-link-style"
            activeClassName="active-link"
            to="/projects"
          >
            Projects
          </NavLink>
          <NavLink
            className="nav-link-style"
            activeClassName="active-link"
            to="/interests"
          >
            Interests&nbsp;&&nbsp;Activities
          </NavLink>
          <a target="__blank" className="nav-link-style" href={resume}>
            View&nbsp;PDF
          </a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default nav;
