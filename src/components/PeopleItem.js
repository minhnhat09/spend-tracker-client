// @flow weak

import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Card, { CardActions, CardContent, CardMedia } from "material-ui/Card";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 200
  }
};

function PeopleItem(props) {
  const classes = props.classes;
  const person = props.person;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="http://lorempixel.com/400/200"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography type="headline" component="h2">
            {person.first_name}
          </Typography>
          <Typography component="p">
            {person.notes}
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense color="primary">
            Delete
          </Button>
          <Button dense color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

PeopleItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PeopleItem);
