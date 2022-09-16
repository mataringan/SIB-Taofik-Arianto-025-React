import React, { Component } from "react";

export default class HaluFetch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => this.setState({ todos: data })); //
  }

  render() {
    const postTodo = this.state.todos;
    return (
      <div>
        {/* <h1>{this.state.todos}</h1> */}
        <table className="table">
          <tbody>
            {postTodo.map((todo, index) => {
              <tr key={index}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.title}</td>
                <td>{todo.completed ? "v" : "x"}</td>
              </tr>;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
