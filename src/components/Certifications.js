import React, { useState } from "react";
import Card from "./Card";
import { Fade, Stagger } from "react-animation-components";
import { iconFilled, iconUnfilled } from "./Icons";

const RenderList = (props) => {
  const links = props.link.split(",");
  const temp = links.map((link) => {
    return { link: link, hover: false };
  });
  const [state, setState] = useState(temp);
  let certs = links.map((link, index) => {
    return (
      <a href={link} target="_blank">
        <div
          style={{ display: "inline-block" }}
          className="pt-5"
          onMouseLeave={() => {
            let temp = [...state];
            temp[index].hover = !temp[index].hover;
            setState(temp);
          }}
          onMouseEnter={() => {
            let temp = [...state];
            temp[index].hover = !temp[index].hover;
            setState(temp);
          }}
        >
          {state[index].hover ? iconFilled : iconUnfilled}
        </div>
      </a>
    );
  });
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
          {certs}
        </div>
      </div>
    </Card>
  );
};

const certifications = (props) => {
  const certs = [
    {
      name: "Oracle Certified Java Professional",
      institute: "Oracle Corporation",
      year: "2021",
      description: "Java SE 11,Examination 1Z0-819",
      link:
        "https://drive.google.com/file/d/15BPdpQ1hVJQfqax4m9Z8jqhx-NU8VbQ4/view?usp=sharing,https://www.credly.com/badges/2c4dea32-db43-427d-b74b-21b7f253e2c1/public_url,https://catalog-education.oracle.com/pls/certview/sharebadge?id=91F94664CF4876FD7AB5F04B4018E01A71019561B2B513D4E0251E2638AFC298",
    },
    {
      name: "Full Stack Web Development",
      institute:
        "Hong Kong University of Science & Technology (through Coursera)",
      year: "2020",
      description:
        "HTML,CSS,Bootstrap 4,Angular,Ionic,NativeScript,React,React Native,NodeJS,MongoDB",
      link:
        "https://www.coursera.org/account/accomplishments/specialization/EGQRFDLHZWNP,https://www.coursera.org/account/accomplishments/specialization/MCFU5SAAYCGZ",
    },
    {
      name: "Microsoft Technology Associate",
      institute: "Microsoft Corporation",
      year: "2020",
      description: "JavaScript Programming,Examination 98382",
      link:
        "https://drive.google.com/file/d/1riGnyenvaxe6Wda7sLVHqQpKR0ji_dkR/view?usp=sharing,https://www.credly.com/badges/a86d8f34-a98c-4af9-a269-f489ee678a5c/linked_in_profile",
    },
    {
      name: "Ethical Hacking",
      institute: "Internshala",
      year: "2019",
      description:
        "Ethical Hacking,SQL Injection,Cross-side Scripting (XSS),Basic Vulnerability Analysis,Penetration Testing,White Hat Testing",
      link:
        "https://drive.google.com/file/d/11vTwZGW4_kgCGPq4KCpJHwn2u5ihpdxG/view?usp=sharing",
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
                link={cert.link}
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
