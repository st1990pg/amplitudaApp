import React from "react";
import PropTypes from 'prop-types';
import {ucfirst} from "../Helpers";
import '../scss/InputText.scss';

const InputTextComponent = (props) => {
    const {
        label,
        value,
        type = 'text',
        disabled = 'false',
        required = 'false',
        onchange
    } = props;
    return (
        <div className="InputText">
            <div>
                <label className="">{ucfirst(label)}</label>
            </div>
            <div style={{flexGrow: '1'}}>
                <input type={type} defaultValue={value || ""} onChange={onchange} disabled={disabled}/>
            </div>
        </div>
    );
};

InputTextComponent.propTypes = {
    label: PropTypes.string.isRequired,
    classes: PropTypes.string,
    disabled: PropTypes.bool,
    onchange: PropTypes.func
};

InputTextComponent.defaultProps = {
    label: "placeholder",
    disabled: false
};

export default InputTextComponent;
