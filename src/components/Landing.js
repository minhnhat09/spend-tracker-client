import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPeople } from "../actions";
import PeopleItem from "./PeopleItem";
import Grid from "material-ui/Grid";
class Landing extends Component {
  componentDidMount() {
    this.props.fetchPeople();
  }

  renderPeople() {
    if (this.props.people.people) {
      return this.props.people.people.map(person => {
        return (
          <Grid item xs={4} key={person.id}>
            <PeopleItem person={person} />
          </Grid>
        );
      });
    } else {
      return <div />;
    }
  }

  render() {
    return (
      <div>
        <Grid container spacing={8}>
          {this.renderPeople()}
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { people: state.people };
}

export default connect(mapStateToProps, { fetchPeople })(Landing);
