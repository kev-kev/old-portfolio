import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ProjectData from "../Assets/ProjectData";

const renderCard = (project) => {
  if (project) {
    return (
      <Card className="h-100" key={project.name}>
        <Card.Img
          style={{ width: "7rem", height: "auto" }}
          variant="top"
          src={project.image}
        />
        <Card.Body className="">
          <Card.Title>{project.name}</Card.Title>
          <Card.Text className="w-100">{project.notes}</Card.Text>
        </Card.Body>
        {/* <Card.Footer>
            <Button variant="info" href={project.url}>
              Go somewhere
            </Button>
          </Card.Footer> */}
      </Card>
    );
  }
};

const renderCardRows = (data) => {
  const rows = [];
  var i;
  for (i = 0; i < data.length; i += 2) {
    rows.push(
      <Row className="h-100 my-3" key={data[i].name}>
        <Col>{renderCard(data[i])}</Col>
        <Col>{renderCard(data[i + 1])}</Col>
      </Row>
    );
  }
  return rows;
};

export class Homepage extends Component {
  render() {
    return (
      <div>
        <h3 style={{ textAlign: "center" }} className="font-weight-normal">
          kevin&#39;s portfolio
        </h3>
        <Container className="w-75 mt-5">
          {renderCardRows(ProjectData)}
        </Container>
      </div>
    );
  }
}

export default Homepage;
