import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

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
      <Button
        variant="info"
        className="cardBtn"
        href={props.project.url}
        target="_blank"
      >
        Visit Project
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
        <Card.Title className="d-flex">
          {props.project.name}
          <small>
            {props.project.inProgress && (
              <Badge className="ml-2" variant="info" pill>
                In Progress
              </Badge>
            )}
          </small>
        </Card.Title>
        <Card.Text className="">{props.project.notes}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
