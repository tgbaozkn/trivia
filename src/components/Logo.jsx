import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import styles from "../../public/styles/header.module.css";

function Header() {
  const { container } = styles;

  return (
    <Container className={container}>
      <Row>
        <Col />
      </Row>
    </Container>
  );
}

export default Header;
