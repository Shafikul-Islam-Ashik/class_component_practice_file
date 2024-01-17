import { Component } from "react";

export class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: {
        name: "",
        email: "",
        cell: "",
      },
    };
  }

  render() {
    // destructure
    const { name, email, cell } = this.state.input;

    // handle input change
    this.handleInputChange = (e) => {
      this.setState((prevState) => ({
        ...prevState,
        input: {
          ...prevState.input,
          [e.target.name]: e.target.value,
        },
      }));
    };

    return (
      <>
        <br />
        <br />
        <br />
        <form action="">
          <input
            type="text"
            placeholder="name"
            value={name}
            name="name"
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            placeholder="email"
            value={email}
            name="email"
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            placeholder="cell"
            value={cell}
            name="cell"
            onChange={this.handleInputChange}
          />
          <button>Create</button>
        </form>
      </>
    );
  }
}

export default Register;
