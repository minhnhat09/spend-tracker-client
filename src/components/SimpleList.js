// @flow weak

import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import Divider from "material-ui/Divider";
import InboxIcon from "material-ui-icons/Inbox";
import DraftsIcon from "material-ui-icons/Drafts";
import { Link } from "react-router-dom";
const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    background: theme.palette.background.paper
  }
});

function SimpleList(props) {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <List>
        <ListItem button>
          <Link to="/simple">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
          </Link>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItem button component="a" href="#simple-list">
          <ListItemText primary="Spam" />
        </ListItem>
      </List>
    </div>
  );
}

SimpleList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleList);
