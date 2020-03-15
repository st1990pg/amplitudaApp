import React from "react";
import PropTypes from 'prop-types';
import useField from '../hooks/useField';
import {ucfirst} from "../Helpers";
import '../scss/InputText.scss';

const InputText = ({label, value, disabled}) => {

    const [fieldValue, onChangeValue] = useField(value);

    return (
        <div className="InputText">
            <div>
                <label className="">{ucfirst(label)}</label>
            </div>
            <div style={{flexGrow: '2'}}>
                <input type="text" value={fieldValue} onChange={onChangeValue} disabled={disabled}/>
            </div>
        </div>
    );
};

InputText.propTypes = {
    label: PropTypes.string.isRequired,
    classes: PropTypes.string,
    value: PropTypes.string,
    disabled: PropTypes.bool
};

InputText.defaultProps = {
    label: "placeholder",
    value: '',
    disabled: false
};

export default InputText;
