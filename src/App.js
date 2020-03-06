import React from "react";
import Home from 'Page/Home/index';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>My react App</h1>
        <Home></Home>
      </div>
    );
  }
}

export default App;
