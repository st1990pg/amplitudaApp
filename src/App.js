import React from "react";
import Home from "./Page/Home";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default App;
