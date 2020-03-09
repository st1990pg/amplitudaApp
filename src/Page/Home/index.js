import React from "react";
import ContactUs from "./ContactUs";
import SimpleSlider from "./Slider";
import BackgroundHeader from "../BackgroundHeader";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <BackgroundHeader/>
        <SimpleSlider />
        <ContactUs />
      </div>
    );
  }
}

export default Home;
