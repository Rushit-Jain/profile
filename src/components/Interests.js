import React from "react";
import Card from "./Card";
import {Fade, Stagger} from 'react-animation-components';

const RenderList = (props) => {
  const list = props.list.map((listItem) => (
    <span>
      - {listItem}
      <br></br>
    </span>
  ));
  return (
    <Card>
      <div className="row profile-padding">
        <div className="col-12 col-lg-3">
          <h3>{props.title}</h3>
        </div>
        <div className="offset-lg-1 col p-5 p-lg-0">
          <div className="text-lg-left text-center">{list}</div>
        </div>
      </div>
    </Card>
  );
};

const interests = (props) => {
  const activityList = [
    "Student mentor at TSEC, Bandra",
    "Been a participant in TSEC CodeStorm's hackathon and TSEC Codecell's Trident in 2019",
    "Attended a workshop on mobile application development using Cordova",
    "Involvement with an NGO working for people coping with depression",
  ];
  const interestList = [
    "Ardent competitive coder",
    "Pianist",
    "Calligraphy artist",
  ];

  return (
    <div className="heading-white p-5 interests">
      <div className="container">
        <h1 className="profile-padding">Interests & Activities</h1>
        <h6 className="profile-padding">
          <i>"When passion meets work, work becomes hobby"</i>
        </h6>
        <hr className="profile-padding"></hr>
        <Stagger in  delay={200}>
        <Fade><RenderList title="Interests" list={interestList} /></Fade>
        <Fade><RenderList title="Activities" list={activityList} /></Fade>
        </Stagger>
      </div>
    </div>
  );
};

export default interests;
