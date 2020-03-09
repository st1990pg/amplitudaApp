import React from 'react';
import InputText from "../../Components/InputText";
import ButtonRadius from "../../Components/ButtonRadius";
import '../../scss/ContactForm.scss';
import BlueLines from '../../img/blue-lines.svg'

const ContactForm = () => {
    return (
        <div className="ContactForm container">
            <div className="row"><h1>Kontaktiraj nas</h1></div>
            <div className="row form-description">
                <div className="desc-img col-1 p-0">
                    <img src={BlueLines} className="img-fluid" alt=""/>
                </div>
                <div className="col-11 p-0">
                <p style={{width:'80%'}}>
                    Ukoliko imaš neko pitanje, sugestiju ili primjedbu za nas,
                    slobodno nam se obrati, a mi ćemo u najkraćem roku odgovoriti.
                </p>
                </div>
            </div>
            <div className="row d-flex justify-content-between">
                <div className="col-md-6 col-sm-12 p-0">
                    <InputText label="Ime i prezime"/>
                </div>
                <div className="col-md-5 col-sm-12 p-0">
                    <InputText label="email"/>
                </div>
            </div>
            <div className="row">
                <InputText label="Poruka"/>
            </div>
            <div className="row form-submit">
                <ButtonRadius />
            </div>
        </div>
    );
};

export default ContactForm;