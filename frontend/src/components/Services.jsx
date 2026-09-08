import React from "react";

const packages = [
  {
    id: 1,
    name: "Classic Mehndi",
    subtitle: "For Simple & Elegant Celebrations",
    price: "₹1,499",
    duration: "2–3 Hours",
    icon: "❧",
    features: [
      "Elegant Arabic / Indo-Arabic designs",
      "Both hands – front & back",
      "Simple feet design",
      "Natural organic henna",
      "Suitable for festivals & small events",
    ],
    featured: false,
  },
  {
    id: 2,
    name: "Bridal Mehndi",
    subtitle: "The Complete Bridal Experience",
    price: "₹4,999",
    duration: "5–7 Hours",
    icon: "✿",
    features: [
      "Full bridal hands – front & back",
      "Detailed feet mehndi",
      "Bride & groom storytelling",
      "Customized wedding motifs",
      "Organic chemical-free henna",
      "Bridal consultation included",
    ],
    featured: true,
  },
  {
    id: 3,
    name: "Royal Bridal",
    subtitle: "For Grand & Luxury Weddings",
    price: "₹7,999",
    duration: "8–10 Hours",
    icon: "❀",
    features: [
      "Premium full-hand bridal designs",
      "Full feet & ankle detailing",
      "Personalized portrait / storytelling",
      "Varmala, Doli & wedding motifs",
      "Dedicated bridal artist",
      "Complete design consultation",
    ],
    featured: false,
  },
];

export default function Services() {
  return (
    <section className="services" id="services">

      {/* Decorative background motifs */}
      <div className="services-decor services-decor-left" aria-hidden="true">
        <span>❧</span>
        <span>✿</span>
        <span>❧</span>
      </div>

      <div className="services-decor services-decor-right" aria-hidden="true">
        <span>❧</span>
        <span>✿</span>
        <span>❧</span>
      </div>

      <div className="container">

        {/* Heading */}
        <div className="section-title services-heading">

          <p className="services-kicker">
            Crafted For Your Celebration
          </p>

          <h2>
            Services <span>&</span> Packages
          </h2>

          <div className="services-divider">
            <span></span>
            <b>✿</b>
            <span></span>
          </div>

          <p className="services-description">
            From intimate celebrations to grand bridal ceremonies,
            choose a mehndi experience crafted especially for you.
          </p>

        </div>

        {/* Package Cards */}
        <div className="pricing-grid">

          {packages.map((pkg) => (
            <div
              className={`price-card ${
                pkg.featured ? "featured" : ""
              }`}
              key={pkg.id}
            >

              {pkg.featured && (
                <div className="featured-tag">
                  Most Loved
                </div>
              )}

              {/* Card ornament */}
              <div className="package-ornament">
                {pkg.icon}
              </div>

              <div className="package-content">

                <p className="package-number">
                  0{pkg.id}
                </p>

                <h3>{pkg.name}</h3>

                <p className="package-subtitle">
                  {pkg.subtitle}
                </p>

                <div className="package-divider">
                  <span></span>
                  <b>✦</b>
                  <span></span>
                </div>

                <div className="price-tag">
                  {pkg.price}
                  <span> / package</span>
                </div>

                <div className="package-duration">
                  <span>◷</span>
                  {pkg.duration}
                </div>

                <ul className="price-features">
                  {pkg.features.map((feature, index) => (
                    <li key={index}>
                      <span className="feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

              </div>

              <a
                href="#booking"
                className={`package-btn ${
                  pkg.featured ? "package-btn-featured" : ""
                }`}
              >
                Book This Package
                <span>→</span>
              </a>

            </div>
          ))}

        </div>

        {/* Bottom custom package banner */}
        <div className="custom-package">

          <div className="custom-package-flower">
            ❀
          </div>

          <div className="custom-package-text">
            <span>Need Something Special?</span>
            <h3>Let's Create Your Dream Mehndi</h3>
            <p>
              Custom bridal packages are available for destination weddings,
              large groups and personalized storytelling designs.
            </p>
          </div>

          <a href="#booking" className="custom-package-btn">
            Discuss Your Design
          </a>

        </div>

      </div>
    </section>
  );
}