import React from "react";
import "../scss/ButtonRadius.scss";
import PropTypes from "prop-types";
import translate from "../i18n/translate";

const ButtonRadiusComponent = ({ classes, text, onclick }) => {
  return (
    <button type="button" className={`ButtonRadius ${classes}`} onClick={onclick}>
      {translate(text)}
    </button>
  );
};

ButtonRadiusComponent.propTypes = {
  text: PropTypes.string.isRequired,
  classes: PropTypes.string,
  onclick: PropTypes.func
};

ButtonRadiusComponent.defaultProps = {
  text: "send"
};

export default ButtonRadiusComponent;
