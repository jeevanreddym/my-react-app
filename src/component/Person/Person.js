import React from 'react';
import PropTypes from "prop-types";

import classes from './Person.css';


const Person = (props) => {
    return (
        <div className="person" onClick={props.personClicked}>
            <h1>{props.person.name}</h1>
            <p>Your age: {props.person.age}</p>

            <input type="text"
                   onChange={props.nameChangeHandler}
                   value={props.person.name} />

            <p>{props.person.children}</p>

            <a onClick={() => props.selectPerson(props.person)}>select</a>
            <span> | </span>
            <a onClick={props.deletePerson}>delete</a>
        </div>
    );
};

Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
};

export default Person;