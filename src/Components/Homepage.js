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
      <div className="flip-card">
        <Card className="flip-card-inner" key={project.name}>
          <div className="flip-card-front">
            <Card.Img style={{width: "100px", height: "auto"}} variant="top" src={project.image} />
            <Card.Body>
              <Card.Title>{project.name}</Card.Title>
              <Card.Text className="text-truncate">{project.notes}</Card.Text>
            </Card.Body>
            {/* <Card.Footer>
              <Button variant="info" href={project.url}>
                Go somewhere
              </Button>
            </Card.Footer> */}
          </div>
          <div className="flip-card-back">
          <Card.Body>
              <Card.Text>jellooooooo</Card.Text>
            </Card.Body>
          </div>
       </Card>
      </div>
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
