import React, { useState } from "react";
import Card from "react-bootstrap/Card";

const ProjectCard = (props) => {
  const [active, setActive] = useState(false);

  const handleMouseOver = () => {
    setActive(true);
  };

  const handleMouseLeave = () => {
    setActive(false);
  };

  const handleOnClick = () => {
    console.log(props.url)
  }

  return (
    <Card
      className={active ? "activeCard" : "inactiveCard"}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="cardImg"
        style={{
          backgroundImage: `url(${props.project.image})`,
        }}
      />
      <div className="overlay" onClick={handleOnClick}>visit project</div>
      <Card.Body className="cardBody">
        <Card.Title>{props.project.name}</Card.Title>
        <Card.Text className="">{props.project.notes}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
