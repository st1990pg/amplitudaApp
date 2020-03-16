import React from "react";
import "../scss/ButtonArrow.scss";
import Arrow from "../img/ButtonArrow.svg";

const ButtonArrowComponent = props => {
  const { style } = props;
  return (
    <div>
      <a
        className="button-arrow"
        style={{ ...style, fontSize: `${props.fontSize}` }}
        href={props.link}
      >
        {props.text} <img src={Arrow} alt="arrow" />
      </a>
    </div>
  );
};

export default ButtonArrowComponent;
