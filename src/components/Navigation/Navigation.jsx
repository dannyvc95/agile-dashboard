import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Nav, Navbar, Sidebar, Sidenav } from "rsuite";
import { FaProjectDiagram } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight, FiUser } from "react-icons/fi";
import { AiFillProject } from "react-icons/ai";

const Navigation = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const history = useHistory();

  const Toggle = () => {
    return (
      <Navbar appearance="subtle">
        <Nav pullRight>
          <Nav.Item onClick={() => setIsExpanded(!isExpanded)} style={{ width: 55, textAlign: "center" }}>
          {isExpanded ? <FiChevronLeft /> : <FiChevronRight />}
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
            <Nav.Item onSelect={() => history.push("/dashboard")} >              
              <AiFillProject /> Dashboard
            </Nav.Item>
            <Nav.Item onSelect={() => history.push("/users")} >
              <FiUser /> Users
            </Nav.Item>
            <Nav.Item onSelect={() => history.push("/projects")} >
              <FaProjectDiagram /> Projects
            </Nav.Item>
          </Nav>
        </Sidenav>
        <Toggle/>
      </Sidebar>
    </>
  );
};

export default Navigation;
