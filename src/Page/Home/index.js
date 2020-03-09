import React from "react";
import BackgroundHeader from "../BackgroundHeader";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <BackgroundHeader />
      </div>
    );
  }
}

export default Home;
