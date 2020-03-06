import React, { Component } from "react";
import Slider from "react-slick";
import HappyChild1 from "../../Happy-Children.png";
import HappyChild2 from "../../Happy-Children-Two.png";
import ButtonArrow from "../../Components/ButtonArrow";
import "../../scss/Slider.scss";
import ArrowLeft from "../../arrow-left-slider.svg";
import ArrowRight from "../../arrow-right-slider.svg";

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

export default class SimpleSlider extends Component {
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
    return (
      <div className="slider">
        <div className="slider-wrapper">
          <div className="slider-header">
            <h2 className="slider-heading">Vijesti</h2>
            <span className="button-arrow-wrapper">
              <ButtonArrow
                text="Ostale vijesti"
                fontSize="18px"
                link="#"
              ></ButtonArrow>
            </span>
          </div>

          <Slider {...settings}>
            <div className="slider-div">
              <img src={HappyChild1} alt="Happy Child" />
              <div className="slider-text-div">
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it.
                </p>
              </div>
            </div>
            <div className="slider-div">
              <img src={HappyChild2} alt="Happy Child" />
              <div className="slider-text-div">
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it.
                </p>
              </div>
            </div>
            <div className="slider-div">
              <img src={HappyChild1} alt="Happy Child" />
              <div className="slider-text-div">
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it.
                </p>
              </div>
            </div>
            <div className="slider-div">
              <img src={HappyChild2} alt="Happy Child" />
              <div className="slider-text-div">
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it.
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
