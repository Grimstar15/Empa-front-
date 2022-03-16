import React, { Component } from "react";

import Aux from "../Auxiliary";
import classes from "./Layout.module.scss";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
// import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        {/* <Header> */}
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        {/* </Header> */}
        <main className={classes.Content}>{this.props.children}</main>
        <Footer />
      </Aux>
    );
  }
}

export default Layout;
