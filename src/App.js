import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "Components/Header/Layout";
import Home from "./Page/Home";
import Footer from "Components/Footer/Footer";

import { IntlProvider, FormattedMessage } from "react-intl";
import { getLangCurent } from "Actions/navTranlateAction";
import { LOCALES } from "./i18n/constants";
import message from "./i18n/message";
import transalte from "./i18n/translate";
import Blog from "./Page/Blog";

import { Provider } from "react-redux";
import { connect } from "react-redux";

import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.getLangCurent();
  }
  render() {
    const { locale } = this.props;
    const curentLocation = LOCALES[locale];
    if (locale === "") {
      return <h1>LOADER . . .</h1>;
    }
    return (
      <div className="App">
        <IntlProvider
          locale={curentLocation}
          messages={message[curentLocation]}
          textComponent={Fragment}
        >
          <Layout />
          {/* <h1>{transalte("hello", { bold: <span>Test test</span> })}</h1>
            <h1>{transalte("hi")}</h1>
            <button onClick={() => this.setState({ locale: LOCALES.ENGLISH })}>
              ENGLISH
            </button>
            <button onClick={() => this.setState({ locale: LOCALES.FRENCH })}>
              FRENCH
            </button> 
            <button onClick={() => this.setState({ locale: LOCALES.SERBIAN })}>
              SERBIAN
            </button>   */}
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
        </IntlProvider>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  locale: state.lang.item
});

export default connect(mapStateToProps, { getLangCurent })(App);
