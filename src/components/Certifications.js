import React from "react";
import Card from "./Card";
import { Fade, Stagger } from 'react-animation-components';

const RenderList = (props) => {
  const desc = props.description.split(",").map((str) => (
    <span>
      {str}
      <br></br>
    </span>
  ));
  return (
    <Card>
      <div className="row profile-padding">
        <div className="col-12 col-lg-3">
          <h3>{props.institute}</h3>
          <span>{props.year}</span>
        </div>
        <div className="offset-lg-1 text-lg-left text-center p-5 p-lg-0 col">
          <h4>{props.name}</h4>
          <div>{desc}</div>
        </div>
      </div>
    </Card>
  );
};

const certifications = (props) => {
  const certs = [
    {
      name: "Full Stack Web Development",
      institute:
        "Hong Kong University of Science & Technology (through Coursera)",
      year: "2020",
      description:
        "HTML,CSS,Bootstrap 4,Angular,Ionic,NativeScript,React,React Native,NodeJS,MongoDB",
    },
    {
      name: "Microsoft Technology Associate",
      institute: "Microsoft Corporation",
      year: "2020",
      description: "JavaScript Programming,Examination-98382",
    },
    {
      name: "Ethical Hacking",
      institute: "Internshala",
      year: "2019",
      description:
        "Ethical Hacking,SQL Injection,Cross-side Scripting (XSS),Basic Vulnerability Analysis,Penetration Testing,White Hat Testing",
    },
  ];
  const certRender = (
    <div className="certifications p-5 heading-white">
      <div className="container">
        <h1 className="profile-padding">Certifications</h1>
        <hr className="profile-padding"></hr>
        <Stagger in delay={200}>
        {certs.map((cert) => (
          <Fade>
            <RenderList
              name={cert.name}
              institute={cert.institute}
              year={cert.year}
              description={cert.description}
            />
          </Fade>
        ))}
        </Stagger>
      </div>
    </div>
  );

  return certRender;
};

export default certifications;
