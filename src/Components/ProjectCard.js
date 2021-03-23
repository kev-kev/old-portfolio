import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ProjectCard = (props) => {
  const [active, setActive] = useState(false);

  const handleMouseOver = () => {
    setActive(true);
  };

  const handleMouseLeave = () => {
    setActive(false);
  };

  const renderButton = () => {
    return (
      <Button variant="warning" className="cardBtn" href={props.project.url} target="_blank">
        visit project
      </Button>
    );
  };

  return (
    <Card
      className={active ? "activeCard" : "inactiveCard "}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="cardImg"
        style={{
          backgroundImage: `url(${props.project.image})`,
        }}
      />
      {active && renderButton()}

      <Card.Body className="cardBody">
        <Card.Title>{props.project.name}</Card.Title>
        <Card.Text className="">{props.project.notes}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
