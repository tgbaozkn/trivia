import React, { setState } from "react";
import timeOut from "timeout";
import Question, { props } from "./Question";
class Timer extends React.Component {
  state = { time: 15, points: 0 };

  setTimer() {
    if (this.state.time >= 0) {
      this.setState({ time: this.state.time - 1 });
    }
    if (this.state.time === 0) {
      this.props.timeOut();
    }
  }

  timer() {
    this.interval = setInterval(() => this.setTimer(), 1000);
  }

  componentDidMount() {
    this.timer();
    this.props.stop();
  }

  componentDidUpdate() {
    if (this.props.reset) {
      this.props.getPoints(this.state.points);
      clearInterval(this.interval);

      this.setState({
        time: 15,
        points: this.state.points + this.state.time * 100,
        reset: 0
      });
      this.props.handleTimer();
    }

    if (this.props.startTimer) {
      this.timer();
      this.props.stop();
    }
  }

  render() {
    return (
      <div style={{}}>
        <span> {this.props.number}</span>
        <span>{this.state.points} Points</span>
        <span>{this.state.time}</span>
      </div>
    );
  }
}
export default Timer;
