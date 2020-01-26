import React from "react";
import Timer from "./Timer";
import _ from "underscore"; //  unescape()  cozmek icin kullanilir (&#039;) ve kesme isareti gibi bu tur karakterler gibi 73, 83, 93 and 103 satirlarinda

import shuffleAnswerSet from "../shuffleAnswers"; // cevaplarin rasgele belirlemek icin kullanilir

import { Container, Row, Col } from "react-bootstrap";

import { Fab } from "@material-ui/core";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import questionStyles from "../../public/styles/question.module.css";
import timetime from "../../public/styles/question.module.css";

const indices = [0, 1, 2, 3]; // her cevap indeksinin ayarlanması. her soru icin 4 cevap var ve ceaplar dizi olarak question.js ye  toplanır,indeksleri de bu sekilde tanimlanir(tugba)
function Question(props) {
  const { container, col, question, btn, btnFirst, row } = questionStyles;

  const shuffledIndices = shuffleAnswerSet(indices);
  const renderTime = value => {
    if (value === 0) {
      return <div className="timer">Too late!</div>;
    } else if (value <= 3) {
      return <div className="timer">Time Is Running Out!</div>;
    } else {
      return (
        <div className="timer">
          <div className="text">Remaining</div>
          <div className="value">{value}</div>
          <div className="text">seconds</div>
        </div>
      );
    }
  };

  const answersSet = [
    props.correctAnswer,
    props.incorrectAnswerOne,
    props.incorrectAnswerTwo,
    props.incorrectAnswerThree
  ];

  const shuffledAnswersSet = shuffledIndices.map(item => {
    return answersSet[item];
  });

  function handleClick(obj) {
    props.onAnswer(obj);
  }

  return (
    <>
      <Container className={container}>
        <Row className={row}>
          <Col sm={6} className={col}>
            Question: {props.currentQuestion} / {props.numOfQuestions}
            <div>
              <CountdownCircleTimer
                className={timetime}
                isPlaying
                durationSeconds={15}
                colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
                renderTime={renderTime}
                onComplete={() => [true, 1000]}
              />
            </div>
          </Col>

          <Col sm={6} className={col}>
            Points: {props.score}
          </Col>
        </Row>

        <Row>
          <Col>
            <p className={question}>{_.unescape(props.question)}</p>
          </Col>
        </Row>

        <Row>
          <Col lg={12}>
            <Fab
              className={btnFirst}
              aria-label="answer"
              onClick={() => handleClick(shuffledAnswersSet[0])}
            >
              <p> {_.unescape(shuffledAnswersSet[0])} </p>
            </Fab>
          </Col>

          <Col lg={12}>
            <Fab
              className={btn}
              aria-label="answer"
              onClick={() => handleClick(shuffledAnswersSet[1])}
            >
              <p>{_.unescape(shuffledAnswersSet[1])} </p>
            </Fab>
          </Col>

          <Col lg={12}>
            <Fab
              className={btn}
              aria-label="answer"
              onClick={() => handleClick(shuffledAnswersSet[2])}
            >
              <p>{_.unescape(shuffledAnswersSet[2])} </p>
            </Fab>
          </Col>

          <Col lg={12}>
            <Fab
              className={btn}
              aria-label="answer"
              onClick={() => handleClick(shuffledAnswersSet[3])}
            >
              <p> {_.unescape(shuffledAnswersSet[3])} </p>
            </Fab>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Question;
