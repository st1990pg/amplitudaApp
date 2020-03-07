import React from "react";
import About from './About/About';
import ContactUs from "./ContactUs";
import SimpleSlider from "./Slider";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text1:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      text2:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    
    };
  }
  render() {
    return (
      <div>
        <About text1={this.state.text1} text2={this.state.text2}/>
        <ContactUs />
        <SimpleSlider></SimpleSlider>
      </div>
    );
  }
}

export default Home;
