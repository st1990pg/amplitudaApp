import React from 'react';
import {ContactForm, AddressSection} from "../../Components";
import '../../scss/ContactUs.scss'

const ContactUsComponent = () => {
    return (
        <div className="ContactUs">
            <div className="row d-flex justify-content-between">
                <div className="col-md-6 col-sm-12 form">
                    <ContactForm />
                </div>
                <div className="col-md-5 col-sm-12 address">
                    <AddressSection />
                </div>
            </div>
        </div>
    );
};

export default ContactUsComponent;