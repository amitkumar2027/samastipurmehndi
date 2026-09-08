import React from "react";

export default function About() {
  return (
    <section className="about" id="about">

      {/* Decorative mehndi transition */}
      <div className="about-top-ornament" aria-hidden="true">
        <span className="ornament-vine left"></span>
        <span className="ornament-flower">❀</span>
        <span className="ornament-vine right"></span>
      </div>

      {/* Floating mehndi decorations */}
      <div className="about-mehndi about-mehndi-left" aria-hidden="true">
        <span>❀</span>
        <span>◌</span>
        <span>❧</span>
      </div>

      <div className="about-mehndi about-mehndi-right" aria-hidden="true">
        <span>❧</span>
        <span>◌</span>
        <span>❀</span>
      </div>

      <div className="container about-grid">

        {/* IMAGE */}
        <div className="about-image">

          <div className="mehndi-corner mehndi-corner-top">
            ❧
          </div>

          <div className="mehndi-corner mehndi-corner-bottom">
            ❧
          </div>

          <div className="about-flower about-flower-one">✿</div>
          <div className="about-flower about-flower-two">❀</div>

          <img
            src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=800&q=80"
            alt="Anshu Priya Henna Art"
          />

        </div>

        {/* CONTENT */}
        <div className="about-text">

          <p className="about-eyebrow">
            Meet The Artist
          </p>

          <h3>
            Anshu <span>Priya</span>
          </h3>

          <div className="about-mini-divider">
            <span></span>
            <b>✿</b>
            <span></span>
          </div>

          <p>
            With years of devoted craftsmanship in bridal and traditional
            henna, I believe that every bride's mehndi should tell her
            personal love story. From traditional Bihari wedding motifs to
            delicate contemporary Indo-Arabic elements, each stroke is drawn
            with utmost precision.
          </p>

          <p>
            We prepare our own organic henna cones from triple-sifted Sojat
            henna powder and pure essential tea tree and eucalyptus
            oils—strictly 100% chemical-free and skin-safe.
          </p>

          <div className="about-badges">

            <div className="about-badge-item">
              <div className="badge-symbol">❧</div>
              <div>
                <strong>100% Organic Henna</strong>
                <small>Zero chemicals or PPD guaranteed</small>
              </div>
            </div>

            <div className="about-badge-item">
              <div className="badge-symbol">♡</div>
              <div>
                <strong>500+ Happy Brides</strong>
                <small>Across Samastipur & neighboring districts</small>
              </div>
            </div>

            <div className="about-badge-item">
              <div className="badge-symbol">✿</div>
              <div>
                <strong>Custom Storyteller Art</strong>
                <small>Varmala, Doli & Groom portraits</small>
              </div>
            </div>

            <div className="about-badge-item">
              <div className="badge-symbol">❧</div>
              <div>
                <strong>Doorstep Studio Service</strong>
                <small>Punctual on-location bridal team</small>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}