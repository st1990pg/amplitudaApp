import React from "react";
import SimpleSlider from './Slider';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <SimpleSlider></SimpleSlider>
      </div>
    )
    
  }
}

export default Home;
