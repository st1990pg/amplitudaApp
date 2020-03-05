import React from 'react';
import ContactForm from "./ContactForm";
import AddressSection from "./AddressSection";
import '../../scss/ContactUs.scss'

const ContactUs = () => {
    return (
        <div className="ContactUs">
            <div className="form">
                <ContactForm />
            </div>
            <div className="address">
                <AddressSection />
            </div>
        </div>
    );
};

export default ContactUs;