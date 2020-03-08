import React from "react";
import PropTypes from 'prop-types';
import '../scss/InputText.scss';

const InputText = ({label}) => {
    return (
        <div className="InputText row p-0">
            <label className="">{label.charAt(0).toUpperCase() + label.slice(1)}</label>
            <input type="text" className="ml-auto"/>
        </div>
    );
};

InputText.propTypes = {
    label: PropTypes.string.isRequired
};

InputText.defaultProps = {
    label: "placeholder"
};

export default InputText;
