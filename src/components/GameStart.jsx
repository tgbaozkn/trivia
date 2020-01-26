import React, { useState } from "react";
import Main from "./Main";

import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";

import { Container, Row, Col } from "react-bootstrap";
import Lottie from "react-lottie";
import * as startStyles from "../../public/styles/gameStart.module.css";
import animationData from "../../welcome.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

function GameStart() {
  const [options, setOptions] = useState({
    difficulty: "",
    numOfQuestions: "",
    category: ""
  });

  const { dropdownArea, dropdown, startText } = startStyles;

  const BootstrapInput = withStyles(theme => ({
    root: {
      "label + &": {
        marginTop: theme.spacing(3)
      }
    },
    input: {
      borderRadius: 14,
      position: "relative",
      backgroundColor: theme.palette.background.paper,
      border: "10px solid #ced4da",
      left: "-60px",
      fontSize: 16,
      padding: "1px 26px 10px 120px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),

      fontFamily: ["Arial", "sans-serif"].join(","),
      "&:focus": {
        borderRadius: 4,
        borderColor: "#80bdff",
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
        left: "-60px"
      }
    }
  }))(InputBase);

  const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(1)
    }
  }));

  const classes = useStyles();

  const gameOptions = (
    <>
      <Container>
        <Row>
          <Col />
        </Row>
        <Row>
          <Col md={4}>
            <div className={dropdownArea}>
              <p className={startText}>
                Level of <br /> Difficulty
              </p>
              <FormControl className={(classes.margin, dropdown)}>
                <InputLabel htmlFor="demo-customized-select-native">
                  DIFFICULTY
                </InputLabel>
                <NativeSelect
                  key="demo-customized-select-native"
                  id="demo-customized-select-native"
                  name="difficulty"
                  value={options.difficulty}
                  onChange={handleOptions}
                  input={<BootstrapInput />}
                >
                  <option value={""} />
                  <option value={"easy"}>Easy</option>
                  <option value={"medium"}>Medium</option>
                  <option value={"hard"}>Hard</option>
                </NativeSelect>
              </FormControl>
            </div>
          </Col>

          <Col md={4}>
            <div className={dropdownArea}>
              <p className={startText} style={{ color: "black" }}>
                Number of <br /> Questions
              </p>{" "}
              <FormControl className={(classes.margin, dropdown)}>
                <InputLabel htmlFor="demo-customized-select-native">
                  number of question
                </InputLabel>
                <NativeSelect
                  key="demo-customized-select-native"
                  id="demo-customized-select-native"
                  name="numOfQuestions"
                  value={options.numOfQuestions}
                  onChange={handleOptions}
                  input={<BootstrapInput />}
                >
                  <option value={""} />
                  <option value={"10"}>10</option>
                  <option value={"11"}>11</option>
                  <option value={"12"}>12</option>
                  <option value={"13"}>13</option>
                  <option value={"14"}>14</option>
                  <option value={"15"}>15</option>
                </NativeSelect>
              </FormControl>
            </div>
          </Col>

          <Col md={4}>
            <div className={dropdownArea}>
              <p className={startText}>
                <span>Select </span> <br />
                <span>Category</span>
              </p>
              <FormControl className={(classes.margin, dropdown)}>
                <InputLabel htmlFor="demo-customized-select-native">
                  Categories
                </InputLabel>
                <NativeSelect
                  key="demo-customized-select-native"
                  id="demo-customized-select-native"
                  name="category"
                  value={options.category}
                  onChange={handleOptions}
                  input={<BootstrapInput />}
                >
                  <option value={""} />
                  <option value={"9"}>General Knowledge</option>
                  <option value={"10"}>Entertainment: Books</option>
                  <option value={"17"}>Science & Nature </option>
                  <option value={"18"}>Science: Computers</option>
                  <option value={"25"}>Art</option>
                  <option value={"28"}>Vehicles</option>
                  <option value={"23"}>History</option>
                </NativeSelect>
              </FormControl>
            </div>
          </Col>
        </Row>
        <Col />
        <h2>Welcome To Trivia Quiz Game ! </h2> <br />
        <h4 cllassName="text" style={{ color: "red" }}>
          Are You Ready?{" "}
        </h4>
        <Lottie options={defaultOptions} height={500} width={500} />
      </Container>
    </>
  );

  function handleOptions(event) {
    const { name, value } = event.target;

    setOptions(prevOptions => {
      return {
        ...prevOptions,
        [name]: value
      };
    });
  }

  return options.difficulty === "" ||
    options.numOfQuestions === "" ||
    options.category === "" ? (
    gameOptions
  ) : (
    <Main gameOpts={options} />
  );
}

export default GameStart;
