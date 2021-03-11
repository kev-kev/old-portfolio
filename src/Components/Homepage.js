import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ProjectData from "../Assets/ProjectData"

const renderCard = (project) => {
  if(project){
    return (
      <Card className="mt-3" style={{width: "30rem", height: "20rem"}} key={project.name} text="muted">
        <Card.Img style={{width: "100px", height: "auto"}} variant="top" src={project.image} />
        <Card.Body>
          <Card.Title>{project.name}</Card.Title>
          <Card.Text>{project.notes}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="info" href={project.url}>
            Go somewhere
          </Button>
        </Card.Footer>
      </Card>
    );
  }
};

const renderCardRows = (data) => {
  const rows = [];
  var i;
  for (i = 0; i < data.length; i += 2) {
    rows.push(
      <Row key={data[i].name}>
        <Col>
          {renderCard(data[i])}      
         </Col>
         <Col>   
          {renderCard(data[i + 1])}
        </Col>
      </Row>
    )
  }
  return rows
};

export class Homepage extends Component {
  render() {
    return (
      <Container fluid>
        {renderCardRows(ProjectData)}
      </Container>
    );
  }
}

export default Homepage;
