import React from 'react';

function PersonList(props) {
  let {person}=props
  return (
    <div>
        <h1>I am {person.name} and I am {person.age}old year my role in Kaise yeh yarrian is{person.skill}</h1>
    </div>
  )
}

export default PersonList;
