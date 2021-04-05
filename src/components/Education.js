import React from "react";
import Card from "./Card";
import { Fade, Stagger} from 'react-animation-components';

const RenderList = (props) => {
  return (
    <Card>
      <div className="row profile-padding">
        <div className="text-center col-12 col-lg-3">
          <h3>{props.institute}</h3>
          <span>{props.duration}</span>
        </div>
        <div className="offset-lg-1 col p-5 p-lg-0">
          <h4 className="text-lg-left text-center">{props.name}</h4>
          <div className="text-lg-left text-center">{props.board}</div>
          <div className="text-lg-left text-center">{props.score}</div>
        </div>
      </div>
    </Card>
  );
};

const education = (props) => {
  const edu = [
    {
      name: "Bachelor of Engineering (Computer)",
      duration: "2018-2022",
      institute: "Thadomal Shahani Engineering College",
      board: "University of Mumbai",
      score: "9.90 CGPA",
    },
    {
      name: "Higher Secondary Certification",
      duration: "2016-2018",
      institute: "PACE Junior Science College",
      board:
        "Maharashtra State Board of Secondary & Higher Secondary Education",
      score: "95.38%",
    },
    {
      name: "Secondary School Certification",
      duration: "2014-2016",
      institute: "Universal High School",
      board: "Council for the Indian School Certificate Examinations",
      score: "97%",
    },
  ];

  const educationRender = edu.map((ins) => {
    return (
      <Fade>
        <RenderList
          name={ins.name}
          institute={ins.institute}
          duration={ins.duration}
          board={ins.board}
          key={ins.name}
          score={ins.score}
        />
      </Fade>
    );
  });

  return (
    <div className="heading-white p-5 education">
      <div className="container">
        <h1 className="profile-padding">Education</h1>
        <h6 className="profile-padding">
          <i>"Learning never exhausts the mind"</i>
        </h6>
        <hr className="profile-padding"></hr>
        <Stagger in  delay={200}>
        {educationRender}
        </Stagger>
      </div>
    </div>
  );
};

export default education;
