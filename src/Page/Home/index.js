import React from "react";
import About from "./About";
import Rectangle from './Rectangle';
import { ContactUs } from "Components";
import SimpleSlider from "./Slider";
import BackgroundHeader from "./BackgroundHeader";
import ModalTriggers from "./ModalTriggers";
class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      text2:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
   
        txt1: "Broj doniranih artikala",
        txt2: "Broj ostvarenih osmijeha"
      };
  }

  render() {
    const { text1, text2, txt1, txt2 } = this.state;
    return (
      <div className="home">
        <BackgroundHeader />
        <Rectangle txt1={txt1} txt2={txt2} />
        <About text1={text1} text2={text2} />
        <SimpleSlider />
        <ContactUs />
        <ModalTriggers />
      </div>
    );
  }
}

export default Home;
