"use client"

import { useContext, useState } from "react"
import "./Contact.scss"
import { illustration, contactInfo } from "../../portfolio"
import { Fade } from "react-reveal"
import email from "../../assets/lottie/email"
import DisplayLottie from "../../components/displayLottie/DisplayLottie"
import StyleContext from "../../contexts/StyleContext"

export default function Contact() {
  const { isDark } = useContext(StyleContext)
  const [result, setResult] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return value.trim().length < 2 ? "Name must contain at least 2 characters" : ""
      case "email":
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "Invalid email" : ""
      case "message":
        return value.trim().length < 10 ? "Message must contain at least 10 characters" : ""
      default:
        return ""
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched({ ...touched, [name]: true })
    const error = validateField(name, value)
    setErrors({ ...errors, [name]: error })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    if (touched[name]) {
      const error = validateField(name, value)
      setErrors({ ...errors, [name]: error })
    }
  }

  const onSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const newErrors = {}
    formData.forEach((value, key) => {
      if (key !== "access_key") {
        const error = validateField(key, value)
        if (error) newErrors[key] = error
      }
    })

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setTouched({ name: true, email: true, message: true })
      return
    }

    setIsSubmitting(true)
    setResult("")

    formData.append("access_key", "fe34e759-0256-4d0d-a361-71be9bbf59cf")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setResult("Message sent successfully!")
        event.target.reset()
        setErrors({})
        setTouched({})
        setTimeout(() => setResult(""), 5000)
      } else {
        setResult("Error sending message. Please try again.")
      }
    } catch (error) {
      setResult("Connection error. Please check your internet connection.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-container">
          <div className="contact-form-section">
            <div className="contact-form-wrapper">
              <h1 className="contact-title">{contactInfo.title}</h1>
              <p className={isDark ? "dark-mode contact-subtitle" : "subTitle contact-subtitle"}>
                {contactInfo.subtitle}
              </p>

              <form onSubmit={onSubmit} className="professional-contact-form">
                <div className="form-group">
                  
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Full Name"
                    required
                    className={`form-input ${touched.name && errors.name ? "input-error" : ""}`}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {touched.name && errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className="form-group">
                  
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email@example.com"
                    required
                    className={`form-input ${touched.email && errors.email ? "input-error" : ""}`}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {touched.email && errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="form-group">
                
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    required
                    rows="4"
                    className={`form-textarea ${touched.message && errors.message ? "input-error" : ""}`}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  ></textarea>
                  {touched.message && errors.message && <span className="error-message">{errors.message}</span>}
                </div>

                <button type="submit" disabled={isSubmitting} className="form-submit-btn">
                  {isSubmitting ? (
                    <>
                      <span className="btn-spinner"></span>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>

                {result && (
                  <div className={`form-result ${result.includes("success") ? "success" : "error"}`}>{result}</div>
                )}
              </form>
            </div>
          </div>

          <div className="contact-illustration-section">
            <div className="contact-illustration-wrapper">
              {illustration.animated ? (
                <DisplayLottie animationData={email} />
              ) : (
                <img
                  alt="Contact illustration"
                  src={require("../../assets/images/contactMailDark.svg") || "/placeholder.svg"}
                  className="contact-illustration-image"
                />
              )}
            </div>
            <div className="contact-info-text">
              <h2 className="contact-info-title">Let's Work Together</h2>
              <p className="contact-info-description">
                Have a question, a project, or just want to chat? Feel free to contact me, and I'll get back to you as
                soon as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  )
}
