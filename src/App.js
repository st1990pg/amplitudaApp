import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "Components/Header/Layout";
import Home from "./Page/Home";
import Blog from './Page/Blog';
import Footer from "Components/Footer/Footer";

import { IntlProvider, FormattedMessage } from "react-intl";
import { LOCALES } from "./i18n/constants";
import message from "./i18n/message";
import transalte from "./i18n/translate";

import { Provider } from "react-redux";

import axios from "axios";

import store from "./store";

axios.defaults.baseURL = "http://localhost:3000";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: LOCALES.FRENCH
    };
  }
  render() {
    const { locale } = this.state;
    return (
      <div className="App">
        <IntlProvider
          locale={locale}
          messages={message[locale]}
          textComponent={Fragment}
        >
          <Provider store={store}>
            <Layout />
            {/* <h1>{transalte("hello", { bold: <span>Test test</span> })}</h1>
            <h1>{transalte("hi")}</h1>
            <button onClick={() => this.setState({ locale: LOCALES.ENGLISH })}>
              ENGLISH
            </button>
            <button onClick={() => this.setState({ locale: LOCALES.FRENCH })}>
              FRENCH
            </button> */}
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/doniraj" exact component={Home} />
              <Route path="/vijesti" exact component={Blog} />
              <Route path="/blog" exact component={Home} />
              <Route path="/galerija" exact component={Home} />
              <Route path="/prijatelji" exact component={Home} />
              <Route path="/onama" exact component={Home} />
            </Switch>
            <Footer />
          </Provider>
        </IntlProvider>
      </div>
    );
  }
}

export default App;
