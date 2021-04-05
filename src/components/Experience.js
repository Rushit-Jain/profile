import React from "react";
import Card from "./Card";
import { Fade, Stagger } from 'react-animation-components';

const RenderList = (props) => {
  const desc = props.description.split("\n").map((str) => (
    <span key={str}>
      {str}
      <br></br>
    </span>
  ));
  return (
    <Card>
      <div className="row profile-padding">
        <div className="col-12 col-lg-3">
          <h3>{props.companyName}</h3>
          <span>{props.duration}</span>
        </div>
        <div className="offset-lg-1 col p-5 p-lg-0">
          <h4 className="text-lg-left text-center">{props.position}</h4>
          <div className="text-lg-left text-center">{desc}</div>
        </div>
      </div>
    </Card>
  );
};

const experience = (props) => {
  const exp = [
    {
      companyName: "Achiwer LLP.",
      position: "Intern",
      duration: "AUG 2019 - NOV 2019",
      description:
        "- Worked as a virtual assistant \n- Interviewed students and provided assistance on programming techniques\n- Taught students basic programming in C, C++, Java and Python",
    },
    {
      companyName: "Illuminatus Technologies Pvt. Ltd.",
      position: "Intern",
      duration: "JUN 2019 - JUL 2019",
      description:
        "- Learnt the basic syntax of Python\n- Learnt about software like Asana, Slack, Adobe XD, Pencil and WordPress\n- Created chatbots using Dialogflow",
    },
  ];

  const experienceRender = exp.map((company) => {
    return (
      <Fade>
        <RenderList
          companyName={company.companyName}
          position={company.position}
          duration={company.duration}
          description={company.description}
          key={company.companyName}
        />
      </Fade>
    );
  });

  return (
    <div className="heading-white p-5 experience">
      <div className="container">
        <h1 className="profile-padding">Experience</h1>
        <h6 className="profile-padding">
          <i>
            "A mind that is stretched by a new experience can never go back to
            its old dimensions"
          </i>
        </h6>
        <hr className="profile-padding"></hr>
        <Stagger in  delay={200}>{experienceRender}</Stagger>
      </div>
    </div>
  );
};

export default experience;
