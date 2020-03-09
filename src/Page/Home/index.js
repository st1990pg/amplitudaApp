import React from "react";
import ContactUs from "./ContactUs";
import SimpleSlider from "./Slider";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <SimpleSlider />
        <ContactUs />
      </div>
    );
  }
}

export default Home;
