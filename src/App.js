import React from "react";
import SimpleSlider from 'Page/Home/Slider';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>My react App</h1>
        <SimpleSlider></SimpleSlider>
      </div>
    );
  }
}

export default App;
