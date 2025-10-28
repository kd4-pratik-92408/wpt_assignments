import React from "react";

class ClassBased extends React.Component {
  state = {
    count: 0,
  };
  constructor() {
    super();
    console.log("Constructor Called");
  }

  componentDidMount() {
    console.log("ComponentDidMount Called... ");
  }

  componentDidUpdate() {
    console.log("ComponentDidUpdate Called... ");
  }

  componentWillUnmount() {
    console.log("ComponentWillMount Called...");
  }

  render() {
    console.log("render called....");
    return (
      <div>
        <h3>Class based Component</h3>
        <h4>Count : {this.state.count}</h4>

        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          increment
        </button>
      </div>
    );
  }
}

export default ClassBased;
