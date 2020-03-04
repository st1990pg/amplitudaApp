import React from "react";
import PropTypes from 'prop-types';
import '../scss/InputText.scss';

const InputText = ({placeholder}) => {
  return <input type="text" className="InputText" placeholder={placeholder}/>;
};

InputText.propTypes = {
  placeholder: PropTypes.string.isRequired
};

InputText.defaultProps = {
  placeholder: "placeholder"
};

export default InputText;
