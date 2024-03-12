// import React from 'react';
import ContactForm from "../../components/ContactForm/ContactForm.jsx";

import "./ContactPage.css";

function ContactPage() {
    return (
        <div className="contact-page">
            <div className="contact-container">
                <div className="contact-info">
                    <h1>Get in Touch</h1>
                    <p>Email Address:</p><p> <a href="mailto:info@grassrootsgoals.com">info@grassrootsgoals.com</a></p>
                    <p>Street Address:</p><p> 123 Main Street, Cityville, State, Country</p>
                    <p>Contact Number:</p><p><a href="tel:+15551234567">+1 (555) 123-4567</a></p>
                </div>
                <div className="contact-form">
                <h2>If you have any questions or inquiries, please feel free to reach out to us using the form below.</h2>
                <ContactForm />
                </div>
                {/* <img src="/images/pexels-photo-264384.jpeg" alt="girl playing soccer" /> */}
            </div>
        </div>
    );
}

export default ContactPage;
