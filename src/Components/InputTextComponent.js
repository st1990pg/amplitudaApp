import React from "react";
import PropTypes from 'prop-types';
import {ucfirst} from "Helpers";

const InputTextComponent = (props) => {
    const {
        label,
        value,
        type,
        disabled,
        required,
        onchange
    } = props;

    return (
        <div className="InputText">
            <div>
                <label className="">{ucfirst(label)}</label>
            </div>
            <div style={{flexGrow: '1'}}>
                <input
                    type={type}
                    defaultValue={value || ""}
                    onChange={onchange}
                    disabled={disabled}
                    required={required}
                />
            </div>
        </div>
    );
};

InputTextComponent.propTypes = {
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onchange: PropTypes.func,
    required: PropTypes.bool
};

InputTextComponent.defaultProps = {
    label: "placeholder",
    disabled: false,
    required: false,
    type: 'text'
};

export default InputTextComponent;
