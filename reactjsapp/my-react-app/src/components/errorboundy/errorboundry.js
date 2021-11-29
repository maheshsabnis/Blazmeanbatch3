import { useState, Component } from "react";

class ErrorBoundaryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: "",
    };
  }

  static getDerivedStateFromError(error) {
    return {
      errorMessage: error.toString(), // once the error is received from the DOM, update the local state
    };
  }

  // Parameter 1: error:, the error that is thrown
  // Parameter 2: logInfo, the stack trace log in the browser, OR can be send to the server
  // componentStack: is the property that will show error details in Browser's stack trace
  componentDidCatch = (error, logInfo) => {
    // handle the exception
    // and print and log the error
    console.log("====================================");
    console.log(error.toString(), logInfo.componentStack);
    console.log("====================================");
  };

  render() {
      // if there is error then only render the fallback UI 
    if (this.state.errorMessage) {
      return (
        <div className="container">
          <h2>The Error Boundary Component</h2>
          <strong>
            There is some error occurred in counter component
            <br />
            {this.state.errorMessage}
          </strong>
        </div>
      );
    } else {
        // continue rendering children components
        return this.props.children;
    }
  }
}

const MyCounterComponent = () => {
  let [counter, updateCounter] = useState(0);
  const clickAndIncrement = () => {
    updateCounter(counter++);
  };

  const successRender = () => {
    return (
      <div className="container">
        <h2>The Counter Component</h2>
        <strong>The Current Value of the Counter is = {counter}</strong>
        <hr />
        <input type="button" value="Increment" onClick={clickAndIncrement} />
      </div>
    );
  };

  const fallBackUI = (e) => {
    return (
      <div className="container">
        <h2>The Counter Component</h2>
        <strong>
          There is some error occurred in counter component
          <br />
          {e.message}
        </strong>
      </div>
    );
  };

  if (counter >= 10) {
    throw new Error("Sorry!... you have reached to max clicks");
  } else {
    return successRender();
  }
};

const MyContainerComponent = () => {
  return (
    <div className="container">
      <h1>The Container Component</h1>
      <ErrorBoundaryComponent>
        <MyCounterComponent></MyCounterComponent>
      </ErrorBoundaryComponent>
      <hr />
      <input type="button" value="I am in Main Component" />
    </div>
  );
};

export default MyContainerComponent;
