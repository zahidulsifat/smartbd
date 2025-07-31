'use client';

import Navigation from '@/components/Navigation';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage(data.message);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Header section */}
      <section className="sub-header">
        <Navigation />
        <h1>Contact Us</h1>
      </section>

      {/* Contact us content */}
      <section className="location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.86599869694!2d90.25446399931207!3d23.780863191512726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2z4Kai4Ka-4KaV4Ka-!5e0!3m2!1sbn!2sbd!4v1687194867216!5m2!1sbn!2sbd"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      
      <section className="contact-us">
        <div className="row">
          <div className="contact-col">
            <div>
              <i className="fa fa-home"></i>
              <span>
                <h5>Jahir Smart Tower</h5>
                <p>205/1 & 205/1/A, West Kafrul, Begum Rokeya Sharani, Taltola, Dhaka-1207</p>
              </span>
            </div>
            <div>
              <i className="fa fa-phone"></i>
              <span>
                <h5>+8802-58153636, +8802-55025235</h5>
                <p>Sunday to Thursday, 10AM to 6PM</p>
              </span>
            </div>
            <div>
              <i className="fa fa-envelope-o"></i>
              <span>
                <h5>info@smartbd.com</h5>
                <p>Email us your query</p>
              </span>
            </div>
          </div>
          <div className="contact-col">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Enter Your Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <textarea
                rows={8}
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button 
                type="submit" 
                className="hero-btn red-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
            {submitMessage && (
              <div className={`mt-4 p-3 rounded ${submitMessage.includes('Thank you') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {submitMessage}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export const metadata = {
  title: 'Contact Us - Smart Technologies (BD) Ltd',
  description: 'Get in touch with Smart Technologies (BD) Ltd. Contact us for inquiries about our ICT solutions and services.',
};
