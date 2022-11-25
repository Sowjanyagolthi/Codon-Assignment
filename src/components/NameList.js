import React from 'react';
import PersonList from './PersonList';

function NameList(){    
    let persons=[
    {
            id: 1,
            name: "Manik",
            age: 24,
            skill: "Hero"
        },
        {
            id: 2,
            name: "Aliya",
            age: 23,
            skill: "Second Heroine"
        },
        {
            id: 3,
            name: "Druv",
            age: 24,
            skill: "Buddy"
        },
        {
            id: 4,
            name: "Cabir",
            age: 24,
            skill: "Hero Friend"
        }
        , {
            id: 5,
            name: "Mukthi",
            age: 23,
            skill: "Second Herione Friend"
        }

    ]

    let listoffeb5mem= persons.map(eachObj=><PersonList key={eachObj.id}  person={eachObj}/>)
    return(
        <div>
           {listoffeb5mem}
        </div>
    )
}

export default NameList;
