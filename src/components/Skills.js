import React from "react";
import Card from "./Card";
import {Fade, Stagger} from 'react-animation-components';

const RenderRows = (props) => {
  return (
    <Stagger in delay={200}>
      {Object.keys(props.skills).map((skill) => {
      return (
        <Fade>
        <Card>
          <div className="row profile-padding">
            <div className="col-12 col-lg-3">
              <h3>{skill}</h3>
            </div>
            <div className="text-lg-left p-5 p-lg-0 text-center offset-lg-1 col">
              <RenderList skillList={props.skills[skill]} />
            </div>
          </div>
        </Card>
        </Fade>
      );
    })}
    </Stagger>
  )
};

const RenderList = (props) => {
  return (
    <ul style={{ padding: "0" }}>
      {props.skillList.map((skill) => (
        <li className="skills-list" key={skill}>
          {skill}
        </li>
      ))}
    </ul>
  );
};

const skills = (props) => {
  const sk = {
    "Programming Languages": ["Java", "C", "C++", "Python"],
    "Web Development Technology": [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "PHP",
      "SQL",
    ],
    "Full Web Development Stacks": ["MEAN", "MERN", "XAMPP"],
    "Mobile Application Development Technology": [
      "Ionic",
      "Cordova",
      "NativeScript",
      "React Native",
    ],
    "Essential Miscellaneous Skills": [
      "Time Management",
      "Organizational Skills",
      "Public Speaking",
    ],
  };

  const skillsRender = (
    <div className="skills p-5 heading-white">
      <div className="container">
        <h1 className="profile-padding">Skills</h1>
        <h6 className="profile-padding">
          <i>"Skill is better than strength"</i>
        </h6>
        <hr></hr>
        {/* <Stagger in delay={200}> */}
        <RenderRows skills={sk} />
        {/* </Stagger> */}
      </div>
    </div>
  );

  return skillsRender;
};

export default skills;
