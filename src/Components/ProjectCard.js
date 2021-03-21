import React from "react";
import Card from "react-bootstrap/Card";

const ProjectCard = (props) => {
  return (
    <Card>
      <Card.Img
        style={{ backgroundColor: "pink" }}
        variant="top"
        src={props.project.image}
      />
      <Card.Body className="">
        <Card.Title>{props.project.name}</Card.Title>
        <Card.Text className="w-100">{props.project.notes}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
