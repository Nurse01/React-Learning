import React from 'react';
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  // set Timer
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000);
  }
  // Clear Timer
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div>
        <h1>Clock</h1>
        <p>It is {this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}
export default Clock;