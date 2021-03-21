import React, {useState} from "react";
import Card from "react-bootstrap/Card";

const ProjectCard = (props) => {
  const [active, setActive] = useState(false);

  const handleMouseOver = () => {
    setActive(true);
  }

  const handleMouseLeave = () => {
    setActive(false);
  }

  return (
    <Card className={active ? "activeCard" : "inactiveCard"} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
      <Card.Img
        style={{ backgroundColor: "pink" }}
        variant="top"
        src={props.project.image}
      />
      <Card.Body>
        <Card.Title>{props.project.name}</Card.Title>
        <Card.Text className="w-100">{props.project.notes}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ProjectCard;
