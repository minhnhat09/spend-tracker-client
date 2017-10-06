import React, { Component } from "react";
import FullWithGrid from "./FullWithGrid";
import { connect } from "react-redux";
import { fetchPeople } from "../actions";
class Landing extends Component {
  componentDidMount() {
    this.props.fetchPeople();
  }
  render() {
    console.log(this.props.people);
    return (
      <div>
        <FullWithGrid />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { people: state.people };
}

export default connect(mapStateToProps, { fetchPeople })(Landing);
