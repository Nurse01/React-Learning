import React from "react";
import Person from "./Person";

function NameList() {
  const persons = [{
    id: 1,
    name: 'Nurse',
    age: 22,
    skill: 'Suay'
  }, {
    id: 2,
    name: 'Yoda',
    age: 2,
    skill: 'Cute'
  }, {
    id: 3,
    name: 'DuDu',
    age: 1,
    skill: 'Dinosore'
  }];
  const personList = persons.map(person =>
    <Person key={person.id} person={person} />
   );
  return (
    <div>
      <p>{personList}</p>
    </div>
  )
}

export default NameList;