import React from "react";
class Form extends React.Component {
  state = { userName: "" };
  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${this.state.userName}`)
      .then((response) => response.json())
      .then((data) => this.props.onSubmit(data));
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={(e) => this.setState({ userName: e.target.value })}
          placeholder="Github Username"
        />
        <button>Add Card</button>
      </form>
    );
  }
}
export default Form;
