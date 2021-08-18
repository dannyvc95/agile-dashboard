import React from "react";
import { Container, Footer, } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";
import PageHeader from "./components/PageHeader";
import PageContent from "./components/PageContent";


const App = () => {
  return (
    <>
      <Container>
        <PageHeader/>
        <Container>
          <PageContent/>
        </Container>
        <Footer>2021 KK's Group ©</Footer>
      </Container>
    </>
  );
};

export default App;
