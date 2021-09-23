import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Project from "./pages/Project";
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Homepage/>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/projects" component={Project} />
          <Route exact path= "/contact" component = {Contact}/>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;