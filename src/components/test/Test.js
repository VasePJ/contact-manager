import React, { Component } from "react";

class Test extends Component {
  state = {
    title: ""
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title
        })
      );
  }
  //   componentWillMount() {
  //     console.log("Component will mount..");
  //   }
  //   componentDidUpdate() {
  //     console.log("Component did update..");
  //   }
  //   componentWillpdate() {
  //     console.log("Component will update..");
  //   }
  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}
export default Test;
