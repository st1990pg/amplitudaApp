import React from 'react';
import MainHeading from "../MainHeading";
import ButtonArrow from "../ButtonArrow";
import Cancel from '../../img/cancel.svg'
import InputText from "../InputText";
import DropdownField from "../DropdownField";
import ButtonRadius from "../ButtonRadius";

const ReservationOverview = () => {
    return (
        <div className="reservation-overview">
            <div className="reservation-overview__heading">
                <p>Prethodni Korak</p>
                <MainHeading text={'Pregled rezervacije'}/>
                <img src={Cancel} alt="cancel_button"/>
            </div>
            <div className="reservation-overview__content">
                <div className="content-subsection">
                    <h4 className='content-subsection__heading'>Informacije o donatoru:</h4>
                    <InputText label="Ime i prezime donatora"/>
                    <InputText label="Email"/>
                    <InputText label="Broj Telefona"/>
                </div>
                <div className="content-subsection">
                    <h4 className='content-subsection__heading'>Informacije o artiklima:</h4>
                    <DropdownField key="1" title="Trenerke"/>
                    <DropdownField key="2" title="Carape"/>
                    <DropdownField key="3" title="Patike"/>
                    <DropdownField key="4" title="Bojanke"/>
                    <DropdownField key="5" title="Igracke"/>
                </div>
            </div>
            <div className="reservation-overview__footer">
                <div className="footer__message">
                    <p>* Donacija može biti rezervisana 5 dana od datuma rezervisanja,</p>
                    <p> nakon čega prelazi u kategoriju
                        slobodnih proizvoda.</p>
                </div>
                <div className="footer__submit">
                    <ButtonRadius text="Rezervisi donaciju"/>
                </div>
                <div className="footer__progress">
                    <p>7 od 7</p>
                </div>
            </div>
        </div>
    );
};

export default ReservationOverview;