import React from 'react';
import Person from "../Person/Person";



const persons = (props) => {
    return (
        <div>
            {props.persons.map((person, i) => {
                return <Person key={i} person={person}
                   selectPerson={(selectedPerson) => props.selectPerson(selectedPerson, i)}
                   deletePerson={() => props.deletePerson(i)}
                   personClicked={props.personClicked}
                   nameChangeHandler={(e) => props.nameChangeHandler(e, i)} />
            })}
        </div>
    );
};
export default persons;