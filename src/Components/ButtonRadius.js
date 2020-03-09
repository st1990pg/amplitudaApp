import React from "react";
import '../scss/ButtonRadius.scss'
import PropTypes from 'prop-types';


const ButtonRadius = ({classes, text}) => {
    return <button type="button" className={`ButtonRadius ${classes}`}>{text}</button>;
};

ButtonRadius.propTypes = {
    classes: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

ButtonRadius.defaultProps = {
    text: 'Pošalji'
};

export default ButtonRadius;
