import React, { Component } from "react";
import "./App.css";
import Profile from "./components/Profile";
import { TransitionGroup } from "react-transition-group";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Interests from "./components/Interests";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import { Redirect, Switch, Route, withRouter } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { Random, Fade } from "react-animation-components";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log(this.props);
    return (
      <div className="App">
        <Navigation />
        <TransitionGroup>
          <CSSTransition
            key={this.props.location.key}
            classNames="page"
            timeout={200}
          >
            <Switch>
              <Route path="/profile" exact component={Profile} />
              <Route path="/experience" exact component={Experience} />
              <Route path="/education" exact component={Education} />
              <Route path="/skills" exact component={Skills} />
              <Route path="/certifications" exact component={Certifications} />
              <Route path="/interests" exact component={Interests} />
              <Route path="/projects" exact component={Projects} />
              <Redirect to="/profile" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
