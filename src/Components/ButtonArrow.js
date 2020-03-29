import React from "react";
import "../scss/ButtonArrow.scss";
import Arrow from "../img/ButtonArrow.svg";
import translate from "../i18n/translate";

const ButtonArrowComponent = props => {
  const { style } = props;
  return (
    <div>
      <a
        className="button-arrow"
        style={{ ...style, fontSize: `${props.fontSize}` }}
        href={props.link}
      >
        {translate(props.text)} <img src={Arrow} alt="arrow" />
      </a>
    </div>
  );
};

export default ButtonArrowComponent;
