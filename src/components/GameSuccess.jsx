import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import { Fab } from "@material-ui/core";

import successStyles from "../../public/styles/success.module.css";

function GameSuccess(props) {
  const { container, btn, gameOver, playAgain } = successStyles;

  //4931518641491
  return (
    <Container className={container}>
      <Row>
        <Col>
          {}
          <p className={gameOver}>CONGURATULATIONS!</p>
          <p className={playAgain}>
            You have successfully answered all questions and collected{" "}
            {props.totalScore} points. You are a genious!
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <Fab
            className={btn}
            color="primary"
            aria-label="start game"
            onClick={() => {
              setTimeout(() => window.close(), 750);
            }}
          >
            END GAME
          </Fab>
        </Col>
      </Row>
    </Container>
  );
}

export default GameSuccess;
