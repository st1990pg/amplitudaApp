import React from "react";
import '../scss/ButtonRadius.scss'
import PropTypes from 'prop-types';


const ButtonRadius = ({classes, width, text}) => {
    return <button type="button" className={classes} style={{width: width}}>{text}</button>;
};

ButtonRadius.propTypes = {
    width: PropTypes.string.isRequired,
    classes: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

ButtonRadius.defaultProps = {
    width: "20%",
    classes: "ButtonRadius",
    text: 'Pošalji'
};

export default ButtonRadius;
