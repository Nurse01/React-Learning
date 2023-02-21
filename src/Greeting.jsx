import React from "react";
// 1st way
// function UserGreeting(props) {
//   return <h1>Welcome back!</h1>;
// }
// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }
// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }

// 2rd way
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  let msg;
  if (isLoggedIn) {
    return msg = <h1>Welcome back!</h1>;
  }
  return msg = <h1>Please sign up.</h1>;
}
export default Greeting;