import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { personalProjects } from "../Assets/ProjectData";
import ProjectCard from "./ProjectCard";
import Header from "./Header";
import MailToUI from "../../node_modules/mailtoui/dist/mailtoui-min.js";

const renderCards = (data) => {
  const rows = [];
  for (const item of data) {
    rows.push(
      <Col key={item.name} className="my-2" xs={12} sm={6} md={6} lg={4}>
        <ProjectCard className="h-100" key={item.name} project={item} />
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
    <Container fluid className="p-5">
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
    </Container>
  );
};

export default Homepage;
