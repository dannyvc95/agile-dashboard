import React from "react";
//import ReactDOM from "react-dom";
import { Container, Content, Icon, Nav, Navbar, Sidebar, Sidenav, } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";

  const NavToggle = ({ expand, onChange }) => {
    return (
      <Navbar appearance="subtle" className="nav-toggle">
        <Navbar.Body>
          <Nav pullRight>
            <Nav.Item onClick={onChange} style={{ width: 56, textAlign: 'center' }}>
              <Icon icon={expand ? 'angle-left' : 'angle-right'} />
            </Nav.Item>
          </Nav>
        </Navbar.Body>
      </Navbar>
    );
  };
  
  class PageContent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        expand: true
      };
      this.handleToggle = this.handleToggle.bind(this);
    }
    handleToggle() {
      this.setState({
        expand: !this.state.expand
      });
    }
    render() {
      const { expand } = this.state;
      return (
        <div className="show-fake-browser sidebar-page">
          <Container>
            <Sidebar
              style={{ display: 'flex', flexDirection: 'column' }}
              width={expand ? 260 : 56}
              collapsible
            >
              <Sidenav expanded={expand} defaultOpenKeys={['3']} appearance="subtle">
                <Sidenav.Body>
                  <Nav>
                    <Nav.Item eventKey="1" active icon={<Icon icon="dashboard" />}>
                      My Dashboard
                    </Nav.Item>
                    <Nav.Item eventKey="2" icon={<Icon icon="group" />}>
                      My Team's Dashboard
                    </Nav.Item>
                  </Nav>
                </Sidenav.Body>
              </Sidenav>
              <NavToggle expand={expand} onChange={this.handleToggle} />
            </Sidebar>
  
            <Container>
              <Content>
                Moshi Moshi Alfonso desu! 
              </Content>
            </Container>
          </Container>
        </div>
      );
    }
  }
  
  export default PageContent;