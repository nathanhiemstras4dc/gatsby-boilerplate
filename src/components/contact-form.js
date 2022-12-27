import React from "react";
import ContactFormIFrame from "./contact-form-iframe";

const ContactForm = (props) => {
    return (
        <section className="bg-sage py-4 py-md-6">
            <div className="container">
                <div className="row gx-lg-6 gy-4">
                    <div className="col-lg-6">
                        <h3>{props.headline}</h3>
                        <p className="text-dark lead">{props.body}</p>
                    </div>
                    <div className="col-lg-6 pb-4 pb-lg-0">
                        <ContactFormIFrame />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
