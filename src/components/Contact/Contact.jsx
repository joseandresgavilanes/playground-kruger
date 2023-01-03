import React from "react";
import "./Contract.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__container">
        <h2 className="contact__container-title">Ready to connect with me?</h2>
        <div className="contact__container-info">
          <div className="contact__container-info__title">Let's connect</div>
          <div className="contact__container-info__form">
            <div className="contact__container-info__form-field">
              <input
                name="firstName"
                autoComplete="on"
                placeholder="First Name"
                className="contact__container-info__form-field__input contact__container-info__form-field__input-firstname"
                type="text"
                id="firstName"
              />
              <input
                name="lastName"
                autoComplete="on"
                placeholder="Last Name"
                className="contact__container-info__form-field__input contact__container-info__form-field__input-lastname"
                type="text"
                id="lastName"
              />
            </div>
            <input
              name="email"
              autoComplete="on"
              placeholder="Email"
              className="contact__container-info__form-field__input contact__container-info__form-field__input-email"
              type="email"
              id="email"
            />
            <input
              name="text"
              autoComplete="on"
              placeholder="Enter text here"
              className="contact__container-info__form-field__input contact__container-info__form-field__input-text"
              type="text"
              id="text"
            />
          </div>
          <button className="contact__container-info__btn">Get in Touch</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
