import { Component } from "react";

class Student extends Component {
  constructor(props) {
    super(props);
    // props
    this.props = props;

    // state
    this.state = {
      count: 0,
      todo: [],
      food: [],
    };
  }

  render() {
    const { count } = this.state;

    return (
      <>
        <span>{this.props.title}</span>
        <h1>{count}</h1>
        <hr />
        <button
          onClick={() =>
            this.setState((prevState) => ({
              ...prevState,
              count: prevState.count - 1,
            }))
          }
        >
          --
        </button>
        <button
          onClick={() =>
            this.setState((prevState) => ({
              ...prevState,
              count: prevState.count + 1,
            }))
          }
        >
          ++
        </button>
      </>
    );
  }
}

export default Student;
