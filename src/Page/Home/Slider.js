import React, { Component } from "react";
import Slider from "react-slick";
import { ButtonArrow } from "Components";
import ArrowLeft from "../../img/arrow-left-slider.svg";
import ArrowRight from "../../img/arrow-right-slider.svg";
//import Axios from "axios";
import { connect } from "react-redux";
import { fetchSlider } from "Actions/sliderAction";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        width: "9.38%",
        height: "100%",
        backgroundImage: `url(${ArrowRight}), linear-gradient(269deg, rgba(245, 245, 245, 1) 28%, rgba(245, 245, 245, 0.93) 61%, rgba(245, 245, 245, 0) 93%)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        width: "9.38%",
        left: "-9.5%",
        height: "100%",
        backgroundImage: `url(${ArrowLeft})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
      }}
      onClick={onClick}
    />
  );
}

class SimpleSlider extends Component {
  componentDidMount() {
    this.props.fetchSlider();
  }
  render() {
    const settings = {
      arrows: true,
      dots: false,
      infinite: true,
      draggable: true,
      speed: 500,
      variableWidth: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <SamplePrevArrow />,
      nextArrow: <SampleNextArrow />
    };
    const { slider } = this.props;
    const sliderBody = slider.map((slid, index) => {
      return (
        <div className="slider-div" key={index}>
          <img src={slid["img"]} alt={slid.text.title} />
          <div className="slider-text-div">
            <h3>{slid.text.title}</h3>
            <p>{slid.text.body}</p>
          </div>
        </div>
      );
    });
    return (
      <div className="slider">
        <div className="slider-wrapper">
          <div className="slider-header">
            <h2 className="slider-heading">Vijesti</h2>
            <span className="button-arrow-wrapper">
              <ButtonArrow
                text="other news"
                fontSize="18px"
                link="#"
              ></ButtonArrow>
            </span>
          </div>

          <Slider {...settings}>{sliderBody}</Slider>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  slider: state.slider.items
});

export default connect(mapStateToProps, { fetchSlider })(SimpleSlider);
