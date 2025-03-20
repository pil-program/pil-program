"use client"

import { useState } from "react"
import emailjs from "@emailjs/browser"
import "./contact-form.css"
import { MapPin, Mail, Phone, Twitter, Instagram, Disc, Facebook, Linkedin } from "lucide-react"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    subject: "General Inquiry",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const emailParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      subject: formData.subject,
      message: formData.message,
    }

    emailjs
      .send(
        "service_q5xqzok", // Replace with your EmailJS Service ID
        "template_3u0gm7c", // Replace with your EmailJS Template ID
        emailParams,
        "n5ReM--13eVLZqjMK" // Replace with your EmailJS Public Key
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text)
        alert("Message Sent Successfully!")
      })
      .catch((error) => {
        console.error("FAILED...", error)
        alert("Message Sending Failed.")
      })
  }

  return (
    <div id="contact" className="contact-container">
      <div className="contact-header">
        <div className="hello-text">H E L L O !</div>
        <h1 className="contact-title">CONTACT US</h1>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-content">
            <h2>Contact Information</h2>
            <p className="chat-text">Lets get connected😊</p>

            <div className="contact-details">


              <div className="contact-item">
                <Mail className="icon" size={24} />
                <span>pilprogramcorp@gmail.com</span>
              </div>

              <div className="contact-item">
                <MapPin className="icon map-icon" size={24} />
                <span>Buffalo, NY, United States</span>
              </div>
            </div>

            <div className="social-icons">
              <a href="https://www.facebook.com/profile.php?id=61567910794509" className="social-icon">
                <Facebook />
              </a>
              <a href="https://www.instagram.com/pilprogram/" className="social-icon">
                <Instagram />
              </a>
              <a href="https://www.linkedin.com/company/pilprogram/" className="social-icon">
                <Linkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Ian"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="iandoe@gmail.com" />
              </div>

              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="+1 012 3456 789"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group subject-group">
              <label>Select Subject?</label>
              <div className="radio-options">
                {["General Inquiry", "Careers", "Collaborate"].map(
                  (option, index) => (
                    <div className="radio-option" key={index}>
                      <input
                        type="radio"
                        id={`subject-${index}`}
                        name="subject"
                        value={option}
                        checked={formData.subject === option}
                        onChange={handleChange}
                      />
                      <label htmlFor={`subject-${index}`}>{option.replace(/\s\d$/, "")}</label>
                    </div>
                  ),
                )}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message.."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
