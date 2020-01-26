import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Fab } from "@material-ui/core";
import Lottie from "react-lottie";
import endStyles from "../../public/styles/end.module.css";
import animation from "../../lottie/heart.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animation: animation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

function GameOver(props) {
  const { container, btn, gameOver, playAgain } = endStyles;

  function handleRestart() {
    props.onRestart();
  }

  return (
    <Container className={container}>
      <Row>
        <Col>
          <p className={gameOver}>INCORRECT ANSWER!</p>
        </Col>
      </Row>

      <Row>
        <Col>
          <p className={playAgain}>GAME OVER</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Do you want to play again?</p>
        </Col>
      </Row>

      <Row>
        <Col lg={6} md={6} sm={12}>
          <Fab
            className={btn}
            aria-label="start game"
            onClick={() => {
              handleRestart();
            }}
          >
            YES
          </Fab>
        </Col>

        <Col lg={6} md={6} sm={12}>
          <Fab
            className={btn}
            aria-label="start game"
            onClick={() => {
              setTimeout(() => window.close(), 750);
            }}
          >
            NO
          </Fab>
        </Col>
      </Row>
      <div>
        <Lottie options={defaultOptions} height={100} width={100} />
      </div>
    </Container>
  );
}

export default GameOver;
