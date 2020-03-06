import React from "react";
import ContactUs from "./ContactUs";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <ContactUs />
      </div>
    );
  }
}

export default Home;
