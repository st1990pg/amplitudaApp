import React, {useState} from 'react';
import useToggle from "../hooks/useToggle";
import PropTypes from 'prop-types';
import InputText from "./InputText";
import {ucfirst,underscoreToSpace} from "../Helpers";
import ArrowDown from '../img/chevron-arrow-down.svg';
import ArrowUp from '../img/chevron-arrow-up.svg';

const DropdownField = ({title, fields}) => {
    const [expanded, toggleExpanded] = useToggle(false);

    return (

        <div className="dropdown-field">
            <div className="dropdown-field__header" onClick={toggleExpanded}>
                <h4 className="title">{title}</h4>
                <img src={expanded ? ArrowUp : ArrowDown} alt="toggle dropdown"/>
            </div>
            {
                expanded &&
                <div className="dropdown-field__content">
                    {Object.entries(fields).map(([key, value]) => {
                        return <InputText label={underscoreToSpace(ucfirst(key))} value={value} disabled={true}/>
                    })}
                </div>
            }
        </div>
    );
};


DropdownField.defaultProps = {
    fields:  {
        'pol': 'Zenski',
        'uzrast': '10-12 godina',
        'broj': 33,
        'kolicina': 2,
        'cjenovni_raspon': '20-40'
    },
};

DropdownField.propTypes = {
    title: PropTypes.string.isRequired
};

export default DropdownField;