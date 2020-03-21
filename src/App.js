import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "Components/Header/Layout";
import Home from "./Page/Home";
import Footer from "Components/Footer/Footer";

import { Provider } from "react-redux";

import axios from "axios";

import store from "./store";

axios.defaults.baseURL = "http://localhost:3000";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Layout />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/doniraj" exact component={Home} />
            <Route path="/vijesti" exact component={Home} />
            <Route path="/blog" exact component={Home} />
            <Route path="/galerija" exact component={Home} />
            <Route path="/prijatelji" exact component={Home} />
            <Route path="/onama" exact component={Home} />
          </Switch>
          <Footer />
        </Provider>
      </div>
    );
  }
}

export default App;
