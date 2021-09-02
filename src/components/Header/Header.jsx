import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Dropdown, Nav, Navbar, Toggle } from "rsuite";
import { FaCog, FaMoon, FaSignOutAlt, FaHome } from "react-icons/fa";
import { FiSun, FiUser } from "react-icons/fi";

const Header = () => {
  const user = "Kyojuro Rengoku";
  const history = useHistory();
  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem("isDark")));

  // Save the theme settings in the local storage to persist the user selection.
  useEffect(() => {
    document.getElementById("body").setAttribute("class", isDark ? "rs-theme-dark" : "");
    localStorage.setItem("isDark", JSON.stringify(isDark));
  }, [isDark]);

  return (
    <>
      <Navbar style={{ backgroundColor: "#1a2336" }} appearance="inverse">
        <Navbar.Brand>
          <a style={{ padding: "0px 20px", display: "inline-block", color: "white" }} href="/">
            AGILE DASHBOARD
          </a>
        </Navbar.Brand>
        <Nav>
          <Nav.Item onSelect={() => history.push("/")}>
            <FaHome /> Home
          </Nav.Item>
        </Nav>
        <Nav pullRight>
          <Toggle
            checked={isDark}
            onChange={() => setIsDark(!isDark)}
            style={{
              marginTop: "0.8rem",
              marginRight: "0.5rem",
              color: isDark ? "#ffffff" : "#1a2336",
            }}
            size="lg"
            checkedChildren={<FaMoon />}
            unCheckedChildren={<FiSun />}
          />
          <Dropdown title={user} icon={<FiUser />}>
            <Dropdown.Item icon={<FaCog />}> Settings</Dropdown.Item>
            <Dropdown.Item icon={<FaSignOutAlt />}> Sign out</Dropdown.Item>
          </Dropdown>
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
