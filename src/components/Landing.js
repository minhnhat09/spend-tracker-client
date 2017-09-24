import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import SimpleDrawer from './SimpleDrawer';
import Main from "./Main";
class Landing extends Component {
  render() {
    return (
      <div>
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <SimpleDrawer />
        <Main />
      </div>
    );
  }
}

export default Landing;
