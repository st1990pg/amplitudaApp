import React from "react";
import "../scss/ButtonArrow.scss";
import ArrowRight from "../img/ButtonArrowRight.svg";
import ArrowLeft from "../img/ButtonArrowLeft.svg";

const ButtonArrowComponent = props => {
  const { style } = props;
  const arrowLeft = props.arrowLeft;
  return (
    <div>
      <a
        className="button-arrow"
        style={{ ...style, fontSize: `${props.fontSize}` }}
        href={props.link}
        // arrowLeft={props.ArrowLeft}
      >
        {arrowLeft === "true" 
          ? <img src={ArrowLeft} alt="arrow" /> 
          : ""
        }
        {props.text}
        {arrowLeft !== "true" 
          ? <img src={ArrowRight} alt="arrow" />
          : ""
        }
      </a>
    </div>
  );
};

export default ButtonArrowComponent;
