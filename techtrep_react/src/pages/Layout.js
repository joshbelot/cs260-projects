import { Outlet, Link } from "react-router-dom";
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import techtrep from "../images/tech-trep-academy.png";


import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";

import { useNavigate } from "react-router-dom";

const Layout = ({ setIsAuth, isAuth }) => {
  let navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState("first");

  const handleSelect = (eventKey) => {
    setCurrentTab(eventKey);
  };
  
  

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/");
      //window.location.pathname = "/login";
    });
  };

  return (
    <>

      
        <nav className="navbar navbar-expand-lg bg-white shadow-lg top-bar">
            <div className="container menu-container">
                
                <div href="#" className="navbar-brand">
                    <div className = 'logo-container'><img className = 'logo' src={techtrep}></img></div>
                    <div className = 'main-title'>Idaho Parent Resources</div>
                </div>

                    <Nav variant="pills" onSelect={(key) => setCurrentTab(key)} activeKey={currentTab} onSelect={(key) => setCurrentTab(key)}>
                      
                      <Nav>
                          <Nav.Item>
                            <Nav.Link eventKey = "first">
                              <Link to="/">Home</Link>
                            </Nav.Link>
                          </Nav.Item>
                          
                          {console.log(isAuth)}
                  
                          {!isAuth ? (
                            <Nav.Item>
                              <Nav.Link eventKey = "second">
                                <Link to="/login">Login</Link>
                              </Nav.Link>
                            </Nav.Item>
                          ) : (
                            <>
                              <NavDropdown title="Resources" id="nav-dropdown" color = "#4c1cec">
                                <NavDropdown.Item eventKey="2.1">
                                  <Nav.Link>
                                    <Link to="/homeroom">Homeroom</Link>
                                  </Nav.Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="2.2">
                                  <Nav.Link>
                                    <Link to="/tutorials">Progress Report Tutorials</Link>
                                  </Nav.Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="2.3">
                                  <Nav.Link>
                                    <Link to="/infocenter">InfoCenter Help</Link>
                                  </Nav.Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="2.4">
                                  <Nav.Link>
                                    <Link to="/curriculum">Curriculum Ideas</Link>
                                  </Nav.Link>
                                </NavDropdown.Item>
                              </NavDropdown>
                              <Nav.Item>
                                <Nav.Link eventKey="third" >
                                   <Link to="/calendar">Calendar</Link>
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="fourth"  >
                                  <Link to="/n-learning"> New Learning </Link>
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey= "fifth" >
                                  <Link to="/glossary"> Glossary </Link>
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <button className = "logout" onClick={signUserOut}> Log Out</button>
                              </Nav.Item>
                            </>
                          )}
                      </Nav>
                    </Nav>
            </div>
        </nav>
      <Outlet />
    </>
  );
}


export default Layout;