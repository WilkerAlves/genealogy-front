import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/pages/Home";
import Persons from "./components/pages/Persons";
import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import NewPerson from "./components/pages/NewPerson";
import Genealogy from "./components/pages/Genealogy";
import NewRelationship from "./components/pages/NewRelationship";


function App() {
  return (
      <Router>
          <Navbar />
          <Switch>
              <Container customClass="min-height">
                  <Route exact path="/">
                      <Home />
                  </Route>
                  <Route path="/persons">
                      <Persons />
                  </Route>
                  <Route path="/newperson">
                      <NewPerson />
                  </Route>
                  <Route path="/geanology/:id" >
                      <Genealogy />
                  </Route>
                  <Route path="/newrelationship">
                      <NewRelationship />
                  </Route>
              </Container>
          </Switch>
          <Footer />
      </Router>
  );
}

export default App;
