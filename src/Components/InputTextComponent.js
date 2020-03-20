import React from "react";
import PropTypes from 'prop-types';
import useField from '../hooks/useField';
import {ucfirst} from "../Helpers";
import '../scss/InputText.scss';

const InputTextComponent = ({label, value, disabled, onchange}) => {

    return (
        <div className="InputText">
            <div>
                <label className="">{ucfirst(label)}</label>
            </div>
            <div style={{flexGrow: '2'}}>
                <input type="text" value={value} onChange={onchange} disabled={disabled}/>
            </div>
        </div>
    );
};

InputTextComponent.propTypes = {
    label: PropTypes.string.isRequired,
    classes: PropTypes.string,
    value: PropTypes.string,
    disabled: PropTypes.bool
};

InputTextComponent.defaultProps = {
    label: "placeholder",
    value: '',
    disabled: false
};

export default InputTextComponent;
