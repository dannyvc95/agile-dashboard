import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Icon, Nav, Navbar, Sidebar, Sidenav } from "rsuite";

const Navigation = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const history = useHistory();

  const Toggle = () => {
    return (
      <Navbar appearance="subtle">
        <Nav pullRight>
          <Nav.Item onClick={() => setIsExpanded(!isExpanded)} style={{ width: 55, textAlign: "center" }}>
            <Icon icon={isExpanded ? "angle-left" : "angle-right"} />
          </Nav.Item>
        </Nav>
      </Navbar>
    );
  };

  return (
    <>
      <Sidebar collapsible style={{ display: "flex", flexDirection: "column" }} width={isExpanded ? 250 : 55}>
        <Sidenav expanded={isExpanded} appearance="subtle">
          <Nav>
            <Nav.Item onSelect={() => history.push("/dashboard")} icon={<Icon icon="dashboard" />}>
              Dashboard
            </Nav.Item>
            <Nav.Item onSelect={() => history.push("/users")} icon={<Icon icon="user" />}>
              Users
            </Nav.Item>
          </Nav>
        </Sidenav>
        <Toggle />
      </Sidebar>
    </>
  );
};

export default Navigation;
