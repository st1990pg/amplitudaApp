import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./Components/Header/Layout";
import Home from "./Page/Home";
import Footer from "./Components/Footer/Footer";
import ReservationOverview from "./Components/Modals/ReservationOverview";
import Donate from "./Page/Donate/Donate";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <Layout />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/doniraj" exact component={Donate} />
          <Route path="/vijesti" exact component={Home} />
          <Route path="/blog" exact component={Home} />
          <Route path="/galerija" exact component={Home} />
          <Route path="/prijatelji" exact component={Home} />
          <Route path="/onama" exact component={Home} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
