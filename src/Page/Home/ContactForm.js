import React from 'react';
import InputText from "../../Components/InputText";
import ButtonRadius from "../../Components/ButtonRadius";
import '../../scss/ContactForm.scss';
import BlueLines from '../../img/blue-lines.svg'

const ContactForm = () => {
    return (
        <div className="ContactForm">
            <h1>Kontaktiraj nas</h1>
            <div className="row form-description">
                <div className="desc-img">
                    <img src={BlueLines} alt=""/>
                </div>
                <p>
                    Ukoliko imaš neko pitanje, sugestiju ili primjedbu za nas,
                    slobodno nam se obrati, a mi ćemo u najkraćem roku odgovoriti.
                </p>
            </div>
            <div className="row">
                <div className="col">
                    <InputText label="Ime i prezime"/>
                </div>
                <div className="col">
                    <InputText label="email"/>
                </div>
            </div>
            <div className="row">
                <InputText label="Poruka"/>
            </div>
            <div className="row form-submit">
                <ButtonRadius/>
            </div>
        </div>
    );
};

export default ContactForm;