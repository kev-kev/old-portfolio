import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { personalProjects, bootcampProjects } from "../Assets/ProjectData";
import ProjectCard from "./ProjectCard";
import Header from "./Header";
import MailToUI from "../../node_modules/mailtoui/dist/mailtoui-min.js";

const renderCards = (data) => {
  const rows = [];
  var i;
  for (i = 0; i < data.length; i++) {
    rows.push(
      <Col key={data[i].name} className="my-2" xs={12} sm={6} md={4}>
        <ProjectCard className="h-100" key={data[i].name} project={data[i]} />
      </Col>
    );
  }
  return rows;
};

const Homepage = () => {
  useEffect(() => {
    MailToUI.run();
  }, []);

  return (
    <Container fluid>
      <Row className="pl-3">
        <Header />
      </Row>
      <Row>
        <Container fluid>
          <Row className="pl-3">
            <h4 className="title">personal projects</h4>
          </Row>
          <Row>{renderCards(personalProjects)}</Row>
        </Container>
      </Row>
      <Row className="pt-4">
        <hr className="hr" />
      </Row>
      <Row>
        <Container fluid>
          <Row className="pl-3">
            <h4 className="title">bootcamp projects</h4>
          </Row>
          <Row>{renderCards(bootcampProjects)}</Row>
        </Container>
      </Row>
    </Container>
  );
};

export default Homepage;
