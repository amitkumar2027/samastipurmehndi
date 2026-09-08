import React from 'react';

const reviews = [
  {
    name: "Sneha Kumari",
    location: "Kashipur, Samastipur",
    quote: "Anshu did my bridal mehndi for my wedding and it exceeded all expectations! The color came out so dark maroon on my wedding day. Truly the best artist in Samastipur.",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Pooja Verma",
    location: "Tajpur Road",
    quote: "The patience and cleanliness Anshu showed during my 6-hour bridal sitting was commendable. The 100% natural cones had such a soothing eucalyptus fragrance.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Ritu Choudhary",
    location: "Darbhanga / Samastipur",
    quote: "Booked her for our family sangeet ceremony. She and her team managed all 20 cousins with fast, clean and gorgeous modern designs!",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"
  }
];

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-title">
          <h2>Happy Brides & Words of Love</h2>
          <p>Real stories from our clients</p>
        </div>

        <div className="testi-grid">
          {reviews.map((rev, i) => (
            <div key={i} className="testi-card">
              <div className="testi-header">
                <img src={rev.img} alt={rev.name} className="testi-avatar" />
                <div>
                  <h4>{rev.name}</h4>
                  <p>{rev.location}</p>
                </div>
              </div>
              <blockquote>"{rev.quote}"</blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}