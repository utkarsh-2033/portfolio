import React, { useState } from 'react';
import { MdEmail } from "react-icons/md";

const Contact = (props) => {
  const [form, setForm] = useState({ fullname: '', email: '', message: '' });
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newForm = { ...form, [name]: value };
    setForm(newForm);
    // Simple validation: all fields non-empty and email contains '@'
    setIsValid(
      newForm.fullname.trim() &&
      newForm.email.trim() &&
      newForm.email.includes('@') &&
      newForm.message.trim()
    );
  };

  return (
    <article {...props} className={`contact ${props.className || ''}`.trim()}>
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>
      <section className="mapbox" data-mapbox>
        <figure>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23768.911070957707!2d77.36888555986434!3d28.597572454346583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5992452d761%3A0xaaa44725147c1507!2sJSS%20Academy%20of%20Technical%20Education!5e0!3m2!1sen!2sin!4v1753003226631!5m2!1sen!2sin"
            width="400" height="300" loading="lazy" title="Map Placeholder"
          ></iframe>
        </figure>
      </section>
      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>
        <form action="#" className="form" data-form onSubmit={e => e.preventDefault()}>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required
              data-form-input
              value={form.fullname}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required
              data-form-input
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            data-form-input
            value={form.message}
            onChange={handleChange}
          ></textarea>
          <button
            className="form-btn"
            type="submit"
            disabled={!isValid}
            data-form-btn
          >
            {/* Placeholder for ion-icon */}
            <span style={{ display: 'inline-block', width: 20, height: 20, borderRadius: '50%', marginRight: 8 }}>
              <MdEmail />
            </span>
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
};

export default Contact; 