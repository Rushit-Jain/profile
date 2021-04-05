import React from "react";
import Card from "./Card";
import { Fade, Stagger } from 'react-animation-components';

const RenderList = (props) => {
  const list = props.projects.map((project) => {
    return (
      <Fade>
      <Card>
        <div className="row profile-padding">
          <div className="col-12 col-lg-3">
            <h3>{project.title}</h3>
            <span>{project.duration}</span>
          </div>
          <div className="offset-lg-1 col p-5 p-lg-0">
            <div
              className="text-lg-left text-center"
              dangerouslySetInnerHTML={{ __html: project.description }}
            ></div>
          </div>
        </div>
      </Card>
      </Fade>
    );
  });
  return <Stagger  delay={200} in>{list}</Stagger>;
};

const projects = (props) => {
  const projs = [
    {
      title: "Website for DJS Skylark",
      duration: "JUL 2020 - DEC 2020",
      description:
        '- Created the official website for DJS Skylark using ReactJS and Firebase<br> - Learnt to implement ReactJS for production projects and hosting using cPanel<br> - Hosted at <a target="__blank" class= "projects-links" href="http://www.djsskylark.com/">DJS Skylark</a> while the GitHub pages version of the project is <a target="__blank" class="projects-links" href="https://rushit-jain.github.io/skylark-project/#/home">here</a>',
    },
    {
      title: "Friendly Ballot",
      duration: "JUL 2020 - NOV 2020",
      description:
        '- Created a user-friendly voting system using PHP and MySQL<br> - Spent a sufficiently high amount of time on the UI and UX of the project<br> - The GitHub repository for the project is <a target="__blank" class="projects-links" href="https://github.com/Rushit-Jain/Friendly-Ballot">here</a> and it has been hosted <a target="__blank" class="projects-links" href="https://friendly-ballot.000webhostapp.com/index.php">here</a>',
    },
    {
      title: "Shortest Distance Between Cities",
      duration: "JAN 2020 - JUN 2020",
      description:
        '- Created a GUI application to compute the shortest distance among some cities<br> - It was created using Python and Tkinter interface<br> - Implemented using Floyd-Warshall algorithm<br> - The GitHub file for the project source is <a target="__blank" class="projects-links" href="https://github.com/Rushit-Jain/Projects/blob/master/Shortest%20Distance%20Between%20Cities.py">here</a>',
    },
    {
      title: "Percentage Calculator",
      duration: "NOV 2019 - DEC 2019",
      description:
        '- Created a mobile application to compute the percentage of the input numbers<br> - It was created using Cordova, hence works on iOS as well as Android<br> - The GitHub repository for the project source is <a target="__blank" class="projects-links" href="https://github.com/Rushit-Jain/Percentage-Calculator">here</a>',
    },
  ];
  return (
    <div className="heading-white p-5 experience">
      <div className="container">
        <h1 className="profile-padding">Projects</h1>
        <h6 className="profile-padding">
          <i>
            "A project is complete when it starts working for you, rather than
            you working for it"
          </i>
        </h6>
        <hr className="profile-padding"></hr>
        <RenderList projects={projs} />
      </div>
    </div>
  );
};

export default projects;
