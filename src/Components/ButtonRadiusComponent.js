import React from "react";
import "../scss/ButtonRadius.scss";
import PropTypes from "prop-types";

const ButtonRadiusComponent = ({ classes, text, onclick }) => {
  return (
    <button type="button" className={`ButtonRadius ${classes}`} onClick={onclick}>
      {text}
    </button>
  );
};

ButtonRadiusComponent.propTypes = {
  text: PropTypes.string.isRequired,
  classes: PropTypes.string,
  onclick: PropTypes.func
};

ButtonRadiusComponent.defaultProps = {
  text: "Pošalji"
};

export default ButtonRadiusComponent;
