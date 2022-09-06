import React from "react";

export default class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "user01",
    };
  }

  getUserName() {
    return this.state.username;
  }

  setUserName = () => {
    this.setState({
      username: "mataringan",
    });
  };

  render() {
    return (
      <div>
        <h4>Username : {this.state.username}</h4>
        <button onClick={this.setUserName}>Set Username</button>
      </div>
    );
  }
}
