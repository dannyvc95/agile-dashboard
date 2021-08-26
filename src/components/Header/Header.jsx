import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { Dropdown, Nav, Navbar,Button } from "rsuite";
import { FaCog, FaMoon, FaSignOutAlt, FaHome } from "react-icons/fa";
import { FiSun, FiUser } from "react-icons/fi";

const Header = () => {
  const user = "User";
  const history = useHistory();
  const [isDark, setIsDark] = useState(true);
  document.getElementById("body").setAttribute("class", isDark ? "rs-theme-dark" : "");

  return (
    <>
      <Navbar style={{ backgroundColor: isDark ? "#596987   " : "#1a2336" }} appearance="inverse">
        <Navbar.Brand>
          <a style={{ padding: "0px 20px", display: "inline-block", color: "white"}} href="/">
            &nbsp;AGILE DASHBOARD
          </a>
        </Navbar.Brand>
          <Nav>
            <Nav.Item onSelect={() => history.push("/")}> <FaHome /> Home</Nav.Item>
          </Nav>
          <Nav pullRight>
            <Button
              onClick={() => {
                setIsDark(!isDark);
              }}
              style={{marginTop: "0.6rem", marginRight: "0.5rem", backgroundColor:  isDark ? "#0f131a" : ""}}
            >
              {isDark ? <FaMoon /> : <FiSun />}
            </Button>
            <Dropdown title={user} icon={ <FiUser /> }>
              <Dropdown.Item icon={ <FaCog /> }> Settings</Dropdown.Item>
              <Dropdown.Item icon={ <FaSignOutAlt /> }> Sign out</Dropdown.Item>
            </Dropdown>
          </Nav>
      </Navbar>
    </>
  );
};

export default Header;
