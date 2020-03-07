import React from "react";
import About from './About/About';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>
      <About/>
    </div>;
  }
}

export default Home;
