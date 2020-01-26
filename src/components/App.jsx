import React, { useState } from "react";

import Logo from "./Logo";
import Question from "./Question";
import GameOver from "./GameOver";
import GameSuccess from "./GameSuccess";
import CheckCircle from "./CheckCircle";

import { Container, Row, Col } from "react-bootstrap";

import { Fab } from "@material-ui/core";
import ForwardIcon from "@material-ui/icons/Forward";
import Tooltip from "@material-ui/core/Tooltip";

import startBtnStyles from "../../public/styles/startBtn.module.css";
import appStyles from "../../public/styles/main.module.css";

function App(props) {
  const scoreIncrement = 200;

  const [isClicked, setIsClicked] = useState(false); // bu start game butonuna basilip basilmadigini kontrol eder
  const [isCorrect, setIsCorrect] = useState(false); //cevabin dogru olup olmadigini check eder
  const [isNext, setIsNext] = useState(false);
  const [auxiliaryCounter, setAuxiliaryCounter] = useState(0); // destek durum degiskeni ekranin gelmesi icin bir kez kullanilir
  const [questionCount, setQuestionCount] = useState(0);
  const [score, setScore] = useState(0);

  const allQuestions = props.allQuestions;

  const quest = allQuestions[questionCount].question;
  const corr_answer = allQuestions[questionCount].correct_answer;

  const [
    incorrect_answer_1,
    incorrect_answer_2,
    incorrect_answer_3
  ] = allQuestions[questionCount].incorrect_answers;

  const { container, btn } = startBtnStyles;
  const { nextBtn, correctAnswerContent } = appStyles;

  const startButton = (
    <>
      <Fab
        className={btn}
        color="primary"
        aria-label="start game"
        onClick={handleClick}
      >
        START GAME
      </Fab>
    </>
  );

  const nextButton = (
    <Container>
      <Row>
        <Col>
          <CheckCircle />
          <Container className={correctAnswerContent}>
            <p>
              {" "}
              You have <strong> {score + scoreIncrement} </strong> points.
            </p>
            <p> Please click on the arrow below to see the next question. </p>
          </Container>
        </Col>
      </Row>

      <Row>
        <Col>
          <Tooltip title="Next Question">
            <Fab
              className={nextBtn}
              aria-label="next question"
              onClick={getNextQuestion}
            >
              <ForwardIcon />
            </Fab>
          </Tooltip>
        </Col>
      </Row>
    </Container>
  );
  const question = (
    <Question
      question={quest}
      correctAnswer={corr_answer}
      incorrectAnswerOne={incorrect_answer_1}
      incorrectAnswerTwo={incorrect_answer_2}
      incorrectAnswerThree={incorrect_answer_3}
      onAnswer={getClickedAnswer}
      numOfQuestions={allQuestions.length}
      currentQuestion={questionCount + 1}
      score={score}
    />
  );

  const startScene = (
    <Container className={container}>
      <Row>
        <Col>{!isClicked ? startButton : question}</Col>
      </Row>
    </Container>
  );

  const gameActiveScene = isCorrect ? (
    nextButton
  ) : (
    <GameOver onRestart={restartGame} />
  );

  function handleClick() {
    setIsClicked(true);
  }

  function getClickedAnswer(ans) {
    setIsCorrect(ans === corr_answer);
    setAuxiliaryCounter(auxiliaryCounter + 1);
    setIsNext(false); //bir sonraki button durumu 0 olarak ayarlanir
  }

  function getNextQuestion() {
    setIsNext(true);
    if (questionCount < allQuestions.length - 1) {
      setQuestionCount(questionCount + 1);
    }

    setScore(score + scoreIncrement);
  }

  function restartGame() {
    //tüm degerler tekrar baslatilir
    setIsClicked(false);
    setIsCorrect(false);
    setIsNext(false);
    setQuestionCount(0);
    setAuxiliaryCounter(0);
    setScore(0);
  }

  return (
    <>
      <Logo />

      {auxiliaryCounter === 0 ? (
        startScene
      ) : !isNext ? (
        gameActiveScene
      ) : auxiliaryCounter < allQuestions.length ? (
        question
      ) : (
        <GameSuccess totalScore={score} />
      )}
    </>
  );
}

export default App;
