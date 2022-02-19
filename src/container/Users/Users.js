import React, {Component, Fragment} from "react";
import {connect} from "react-redux";

import Persons from "../../component/Persons/Persons";
import * as Actions from "../../store/actions/actions";


class Users extends Component {

    state = {
        showPersons: true,
        counter: 0,
        persons: [],
        show: false,
    };

    componentDidMount() {
        this.props.loadUsers();
    }

    switchHandler = () => {
        const prevShow = this.state.show;
        this.setState({
            show: !prevShow
        });
    };

    personSelectHandler = (selectedPerson, personIndex) => {
        //console.log('Person selected: ' + event.target.value);
        console.log('Person selected!');
        alert('Person selected!' + selectedPerson + ' - ' + personIndex);
    };

    deletePersonHandler = (personIndex) => {
        //const updatedPersons = this.props.persons.slice();
        const updatedPersons = [...this.state.persons];
        updatedPersons.splice(personIndex, 1);
        this.setState({
            persons: updatedPersons
        });
    };

    nameChangeHandler = (event, personIndex) => {

        const updatedPerson = {
            ...this.state.persons[personIndex],
        };
        updatedPerson.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = updatedPerson;

        this.setState((prevState, props) => {
            return {
                persons: persons,
                changeCounter: prevState.changeCounter + 1,
            };
        });
    };

    render = () => {

        const btnStyle = {
            backgroundColor: 'green',
            color: 'white',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;
        if (this.state.show && this.props.persons && this.props.persons.length > 0) {
            persons = <Persons persons={this.props.persons}
                               selectPerson={(selectedPerson, i) => this.personSelectHandler(selectedPerson, i)}
                               deletePerson={(i) => this.deletePersonHandler(i)}
                               //personClicked={() => this.personSelectHandler()}
                               nameChangeHandler={(e, i) => this.nameChangeHandler(e, i)} />
            btnStyle.backgroundColor = 'red';
        }

        return (
            <Fragment>
                <div>
                    {persons}
                    <button style={btnStyle}
                            onClick={() => this.switchHandler()}>click</button>
                </div>
                <button onClick={() => this.props.incCounter()}>Increment</button>
                <button onClick={() => this.props.addCounter(10)}>Add</button>
                <div>{this.props.counter}</div>


                <div style={{paddingTop: 100}}>Programatically navigate to:</div>
                <nav>
                    <ul>
                        <li onClick={() => this.goToLink('/blogs-using-thunk')}>Blogs</li>
                        <li onClick={() => this.goToLink('/users')}>Users</li>
                        <li onClick={() => this.goToLink('/account-using-redux')}>Account</li>
                        <li onClick={() => this.goToLink('/orders-using-saga')}>Orders</li>
                    </ul>
                </nav>

            </Fragment>
        );
    }

}

const mapStateToProps = (state) => ({
    counter: state.usersRdcr.counter,
    persons: state.usersRdcr.persons,
});

const mapDispatchToProps = (dispatch) => ({
    incCounter: () => dispatch(Actions.incrementCounter()),
    addCounter: (num) => dispatch(Actions.addCounter(num)),
    loadUsers: () => dispatch(Actions.loadUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
