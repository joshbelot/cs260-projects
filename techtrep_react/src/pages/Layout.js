import { Outlet, Link } from "react-router-dom";
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';




const Layout = () => {
  const [currentTab, setCurrentTab] = useState("first");

  const handleSelect = (eventKey) => {
    setCurrentTab(eventKey);
  };

  return (
    <>

      
        <nav className="navbar navbar-expand-lg bg-white shadow-lg top-bar">
            <div className="container menu-container">
                
                <div href="#" className="navbar-brand">
                    <div className = 'logo-container'><img className = 'logo' src={require("./images/tech-trep-academy.png")}></img></div>
                    <div className = 'main-title'>Idaho Parent Resources</div>
                </div>

                    <Nav variant="pills" onSelect={(key) => setCurrentTab(key)} activeKey={currentTab} onSelect={(key) => setCurrentTab(key)}>
                      <Nav.Item>
                        <Nav.Link href="/" eventKey = "first">
                          Home
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second" href="/calendar">
                          Calendar
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third"  href="/n-learning">
                          New Learning
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey= "fourth"  href="/glossary">
                          Glossary
                        </Nav.Link>
                      </Nav.Item>
                      
                      {/*<NavDropdown title="Dropdown" id="nav-dropdown">
                        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
                      </NavDropdown>*/}
                    </Nav>
                    
            </div>
        </nav>
      <Outlet />
    </>
  );
}


export default Layout;