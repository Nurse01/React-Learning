import React from "react";

class EventBind extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: "Hello"
    }
    this.clickHandler = this.clickHandler.bind(this)
  }
  // clickHandler() {
  //   this.setState({
  //     msg: "Goodbye"
  //   })
  // }
  clickHandler = () => {
    this.setState({
      msg: "Goodbye"
    })
  }
  render() {
    return (
      <div>
        <p>{this.state.msg}</p>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* <button onClick={()=>this.clickHandler()}>Click Another way</button> */}
        <button onClick={this.clickHandler}>Another fuxking Click</button>
      </div>
    )
  }

}
export default EventBind;