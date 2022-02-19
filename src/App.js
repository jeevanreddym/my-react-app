import React, {Fragment} from 'react';
import {Route, Link, NavLink} from 'react-router-dom';

import './App.css';

import Home from "./container/Home/Home";
import Users from "./container/Users/Users";
import Blogs from "./container/Blogs/Blogs";
import OrdersUsingSagas from "./container/Orders/OrdersUsingSagas";
import AccountUsingRedux from "./container/Account/AccountUsingRedux";


class App extends React.Component {

    render() {
        return (
            <Fragment>
                <div className="App">
                    <header>
                        <nav>
                            <ul>
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/blogs-using-thunk">Blogs</NavLink></li>
                                <li><NavLink to="/Users">Users</NavLink></li>
                                <li><Link to="/account-using-redux">Account</Link></li>
                                <li><NavLink to={{
                                    pathname: '/orders-using-saga',
                                    hash: '#submit',
                                    search: '?quick-submit=true',
                                }}>Orders</NavLink></li>
                            </ul>
                        </nav>
                    </header>
                    <div>
                        <Route path="/" exact component={Home}/>
                        <Route path="/home" exact render={() => <h1>Home</h1>}/>
                        <Route path="/blogs-using-thunk" exact component={Blogs}/>
                        <Route path="/users" exact component={Users}/>
                        <Route path="/account-using-redux" exact component={AccountUsingRedux}/>
                        <Route path="/orders-using-saga" exact component={OrdersUsingSagas}/>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default App;
