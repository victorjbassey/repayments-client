import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import NotFound from "./components/pages/NotFound";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Dashboard from "./components/pages/Dashboard";
import SeasonState from "./context/season/SeasonState";
import CustomerState from "./context/customer/CustomerState";
import RepaymentState from "./context/repayment/RepaymentState";
import "./App.css";

function App() {
  return (
    <SeasonState>
      <CustomerState>
        <RepaymentState>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/dashboard" component={Dashboard}></Route>
              <Route exact path="/about" component={About}></Route>
              <Route exact path="/" component={Home}></Route>
              <Route component={NotFound} />
            </Switch>
          </Router>
        </RepaymentState>
      </CustomerState>
    </SeasonState>
  );
}

export default App;
