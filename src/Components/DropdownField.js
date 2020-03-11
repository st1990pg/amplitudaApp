import React, {useState} from 'react';
import useToggle from "../hooks/useToggle";
import PropTypes from 'prop-types';
import InputText from "./InputText";
import ArrowDown from '../img/chevron-arrow-down.svg';
import ArrowUp from '../img/chevron-arrow-up.svg';

const DropdownField = ({title, fields}) => {
    const [expanded, toggleExpanded] = useToggle(false);
    const [inputs, setInputs] = useState(fields);
    return (

        <div className="dropdown-field">
            <div className="dropdown-field__header" onClick={toggleExpanded}>
                <h4 className="title">{title}</h4>
                <img src={expanded ? ArrowUp : ArrowDown} alt="toggle dropdown"/>
            </div>
            {
                expanded &&
                <div className="dropdown-field__content">
                    {inputs.map(input => {
                        return <InputText label={input}/>
                    })}
                </div>
            }
        </div>
    );
};


DropdownField.defaultProps = {
    fields: ['Pol', 'Uzrast', 'Broj', 'Kolicina', 'Cjenovni Raspon'],
};

DropdownField.propTypes = {
    title: PropTypes.string.isRequired
};

export default DropdownField;