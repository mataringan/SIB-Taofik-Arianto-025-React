import React from "react";
import PropTypes from "prop-types";

class HeroName extends React.Component {
  render() {
    return <h4>{this.props.name}</h4>;
  }
}

HeroName.propTypes = {
  name: PropTypes.string,
};

export default class Hero extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Mata",
    };
  }

  render() {
    return <HeroName name={this.state.name} />;
  }
}
