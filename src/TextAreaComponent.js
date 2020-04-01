import React from "react";
import PropTypes from 'prop-types';
import {ucfirst} from "Helpers";


const TextAreaComponent = ({value, onchange}) => {

    return (
        <div className="InputText">
            <div>
                <label className="">{ucfirst(label)}</label>
            </div>
            <div style={{flexGrow: '1'}}>
                <textarea defaultValue={value || ""} onChange={onchange}></textarea>
            </div>
        </div>
    );
};

TextAreaComponent.propTypes = {
    classes: PropTypes.string,
    disabled: PropTypes.bool,
    onchange: PropTypes.func
};

TextAreaComponent.defaultProps = {
    label: "placeholder",
    disabled: false
};

export default TextAreaComponent;
