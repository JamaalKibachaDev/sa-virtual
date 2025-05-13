import { React, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


import { CiMenuBurger } from "react-icons/ci";

import Offcanvas from "react-bootstrap/Offcanvas";

import { ReactComponent as SAAVLogo } from "../assets/saav.svg";

import './css/NavBar.css'

const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="px-2 d-flex justify-content-between">
      <Navbar.Brand href="/">
                <SAAVLogo width="100" height="100" className="" />
              </Navbar.Brand>
        <CiMenuBurger onClick={handleShow} className="CiMenuBurger mx-3" />
        </Container>
       
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton/>
          <Offcanvas.Body>
            <Container>
    
                <Nav className="me-auto fs-3 text-muted">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/applyNow">Apply Now</Nav.Link>
                  <Nav.Link href="/staff">Staff</Nav.Link>
                  <Nav.Link href="/fleet">Fleet</Nav.Link>
                  <Nav.Link href="/hubs&dbs">Hub & Route Database</Nav.Link>
                  <Nav.Link href="/ranks">Ranks</Nav.Link>
                  <Nav.Link href="/crewCenter">Crew Center</Nav.Link>
                </Nav>
             
            </Container>
          </Offcanvas.Body>
        </Offcanvas>
      </Navbar>
    </>
  );
};

export default NavBar;
