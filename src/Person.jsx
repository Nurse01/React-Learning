import React from "react";

function Person({person}) {
  return (
    <div>
      <h2>My name is {person.name}</h2> <p>I'm {person.age}</p> <p>I can {person.skill}</p>
    </div>
  )
}
export default Person;