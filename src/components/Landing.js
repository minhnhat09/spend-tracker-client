import React, { Component } from "react";
import AppBarHeader from "./AppBarHeader";
import Main from "./Main";
class Landing extends Component {
  render() {
    return (
      <div>
        <AppBarHeader />
        <Main />
      </div>
    );
  }
}

export default Landing;
