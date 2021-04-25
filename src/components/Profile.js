import React, {useState }from "react";
import "../App.css";
import resume from "../Rushit Jain Resume.pdf";
import { acrobatFilled, acrobatUnfilled } from "./Icons";

const Profile = (props) => {
  const [acrobat,setAcrobat] = useState(false);
  return (
    <div className="profile p-5">
      <div className="container">
        <h1 className="heading-blue profile-padding">Profile</h1>
        <h4 className="profile-padding">ORACLE CERTIFIED JAVA PROFESSIONAL, MICROSOFT TECHNOLOGY ASSOCIATE AND STUDENT MENTOR AT TSEC</h4>
        <h6 className="profile-padding">
          <i>"A Web Development and Java Programming Enthusiast"</i>
        </h6>
        <hr className="profile-padding"></hr>
        <div className="row">
          <div className="col-12 p-5 p-lg-0 col-lg-4">
            <h2 className="heading-blue">About Me</h2>
            <p>
              I am an enthusiastic programmer who has been involved in web
              development and mobile application development since 2019. I have
              also been involved in Java programming and have an experience of 7
              years in programming with Java. I love code structuring and
              maintaining a clean code, thereby ensuring quality. I spend a lot
              of time in designing and enhancing the visual impact of the web
              pages I create. I like working in a team because 'two heads are
              better than one.'
            </p>
          </div>
          <div className="col-12 p-5 p-lg-0 col-lg-4">
            <img
              className="profile-image"
              alt="Rushit Jain"
              height="250px"
              src="assets/Rushit.jpg"
            ></img>
          </div>
          <div className="p-5 p-lg-0 col-12 col-lg-4">
            <h2 className="heading-blue">My Details</h2>
            <br></br>
            <div className="row">
              <div className="col-6">
                <b>Name: </b>
                <br></br>
                <br></br>
                <b>Age: </b>
                <br></br>
                <br></br>
                <b>Location: </b>
              </div>
              <div className="col-4">
                <span>Rushit G. Jain</span>
                <br></br>
                <br></br>
                <span>20 years</span>
                <br></br>
                <br></br>
                <span>Mumbai</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-4 offset-lg-8">
            <h2 className="heading-blue">My Objective</h2>
            <p>
              Looking for a challenging entry-level job as a web, mobile
              application and Java developer within an environment rife with
              opportunities to learn and materialize my technical skills for the
              growth of the organization.
            </p>
          </div>
        </div>
      </div>
      <a href={resume} target="_blank" onMouseEnter = {() => setAcrobat(true)} onMouseLeave = {() => setAcrobat(false)}>
      <button class="animated-button">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <div style={{display: "inline-block", marginRight: "20px", marginBottom: "10px", width: "50px", height: "50px", marginTop:"10px"}}>{acrobat ? acrobatFilled : acrobatUnfilled}</div>
  View PDF
</button>
      </a>
    </div>
  );
};

export default Profile;
