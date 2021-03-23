import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { personalProjects, bootcampProjects } from "../Assets/ProjectData";
import ProjectCard from "./ProjectCard";
import Header from "./Header";
import MailToUI from "../../node_modules/mailtoui/dist/mailtoui-min.js";

const renderCard = (project) => {
  if (project) {
    return (
      <ProjectCard className="h-100" key={project.name} project={project} />
    );
  }
};

const renderCardRows = (data) => {
  const rows = [];
  var i;
  for (i = 0; i < data.length; i += 2) {
    rows.push(
      <Row className="my-3" key={data[i].name}>
        <Col>{renderCard(data[i])}</Col>
        <Col>{renderCard(data[i + 1])}</Col>
      </Row>
    );
  }
  return rows;
};

const Homepage = () => {
  useEffect(() => {
    MailToUI.run();
  }, []);

  return (
    <Container className="pt-5">
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <div className="cardGrid">
        <h4 className="mt-4 header">personal projects</h4>
        {renderCardRows(personalProjects)}
        <hr className="mt-5 mb-n2 hr" />
        <h4 className="mt-5 header">bootcamp projects</h4>
        {renderCardRows(bootcampProjects)}
      </div>
    </Container>
  );
};

export default Homepage;
