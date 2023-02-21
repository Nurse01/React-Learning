import React from 'react';
class HelloClass extends React.Component {
  // State
  constructor(props) {
    super(props)
    // set default value
    this.state = {
      counter: 0
    }
    
  }
  handleClick() {
    this.setState(function (prevState) {
      return {
        counter: prevState.counter + 1
      }
    })
  }
  render() {
    return (
      // div can convert to <React.Fragment>
      <div>
        <p>This text is from the HelloClass file.</p>
        <p className='green'>{this.props.msg}</p>
        <button onClick={this.handleClick.bind(this)}>Click to increment</button>
        <p>counter : {this.state.counter}</p>
      </div>
    )
  }
}
export default HelloClass