import React from "react";

class Click extends React.Component {
  clickHandler() {
    console.log("Clicked class Click");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
  
}
export default Click;