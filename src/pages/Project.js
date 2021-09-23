import React from "react";
import projects from "../utils/projects.json"
import Row from "../components/Row"
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Card, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image"




function Project() {
  return (
    <Row xs={5} md={5} className="g-6">
      {projects.map((project) => {
        return (
          <Card key={project.id} className="card bg-dark">
            
            <Image
              className= "w-50 rounded mx-auto d-block"
              variant = "card-img-top"
              src={project.image} 
              alt={project.name + " screenshot"}
            />
            <div className="text-center text-white">
            <Card.Body>
              <Card.Title className="card-title">
                
                  {project.name}
              
              </Card.Title>
              <h5 className="card-text">{project.description}</h5>
              <h6>Using {project.tech}</h6>
              <h6>
                <Button variant="dark text-light" href={project.repo} target="_blank" rel="noreferrer">
                  GitHub Repository
                </Button>
                <div></div>
                <div></div>
                <Button variant="dark text-light" href={project.link} target="_blank" rel="noreferrer">
                  Application Link (If applicable)
                </Button>
              </h6>
             </Card.Body>
            </div> 
          </Card>
        );
      })}
    </Row>
  );
}

export default Project;