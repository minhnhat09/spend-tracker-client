import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
// REDUX
import { createStore, applyMiddleware } from "redux";
import Thunk from "redux-thunk";
import reducers from "../reducers";
import { Provider } from "react-redux";
// ROUTERS
import { BrowserRouter, Route } from "react-router-dom";
// MATERIAL UI
import { withStyles } from "material-ui/styles";
import Drawer from "material-ui/Drawer";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import ChevronLeftIcon from "material-ui-icons/ChevronLeft";
// COMPONENTS
import Landing from "./Landing";
import SimpleList from "./SimpleList";
import Spending from "./Spending";



const drawerWidth = 240;
const createStoreWithMiddleware = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(Thunk)
);
const styles = theme => ({
  root: {
    width: "100%",
    // height: 430,
    // marginTop: theme.spacing.unit * 3,
    zIndex: 1,
    overflow: "hidden"
  },
  appFrame: {
    position: "relative",
    display: "flex",
    width: "100%",
    height: "100%"
  },
  appBar: {
    position: "absolute",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: "none"
  },
  drawerPaper: {
    position: "relative",
    height: "100%",
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    width: "100%",
    marginLeft: -drawerWidth,
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    height: "calc(100% - 56px)",
    marginTop: 56,
    [theme.breakpoints.up("sm")]: {
      content: {
        height: "calc(100% - 64px)",
        marginTop: 64
      }
    }
  },
  contentShift: {
    marginLeft: 0,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  }
});

class App extends React.Component {
  state = {
    open: false
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <Provider store={createStoreWithMiddleware}>
        <BrowserRouter>
          <div className={classes.root}>
            <div className={classes.appFrame}>
              <AppBar
                className={classNames(
                  classes.appBar,
                  this.state.open && classes.appBarShift
                )}
              >
                <Toolbar disableGutters={!this.state.open}>
                  <IconButton
                    color="contrast"
                    aria-label="open drawer"
                    onClick={this.handleDrawerOpen}
                    className={classNames(
                      classes.menuButton,
                      this.state.open && classes.hide
                    )}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Typography type="title" color="inherit" noWrap>
                    Personal Assistant
                  </Typography>
                </Toolbar>
              </AppBar>
              <Drawer
                type="persistent"
                classes={{
                  paper: classes.drawerPaper
                }}
                open={this.state.open}
              >
                <div className={classes.drawerInner}>
                  <div className={classes.drawerHeader}>
                    <IconButton onClick={this.handleDrawerClose}>
                      <ChevronLeftIcon />
                    </IconButton>
                  </div>
                  <SimpleList />
                </div>
              </Drawer>
              <main
                className={classNames(
                  classes.content,
                  this.state.open && classes.contentShift
                )}
              >
                <div>
                  <Route exact path="/" component={Landing} />
                  <Route exact path="/spending" component={Spending} />
                </div>
                
              </main>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
