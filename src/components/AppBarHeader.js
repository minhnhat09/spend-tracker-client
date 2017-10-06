import React, { Component } from "react";
import AppBar from "material-ui/AppBar";

import TemporaryDrawer from "./TemporaryDrawer";
class AppBarHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });
  render() {
    return <TemporaryDrawer />;
  }
}

export default AppBarHeader;
