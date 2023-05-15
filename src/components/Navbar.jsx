import React from "react";
import { Container } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import logo from "../assets/img/png/solanalogo.png";

const Navbar = () => {
  return (
    <>
      <section className="bg_020102">
        <Container>
          <div className="d-flex justify-content-between align-items-center py-3">
            <img src={logo} alt="logo" />
            <div className="d-md-none d-block">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
            <div className="d-md-flex d-none gap-4">
              <Dropdown className="d-inline ">
                <Dropdown.Toggle id="dropdown-autoclose-true">
                  Learn
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                  <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                  <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className="d-inline  mx-2" autoClose="true">
                <Dropdown.Toggle id="dropdown-autoclose-true">
                  Build
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                  <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                  <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className="d-inline  mx-2" autoClose="true">
                <Dropdown.Toggle id="dropdown-autoclose-true">
                  Network
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                  <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                  <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className="d-inline  mx-2" autoClose={true}>
                <Dropdown.Toggle id="dropdown-autoclose-true">
                  Community
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                  <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                  <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Navbar;
