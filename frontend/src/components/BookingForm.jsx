import React, { useState } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    client_name: "",
    phone: "",
    email: "",
    event_date: "",
    event_time: "Morning (10:00 AM)",
    venue_location: "",
    design_category: "Royal Bridal Mehndi",
    guest_count: "Bride Only",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    msg: "",
    error: false,
  });

  //WhatsApp number
  const artistPhone = "916201103436";

  // Backend API URL from .env
  const API_URL = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // WhatsApp friendly booking message
  const createWhatsAppURL = () => {
    const message = [
      `${String.fromCodePoint(0x1F338)} ${String.fromCodePoint(0x2728)} *Namaste Anshu Ji!* ${String.fromCodePoint(0x2728)} ${String.fromCodePoint(0x1F338)}`,

      `${String.fromCodePoint(0x1F49A)} I would love to book *Samastipur Mehndi* for my special occasion.`,

      `Here are my details:`,

      `${String.fromCodePoint(0x1F469)} *Name:* ${
        formData.client_name || "Not provided"
      }`,

      `${String.fromCodePoint(0x1F4C5)} *Event Date:* ${
        formData.event_date || "To be discussed"
      }`,

      `${String.fromCodePoint(0x23F0)} *Preferred Time:* ${
        formData.event_time || "To be discussed"
      }`,

      `${String.fromCodePoint(0x1F3A8)} *Mehndi Service:* ${
        formData.design_category || "To be discussed"
      }`,

      `${String.fromCodePoint(0x1F465)} *Guests:* ${
        formData.guest_count || "Not provided"
      }`,

      `${String.fromCodePoint(0x1F4CD)} *Venue:* ${
        formData.venue_location || "Samastipur"
      }`,

      `${String.fromCodePoint(0x1F4DD)} *Special Request:* ${
        formData.message ||
        "I would love to discuss my design requirements with you."
      }`,

      `━━━━━━━━━━━━━━━━━━`,

      `${String.fromCodePoint(
        0x1F4AB
      )} I would be happy to discuss the designs, availability & package details with you.`,

      `${String.fromCodePoint(
        0x1F33F
      )} Looking forward to having beautiful mehndi memories with you! ${String.fromCodePoint(
        0x2764,
        0xFE0F
      )}`,

      `*Thank you, Anshu Ji!* ${String.fromCodePoint(0x1F338)}`,
    ].join("\n\n");

    const encodedMessage = encodeURIComponent(message);

    return (
      `https://api.whatsapp.com/send?phone=${artistPhone}` +
      `&text=${encodedMessage}`
    );
  };

  // Direct WhatsApp button
  const handleWhatsAppRedirect = () => {
    const whatsappURL = createWhatsAppURL();

    window.open(whatsappURL, "_blank");
  };

  // Submit form:
  // 1. Save enquiry in database
  // 2. Open WhatsApp with same form details
  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      loading: true,
      msg: "",
      error: false,
    });

    // Create WhatsApp URL BEFORE anything changes
    const whatsappURL = createWhatsAppURL();

    // Open blank tab immediately so browser does not block popup
    const whatsappWindow = window.open("about:blank", "_blank");

    try {
      const response = await fetch(
        `${API_URL}/api/enquiries`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error(
          "Could not submit booking. Please try again or WhatsApp directly."
        );
      }

      // Database save successful
      setStatus({
        loading: false,
        msg: "Aapki enquiry successfully register ho chuki hai! 💚 Anshu Priya aapse jald hi contact karengi. ✨",
        error: false,
      });

      // Now redirect the already-open tab to WhatsApp
      if (whatsappWindow) {
        whatsappWindow.location.href = whatsappURL;
      } else {
        // Fallback if browser blocked the popup
        window.location.href = whatsappURL;
      }

      // Reset form AFTER WhatsApp URL has already been created
      setFormData({
        client_name: "",
        phone: "",
        email: "",
        event_date: "",
        event_time: "Morning (10:00 AM)",
        venue_location: "",
        design_category: "Royal Bridal Mehndi",
        guest_count: "Bride Only",
        message: "",
      });

    } catch (err) {
      // If database save fails, do not send user to WhatsApp
      if (whatsappWindow) {
        whatsappWindow.close();
      }

      setStatus({
        loading: false,
        msg: err.message,
        error: true,
      });
    }
  };

  return (
    <section className="booking-section" id="booking">

      {/* Decorative Mehndi Elements */}
      <div className="booking-decor booking-decor-left">
        ❧
      </div>

      <div className="booking-decor booking-decor-right">
        ❧
      </div>

      <div className="container">

        <div className="booking-container">

          {/* Heading */}
          <div className="section-title booking-heading">

            <p className="booking-kicker">
              Your Special Day Deserves Something Beautiful
            </p>

            <h2>
              Reserve Your <span>Special Date</span>
            </h2>

            <div className="booking-divider">
              <span></span>
              <b>✿</b>
              <span></span>
            </div>

            <p className="booking-description">
              Tell us a little about your celebration and we'll
              help create the perfect mehndi experience for you.
            </p>

          </div>

          {/* Success / Error Message */}
          {status.msg && (
            <div
              className={`alert ${
                status.error
                  ? "alert-error"
                  : "alert-success"
              }`}
            >
              <span className="alert-icon">
                {status.error ? "⚠️" : "✓"}
              </span>

              <span>{status.msg}</span>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="booking-form"
          >

            {/* Name */}
            <div className="form-group">
              <label>
                Full Name <span>*</span>
              </label>

              <div className="input-wrapper">
                <span className="input-icon">👤</span>

                <input
                  type="text"
                  name="client_name"
                  placeholder="e.g. Namya Singh"
                  required
                  value={formData.client_name}
                  onChange={handleChange}
                />
              </div>
            </div>


            {/* Phone */}
            <div className="form-group">
              <label>
                Phone / WhatsApp Number <span>*</span>
              </label>

              <div className="input-wrapper">
                <span className="input-icon whatsapp-input-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M20.52 3.48A11.8 11.8 0 0 0 12.1 0C5.56.0.24 5.32.24 11.86c0 2.09.55 4.13 1.59 5.93L.16 24l6.35-1.66a11.84 11.84 0 0 0 5.59 1.42h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.23-6.14-3.45-8.42ZM12.11 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.77.99 1.01-3.67-.23-.38a9.86 9.86 0 0 1-1.51-5.29C2.21 6.43 6.64 2 12.1 2c2.65 0 5.14 1.03 7.01 2.91a9.85 9.85 0 0 1 2.9 7.02c0 5.46-4.44 9.87-9.9 9.87Zm5.42-7.4c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.68-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
                  </svg>
                </span>

                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 98765 43210"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>


            {/* Date */}
            <div className="form-group">
              <label>
                Event Date <span>*</span>
              </label>

              <div className="input-wrapper">
                <span className="input-icon">📅</span>

                <input
                  type="date"
                  name="event_date"
                  required
                  value={formData.event_date}
                  onChange={handleChange}
                />
              </div>
            </div>


            {/* Time */}
            <div className="form-group">
              <label>Preferred Time Slot</label>

              <div className="input-wrapper">
                <span className="input-icon">🕐</span>

                <select
                  name="event_time"
                  value={formData.event_time}
                  onChange={handleChange}
                >
                  <option value="Morning (10:00 AM)">
                    Morning (10:00 AM)
                  </option>

                  <option value="Afternoon (02:00 PM)">
                    Afternoon (02:00 PM)
                  </option>

                  <option value="Evening (06:00 PM)">
                    Evening (06:00 PM)
                  </option>

                  <option value="Night (08:00 PM onwards)">
                    Night (08:00 PM onwards)
                  </option>
                </select>
              </div>
            </div>


            {/* Design */}
            <div className="form-group">
              <label>Type of Design Required</label>

              <div className="input-wrapper">
                <span className="input-icon">🌿</span>

                <select
                  name="design_category"
                  value={formData.design_category}
                  onChange={handleChange}
                >
                  <option value="Royal Bridal Mehndi">
                    Royal Bridal Mehndi
                  </option>

                  <option value="Classic Bridal (Elbow to Feet)">
                    Classic Bridal
                  </option>

                  <option value="Engagement / Sangeet Package">
                    Engagement / Sangeet
                  </option>

                  <option value="Indo-Arabic / Modern">
                    Indo-Arabic / Modern
                  </option>

                  <option value="Guest Mehndi Squad">
                    Guest & Family Mehndi
                  </option>

                  <option value="Festival / Karwa Chauth / Teej">
                    Festival Mehndi
                  </option>
                </select>
              </div>
            </div>


            {/* Guests */}
            <div className="form-group">
              <label>Number of People</label>

              <div className="input-wrapper">
                <span className="input-icon">👥</span>

                <input
                  type="text"
                  name="guest_count"
                  placeholder="Bride Only / Bride + 5 Guests"
                  value={formData.guest_count}
                  onChange={handleChange}
                />
              </div>
            </div>


            {/* Venue */}
            <div className="form-group full-width">
              <label>
                Venue Location / Address <span>*</span>
              </label>

              <div className="input-wrapper">
                <span className="input-icon">📍</span>

                <input
                  type="text"
                  name="venue_location"
                  placeholder="e.g. Hotel Milan, Kashipur Road, Samastipur"
                  required
                  value={formData.venue_location}
                  onChange={handleChange}
                />
              </div>
            </div>


            {/* Message */}
            <div className="form-group full-width">
              <label>
                Special Instructions / Design Requests
              </label>

              <div className="input-wrapper textarea-wrapper">
                <span className="input-icon textarea-icon">
                  ✨
                </span>

                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell us about your dream design, custom portraits, wedding theme or any special requirements..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>


            {/* Buttons */}
            <div className="full-width booking-actions">

              <button
                type="submit"
                className="btn-primary booking-submit-btn"
                disabled={status.loading}
              >
                <span>
                  {status.loading
                    ? "Saving Enquiry..."
                    : "Confirm Date Enquiry"}
                </span>

                {!status.loading && (
                  <span className="btn-arrow">→</span>
                )}
              </button>


              {/* WhatsApp Button */}
              <button
                type="button"
                onClick={handleWhatsAppRedirect}
                className="whatsapp-btn"
              >

                <span className="whatsapp-logo">
                  <svg viewBox="0 0 24 24">
                    <path d="M20.52 3.48A11.8 11.8 0 0 0 12.1 0C5.56.0.24 5.32.24 11.86c0 2.09.55 4.13 1.59 5.93L.16 24l6.35-1.66a11.84 11.84 0 0 0 5.59 1.42h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.23-6.14-3.45-8.42ZM12.11 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.77.99 1.01-3.67-.23-.38a9.86 9.86 0 0 1-1.51-5.29C2.21 6.43 6.64 2 12.1 2c2.65 0 5.14 1.03 7.01 2.91a9.85 9.85 0 0 1 2.9 7.02c0 5.46-4.44 9.87-9.9 9.87Zm5.42-7.4c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.68-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
                  </svg>
                </span>

                <span>
                  Chat With Us on WhatsApp
                </span>

                <span className="whatsapp-arrow">
                  ↗
                </span>

              </button>

            </div>

            <p className="booking-note">
              🔒 Your information is kept private and is used
              only to respond to your booking enquiry.
            </p>

          </form>

        </div>

      </div>

    </section>
  );
}