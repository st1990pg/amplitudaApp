/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';

const ModalWrapper = (props) => {
    return (
        <div className={`modal-wrapper ${props.show && 'show'}`}>
               {props.children}
        </div>
    );
};

export default ModalWrapper;