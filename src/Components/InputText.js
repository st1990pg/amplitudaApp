import React from "react";
import PropTypes from 'prop-types';
import '../scss/InputText.scss';

const InputText = ({label}) => {
    return (
        <div className="InputText">
            <div>
                <label className="">{label.charAt(0).toUpperCase() + label.slice(1)}</label>
            </div>
            <div style={{flexGrow: '2'}}>
                <input type="text"/>
            </div>
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
