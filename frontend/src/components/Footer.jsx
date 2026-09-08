import React from "react";

export default function Footer() {
  const PHONE_DISPLAY = "+91 6201 103436";
  const PHONE_RAW = "916201103436";
  const EMAIL = "anshu@samastipurmehndi.com";
  const INSTA_HANDLE = "samastipur_mehndi";

  return (
    <footer className="site-footer">

      {/* Decorative Elements */}
      <div className="footer-floral footer-floral-left">❧</div>
      <div className="footer-floral footer-floral-right">❧</div>

      <div className="container footer-grid">

        {/* ================= BRAND ================= */}
        <div className="footer-brand">

          <div className="footer-brand-mark">✦</div>

          <h2>Samastipur Mehndi</h2>

          <p className="footer-tagline">
            Elevating wedding aesthetics with
            <br />
            chemical-free herbal organic henna
            <br />
            designs curated by artist Anshu Priya.
          </p>

          {/* Social Buttons */}
          <div className="footer-socials">

            {/* Instagram */}
            <a
              href={`https://instagram.com/${INSTA_HANDLE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social instagram"
            >
              <span className="social-icon">◎</span>
              <span>@{INSTA_HANDLE}</span>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${PHONE_RAW}`}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social whatsapp"
            >
              <span className="social-icon">◔</span>
              <span>WhatsApp</span>
            </a>

          </div>
        </div>


        {/* ================= NAVIGATION ================= */}
        <div className="footer-column">

          <h4>Navigation</h4>

          <div className="footer-heading-line"></div>

          <ul className="footer-links-list">

            <li>
              <a href="#about">
                <span>→</span>
                About Anshu Priya
              </a>
            </li>

            <li>
              <a href="#gallery">
                <span>→</span>
                Design Catalog
              </a>
            </li>

            <li>
              <a href="#services">
                <span>→</span>
                Bridal Packages
              </a>
            </li>

            <li>
              <a href="#aftercare">
                <span>→</span>
                Dark Stain Care
              </a>
            </li>

            {/* CLIENT REVIEWS */}
            <li>
              <a href="#reviews">
                <span>→</span>
                Client Reviews
              </a>
            </li>

          </ul>
        </div>


        {/* ================= CONTACT ================= */}
        <div className="footer-column footer-contact">

          <h4>Studio & Contact</h4>

          <div className="footer-heading-line"></div>

          {/* Location */}
          <div className="contact-item">

            <span className="contact-icon">⌖</span>

            <div>
              <small>Studio Location</small>
              <p>Samastipur, Bihar, India</p>
            </div>

          </div>


          {/* Phone */}
          <div className="contact-item">

            <span className="contact-icon">☎</span>

            <div>
              <small>Phone / WhatsApp</small>

              <a href={`tel:+${PHONE_RAW}`}>
                {PHONE_DISPLAY}
              </a>
            </div>

          </div>


          {/* Email */}
          <div className="contact-item">

            <span className="contact-icon">✉</span>

            <div>
              <small>Email</small>

              <a href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </div>

          </div>


          {/* Instagram */}
          <div className="contact-item">

            <span className="contact-icon">◎</span>

            <div>
              <small>Instagram</small>

              <a
                href={`https://instagram.com/${INSTA_HANDLE}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                @{INSTA_HANDLE}
              </a>
            </div>

          </div>

        </div>

      </div>


      {/* ================= DESTINATION WEDDINGS ================= */}
      <div className="container footer-destination">

        <div className="destination-decoration">
          ✦
        </div>

        <div>
          <span>✿</span>
          Available for Destination Weddings across Bihar
        </div>

        <div className="destination-decoration">
          ✦
        </div>

      </div>


      {/* ================= COPYRIGHT ================= */}
      <div className="container footer-bottom">

        <p>
          © {new Date().getFullYear()} Samastipur Mehndi.
          All Rights Reserved.
        </p>

        <p>
          Artistry by <strong>Anshu Priya</strong>
        </p>

      </div>

    </footer>
  );
}