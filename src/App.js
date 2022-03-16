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
import Editor from "./containers/Editor";
import Admin from "./containers/Admin";
import Training_page from "./containers/Training_page";
import Dashboard from "./containers/Dashboard/index";
import Customers from "./containers/Dashboard/Customers";
import Topnav from "./components/Topnav";
import Sidebar from "./components/Sidebar";
import style from "./components/Panel/layoutt.module.scss";
import homeEdit from "./components/HomeEdit";
import newsEdit from "./components/NewsEdit/index";
import newsPage from "./containers/newsPage";
import newsEditor from "./containers/newsEditor";
import Login from "./containers/Login";
import { UserContext } from "./UserContext";
import axios from "axios";

class App extends Component {
  state = {
    isLogin: false,
  };
  login = () => {
    this.setState({ islogin: true });
  };

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

            <Route path="/editor/:pageId" component={Editor} />
            <Route path="/page/:pageId" component={Training_page} />

            <Route path="/newsEdit/:pageId" component={newsEditor} />
            <Route path="/newsView/:pageId" component={newsPage} />

            {!localStorage.getItem("token") ? (
              <Route
                path="/admin"
                component={() => <Login setLogin={this.login} />}
              />
            ) : (
              <Route
                render={(props) => (
                  <div className={style.layout}>
                    <Sidebar {...props} />
                    <div className={style.layout__content}>
                      <Topnav />
                      <div className={style.layout__content_main}>
                        <Route path="/admin" component={Dashboard} />
                        <Route path="/trainingEdit" component={Admin} />
                        <Route path="/homeEdit" component={homeEdit} />
                        <Route path="/newsEdit" component={newsEdit} />
                      </div>
                    </div>
                  </div>
                )}
              />
            )}

            <Redirect to="/" />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default withRouter(App);
