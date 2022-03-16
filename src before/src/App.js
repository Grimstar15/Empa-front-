import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import Product from "./containers/Product/Product";
import Service from "./containers/Service/Service";
import Training from "./containers/Training/CategoryList";
import Kidsclub from "./containers/Kidsclub/Kidsclub";
import News from "./containers/News/News";
import Page from "./containers/Page";
import Admin from "./containers/Admin";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/product" component={Product} />
            <Route path="/service" component={Service} />
            <Route path="/training" component={Training} />
            <Route path="/kidsclub" component={Kidsclub} />
            <Route path="/news" component={News} />
            <Route path="/admin" component={Admin} />
            <Route path="/page/:pageId" component={Page} />
            <Redirect to="/" />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default withRouter(App);
