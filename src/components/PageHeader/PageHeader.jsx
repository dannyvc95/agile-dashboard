import React from "react";
import { Dropdown, Icon, Nav, Navbar, } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";

const PageHeader = () => {
  return (
    <>
      <Navbar>
        <Navbar.Header>
          <Nav>
            <Icon icon="flow" size="2x" style={{padding: "12px"}}></Icon>
          </Nav>
        </Navbar.Header>
        <Navbar.Body>
          <Nav>
            <Nav.Item icon={<Icon icon="home" />}>Home</Nav.Item>
          </Nav>
          <Nav pullRight>
            <Dropdown icon={<Icon icon="user" />} title="User's name">
              <Dropdown.Item icon={<Icon icon="setting"></Icon>}>Preferences</Dropdown.Item>
              <Dropdown.Item icon={<Icon icon="sign-out"></Icon>}>Sign Out</Dropdown.Item>
            </Dropdown>
          </Nav>
        </Navbar.Body>
      </Navbar>
    </>
  );
};

export default PageHeader;
