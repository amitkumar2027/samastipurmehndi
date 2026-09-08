import React, { useState } from "react";

const galleryItems = [
  {
    id: 1,
    title: "Royal Bridal Mehndi",
    category: "Bridal",
    image:
      "https://images.unsplash.com/photo-1732118400647-a81e3b37be87?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 2,
    title: "Elegant Bridal Henna",
    category: "Bridal",
    image:
      "https://images.unsplash.com/photo-1674884060571-96a46a9a7a72?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 3,
    title: "Traditional Indian Mehndi",
    category: "Bridal",
    image:
      "https://images.unsplash.com/photo-1493728484672-f0bef543e2a1?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 4,
    title: "Beautiful Back-Hand Mehndi",
    category: "Minimalist",
    image:
      "https://images.unsplash.com/photo-1771992230505-97e0c3d38213?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 5,
    title: "South Indian Bridal Henna",
    category: "Engagement",
    image:
      "https://images.unsplash.com/photo-1686865604150-43f95d61416c?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 6,
    title: "Intricate Mehndi Design",
    category: "Arabic",
    image:
      "https://images.unsplash.com/photo-1779253806092-05bca568d85b?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 7,
    title: "Arabic Style Henna",
    category: "Arabic",
    image:
      "https://images.unsplash.com/photo-1571150613523-7b709c4f766d?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 8,
    title: "Festive Mehndi Design",
    category: "Festivals",
    image:
      "https://images.unsplash.com/photo-1525135927526-a01d9e5e9484?auto=format&fit=crop&w=1000&q=90",
  },
];

const categories = [
  "All",
  "Bridal",
  "Engagement",
  "Arabic",
  "Minimalist",
  "Festivals",
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredItems =
    activeTab === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeTab);

  return (
    <section className="gallery" id="gallery">

      {/* Decorative mehndi flowers */}
      <div className="gallery-decor gallery-decor-left" aria-hidden="true">
        <span>❧</span>
        <span>✿</span>
        <span>❧</span>
      </div>

      <div className="gallery-decor gallery-decor-right" aria-hidden="true">
        <span>❧</span>
        <span>✿</span>
        <span>❧</span>
      </div>

      <div className="container">

        {/* Heading */}
        <div className="section-title gallery-heading">
          <p className="gallery-kicker">A Collection of Art</p>

          <h2>
            Portfolio <span>&</span> Gallery
          </h2>

          <div className="gallery-title-divider">
            <span></span>
            <b>✿</b>
            <span></span>
          </div>

          <p className="gallery-description">
            Explore our handcrafted mehndi designs, created with patience,
            precision and a deep love for Indian wedding traditions.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="gallery-tabs">

          {categories.map((cat) => (
            <button
              key={cat}
              className={`tab-btn ${
                activeTab === cat ? "active" : ""
              }`}
              onClick={() => setActiveTab(cat)}
            >
              <span className="tab-flower">
                {activeTab === cat ? "✿" : "·"}
              </span>

              {cat === "Bridal"
                ? "Bridal Mehndi"
                : cat === "Engagement"
                ? "Engagement / Sangeet"
                : cat === "Arabic"
                ? "Arabic / Indo-Arabic"
                : cat === "Minimalist"
                ? "Minimalist / Backhand"
                : cat === "Festivals"
                ? "Baby Shower / Festivals"
                : "All Designs"}
            </button>
          ))}

        </div>

        {/* Gallery */}
        <div className="gallery-frame">

          <div className="gallery-frame-corner top-left">❧</div>
          <div className="gallery-frame-corner top-right">❧</div>
          <div className="gallery-frame-corner bottom-left">❧</div>
          <div className="gallery-frame-corner bottom-right">❧</div>

          <div className="gallery-grid">

            {filteredItems.map((item, index) => (
              <div
                className={`gallery-card ${
                  index === 0 && activeTab === "All"
                    ? "gallery-card-featured"
                    : ""
                }`}
                key={item.id}
              >

                <div className="gallery-image-wrap">

                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                  />

                  <div className="gallery-overlay">
                    <div className="gallery-overlay-flower">
                      ✿
                    </div>

                    <span>View Design</span>
                  </div>

                </div>

                <div className="gallery-caption">
                  <span className="gallery-category">
                    {item.category}
                  </span>

                  <h3>{item.title}</h3>

                  <div className="caption-line">
                    <span></span>
                    <b>✦</b>
                    <span></span>
                  </div>
                </div>

              </div>
            ))}

          </div>
        </div>

        {/* Bottom note */}
        <div className="gallery-bottom-note">
          <span>❧</span>
          <p>
            Every design is customized to match your story, outfit and
            celebration.
          </p>
          <span>❧</span>
        </div>

      </div>
    </section>
  );
}