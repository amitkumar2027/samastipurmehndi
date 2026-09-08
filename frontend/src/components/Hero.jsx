import React from "react";

export default function Hero() {
  return (
    <section className="hero">

      {/* Decorative Mehndi Background */}
      <div className="hero-pattern hero-pattern-left"></div>
      <div className="hero-pattern hero-pattern-right"></div>

      {/* Decorative Botanical Elements */}
      <div className="hero-leaf hero-leaf-left">❧</div>
      <div className="hero-leaf hero-leaf-right">❧</div>

      <div className="container hero-container">

        {/* Badge */}
        <div className="hero-badge">
          <span className="badge-icon">❧</span>
          Pure Organic
          <span className="badge-dot">•</span>
          Chemical Free
          <span className="badge-dot">•</span>
          Dark Rich Stain
          <span className="badge-icon">❧</span>
        </div>

        {/* Main Heading */}
        <h1 className="hero-title">
          Exquisite Bridal Henna Art
          <span className="hero-title-italic"> for Your Most</span>
          <br />
          <span className="hero-title-green">
            Cherished Moments
          </span>
        </h1>

        {/* Decorative Divider */}
        <div className="hero-divider">
          <span></span>
          <div className="hero-flower">
            ✿
          </div>
          <span></span>
        </div>

        {/* Description */}
        <p className="hero-description">
          Handcrafted intricate patterns woven with love and tradition.
          Serving brides and festive events across Samastipur and Bihar
          with custom bridal storytelling.
        </p>

        {/* CTA Buttons */}
        <div className="hero-cta">

          <a href="#booking" className="btn-primary hero-main-btn">
            <span className="btn-icon">♡</span>
            Book Bridal Consultation
          </a>

          <a href="#gallery" className="btn-outline hero-gallery-btn">
            <span className="btn-icon">◈</span>
            Explore Gallery
          </a>

        </div>

        {/* Trust Features */}
        <div className="hero-features">

          <div className="hero-feature">
            <div className="feature-icon">❧</div>
            <div>
              <strong>100% Organic</strong>
              <span>Natural Henna</span>
            </div>
          </div>

          <div className="hero-feature-divider"></div>

          <div className="hero-feature">
            <div className="feature-icon">♡</div>
            <div>
              <strong>500+ Happy Brides</strong>
              <span>Beautiful Memories</span>
            </div>
          </div>

          <div className="hero-feature-divider"></div>

          <div className="hero-feature">
            <div className="feature-icon">✦</div>
            <div>
              <strong>Custom Designs</strong>
              <span>Made For You</span>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Decorative Border */}
      <div className="hero-bottom-decoration">
        <span>❧</span>
        <span>✦</span>
        <span>❧</span>
      </div>

    </section>
  );
}