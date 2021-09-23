import React from "react";
import {  Row, Container, } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


function Homepage() {
  return (
    <div className="bg-white">
    <h1 className="text-center">About Me</h1>
    <Container>
    <Row> 
    <p>
    I am a Full Stack Web Developer have been learning and growing through coding for the past 6 months within UNCC Full Stack Bootcamp, I am a very fast and adaptive learner while also being able to work independently, and thriving in group settings as well.
    </p>
    <div className="text-center">
      <img alt= "headshot" src="ReactPortfolio/img/headshot-2.png"/>
    </div>
    </Row>
    </Container>
  </div>
);
}

export default Homepage;