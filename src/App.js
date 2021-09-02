import React from "react";
import { Container, Content} from "rsuite";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Projects from "./pages/Projects";
import "./App.less";

const App = () => {
  localStorage.getItem("isDark") ?? localStorage.setItem("isDark", "false");
  return (
    <>
      <Container>
        <Header />
        <Container>
          <Navigation />
          <Content style={{ paddingLeft: "5rem", paddingTop: "1rem", textAlign: "left" }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/users" component={Users} />
              <Route path="/projects" component={Projects} />
            </Switch>
          </Content>
        </Container>
      </Container>
    </>
  );
};

export default App;
