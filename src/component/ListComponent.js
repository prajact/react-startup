import React from 'react';
import Person from './Person';

function ListComponent() {
  let persons = [{
    id: 1,
    name: 'abc',
    ph: 1212121212
  }, {
    id: 2,
    name: 'abc1',
    ph: 1212121212
  }, {
    id: 3,
    name: 'abc2',
    ph: 1212121212
  }];

  let list = persons.map(person => <Person key= {person.id} person={person} />)

  return <div>{list}</div>
}
 
export default ListComponent;