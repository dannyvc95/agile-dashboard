import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Nav, Navbar, Sidebar, Sidenav } from "rsuite";
import { Icon } from "@rsuite/icons";
import { FaProjectDiagram } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight, FiUser } from "react-icons/fi";
import { AiFillProject } from "react-icons/ai";

const Navigation = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeKey, setActiveKey] = useState("");
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

  // Redirect the user to the selected page on every active key change.
  useEffect(() => {
    const pagesRoutes = {
      1: "/dashboard",
      2: "/users",
      3: "/projects",
    };
    history.push(pagesRoutes[activeKey]);
  }, [activeKey]);

  return (
    <Sidebar width={isExpanded ? 250 : 55}>
      <Sidenav appearance="subtle" expanded={isExpanded} activeKey={activeKey} onSelect={setActiveKey}>
        <Sidenav.Body>
          <Nav>
            <Nav.Item
              eventKey="1"
              icon={<Icon style={{ transform: "scale(1.5)" }} onClick={() => setActiveKey("1")} as={AiFillProject} />}
            >
              Dashboard
            </Nav.Item>
            <Nav.Item
              eventKey="2"
              icon={<Icon style={{ transform: "scale(1.5)" }} onClick={() => setActiveKey("2")} as={FiUser} />}
            >
              Users
            </Nav.Item>
            <Nav.Item
              eventKey="3"
              icon={
                <Icon style={{ transform: "scale(1.5)" }} onClick={() => setActiveKey("3")} as={FaProjectDiagram} />
              }
            >
              Projects
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
      <Toggle />
    </Sidebar>
  );
};

export default Navigation;
