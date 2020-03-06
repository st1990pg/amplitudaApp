import React from 'react';
import '../../scss/AddressSection.scss';
import Map from '../../img/map.png';
const AddressSection = () => {
    return (
        <div className="AddressSection">
            <div className="heading">
                <h1>Adresa</h1>
            </div>
            <div className="map">
                <p>Ekonomski fakultet, Ul. Jovana Tomaševića br. 37, Podgorica</p>
                <img src={Map} alt=""/>
            </div>
        </div>
    );
};

export default AddressSection;