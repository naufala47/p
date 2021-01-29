import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);


    }
    render() {
        console.log("Render" + this.props.linkStatus[2])
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src="https://i.pinimg.com/564x/52/90/0b/52900bab0f969d9d68207f6ad8510882.jpg" alt="" width="30" height="24" className="d-inline-block align-top" /> Bootstrap</a>
                        <ul className="nav justify-content-end">
                            <li className={`nav-item`} >
                                <a className={`nav-link ${this.props.linkStatus[0]}`} aria-current="page" href="#">Home</a>
                            </li>
                            <li className={`nav-item`} >
                                <a className={`nav-link ${this.props.linkStatus[1]}`} href="http://localhost:3000">Create Quiz</a>
                            </li>
                            <li className={`nav-item`} >
                                <Link className={`nav-link ${this.props.linkStatus[2]}`} to="/question">Attempt Quiz</Link>
                            </li>
                            <li className={`nav-item`} >
                                <Link className={`nav-link ${this.props.linkStatus[3]}`} to="/aboutus" >About Quiz</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;

