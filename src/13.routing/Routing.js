import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Api from '../11.api-calls/Api';
import Student from '../11.api-calls/node-api/Student';
import UserApi from '../11.api-calls/UserApi';
import { About } from './About';
import { Contact } from './Contact';
import { ErrorPage } from './Error';
import { Home } from './Home';

function Routing() {
    return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand-sm bg-light">
                        <div className="container-fluid">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/">Home</Link>
                                </li> &nbsp;&nbsp;
                                <li className="nav-item">
                                    <Link to="/student">Student</Link>
                                </li> &nbsp;&nbsp;
                                <li className="nav-item">
                                    <Link to="/user">User</Link>
                                </li> &nbsp;&nbsp;                                
                                <li className="nav-item">
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <Routes>
                        <Route path="/" exact  element={<Home />} />
                        {/* <Route path="/about" element={<About />} /> */}
                        <Route path="/student" element={<Student />} />
                        <Route path="/user" element={<UserApi />} />
                        <Route path="/contact" element={<Api />} />
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
                </div>
            </Router>
    )
}

export default Routing
