// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Cat from './Cat'
import HelloClass from './HelloClass'
import Clock from './Clock'
import Click from './Click'
import EventBind from './EventBind'
import Greeting from './Greeting'
import LoginControl from './LoginControl'
import Mailbox from './MailBox'
import NameList from './NameList'

let i = 2;
// In-line CSS
let myCSS = {
  fontSize: 48,
  color: '#7c4ba0'
}
function App() {
  const messages = ['msg1', 'msg2', 'msg3'];
  return (
    <div className="App" >
      {/* Basic */}
      <p style={myCSS}>Hello React</p>
      <p data-myattribute="value1">Capybara is god</p>
      <div className="red">DuDu is dinosore</div>
      {/* How to write condotion */}
      <p>{i === 2 ? "i equal 2" : "i not equal 2"}</p>
      {/* Component, Props(send data/func among component), State(collect data) */}
      <Header />
      <Content />
      <Cat message="Yoda is the cutest boy in the world." />
      <Hello />
      <HelloClass msg="Hello world" />
      {/* State& LifeCycle */}
      <Clock />
      {/* Handling Event */}
      <Click />
      {/* Binding Event Handler */}
      <EventBind />
      {/* Conditional Rendering */}
      <Greeting isLoggedIn={false} />
      <LoginControl />
      <Mailbox unreadMessages={messages}/>
      {/* Lists& Keys */}
      <NameList />
    </div>
  );
}
function Header() {
  return (
    <div>
      <h1>This text is from the function Header.</h1>
    </div>
  )
}
function Content() {
  return (
    <div>
      <h1>This text is from the function Content.</h1>
    </div>
  )
}
class Hello extends React.Component {
  render() {
    return (
      <div>
        <p>This text is from the Hello class.</p>
      </div>
    )
  }
}
export default App;
