import React from "react";
import { useHistory } from "react-router-dom";
import { Dropdown, Icon, Nav, Navbar } from "rsuite";

const Header = () => {
  const user = "User";
  const history = useHistory();
  return (
    <>
      <Navbar style={{ backgroundColor: "#1a2336" }} appearance="inverse">
        <Navbar.Header>
          <a style={{ padding: "18px 20px", display: "inline-block" }} href="/">
            <Icon icon="dashboard" />
            &nbsp;AGILE DASHBOARD
          </a>
        </Navbar.Header>
        <Navbar.Body>
          <Nav>
            <Nav.Item onSelect={() => history.push("/")} icon={<Icon icon="home" />}>
              Home
            </Nav.Item>
          </Nav>
          <Nav pullRight>
            <Dropdown icon={<Icon icon="user" />} title={user}>
              <Dropdown.Item icon={<Icon icon="setting"></Icon>}>Settings</Dropdown.Item>
              <Dropdown.Item icon={<Icon icon="sign-out"></Icon>}>Sign out</Dropdown.Item>
            </Dropdown>
          </Nav>
        </Navbar.Body>
      </Navbar>
    </>
  );
};

export default Header;
