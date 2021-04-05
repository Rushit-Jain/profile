import React from "react";
import { NavLink } from "react-router-dom";
import resume from "../Rushit Jain Resume.pdf";
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import HomeIcon from '@material-ui/icons/Home';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

const footer = (props) => {
  return (
    <div className="footer">
      <div className="row">
        <div className="col-lg-4 col-6">
          <NavLink
            className="footer-nav"
            activeClassName="active-footer-link"
            to="/profile"
          >
            Profile
          </NavLink>
          <br></br>
          <br></br>
          <NavLink
            className="footer-nav"
            activeClassName="active-footer-link"
            to="/experience"
          >
            Experience
          </NavLink>
          <br></br>
          <br></br>
          <NavLink
            className="footer-nav"
            activeClassName="active-footer-link"
            to="/education"
          >
            Education
          </NavLink>
          <br></br>
          <br></br>
          <NavLink
            className="footer-nav"
            activeClassName="active-footer-link"
            to="/skills"
          >
            Skills
          </NavLink>
          <br></br>
          <br></br>
          <NavLink
            className="footer-nav"
            activeClassName="active-footer-link"
            to="/certifications"
          >
            Certifications
          </NavLink>
          <br></br>
          <br></br>
          <NavLink
            className="footer-nav"
            activeClassName="active-footer-link"
            to="/projects"
          >
            Projects
          </NavLink>
          <br></br>
          <br></br>
          <NavLink
            className="footer-nav"
            style={{ margin: "5px" }}
            activeClassName="active-footer-link"
            to="/interests"
          >
            Interests&nbsp;&&nbsp;Activities
          </NavLink>
          <br></br>
          <br></br>
          <a target="__blank" className="footer-nav" href={resume}>
            View&nbsp;PDF
          </a>
        </div>
        <div className="heading-white col-lg-4 col-6">
            <h5>Get in Touch With Me</h5>
            <div style={{marginBottom: "10px", marginTop: "20px"}}><PhoneIcon style={{fontSize: "30pt"}} />+91-&nbsp;9969994007</div><br></br>
            <div style={{marginBottom: "10px"}}><EmailIcon style={{fontSize: "30pt"}} /> <a id="mail-link" href="mailto:rushit07@gmail.com?Subject=Enquiry">rushit07@gmail.com</a></div><br></br>
            <div style={{marginBottom: "10px"}}><HomeIcon style={{fontSize: "30pt"}} /> D-2801, Imperial Heights, Off BEST Colony, Goregaon-West, Mumbai-400104</div><br></br>
        </div>
        <div className="mt-5 col-lg-4 col-12">
            <a target="__blank" className="footer-link" href="http://www.linkedin.com/in/rushit-jain-2977661a0"><div style={{display: "inline-block", marginRight: "20px", marginBottom: "10px"}}><LinkedInIcon style={{fontSize: "30pt"}} /></div></a>
            <a className="footer-link" target="__blank" href="https://github.com/Rushit-Jain"><div style={{display: "inline-block", marginRight: "20px", marginBottom: "10px"}}><GitHubIcon style={{fontSize: "30pt"}} /></div></a>
            <a target="__blank" className="footer-link" href="https://www.instagram.com/rushit.jain/"><div style={{display: "inline-block", marginRight: "20px", marginBottom: "10px"}}><InstagramIcon style={{fontSize: "30pt"}} /></div></a>
            <a className="footer-link" target="__blank" href="https://www.facebook.com/rushit.jain007"><div className="mr-lg-5" style={{display: "inline-block",  marginBottom: "10px"}}><FacebookIcon style={{fontSize: "30pt"}} /></div></a>
        </div>
      </div>
    </div>
  );
};

export default footer;
