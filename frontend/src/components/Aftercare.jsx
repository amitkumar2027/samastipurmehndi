import React from 'react';

export default function Aftercare() {
  const tips = [
    { num: "01", title: "Keep it on for 6-8 Hours", desc: "Let the organic paste dry naturally. Keep it on as long as possible for deepest absorption." },
    { num: "02", title: "Apply Lemon-Sugar Seal", desc: "Dab a warm mixture of lemon juice and sugar with cotton once dried to seal the moisture." },
    { num: "03", title: "Warm Clove Steam (Laung)", desc: "Warm a few cloves on a tawa and allow the rich clove smoke to gently heat your palms." },
    { num: "04", title: "Zero Water for 24 Hours", desc: "Scrape off the dry crust gently with mustard oil or coconut oil. Strictly avoid soap and water." }
  ];

  return (
    <section className="aftercare" id="aftercare">
      <div className="container">
        <div className="section-title">
          <h2>Henna Safety & Aftercare</h2>
          <p>Secret to that dark burgundy royal stain</p>
        </div>

        <div className="tips-grid">
          {tips.map((tip, idx) => (
            <div key={idx} className="tip-card">
              <span className="tip-num">{tip.num}</span>
              <h4>{tip.title}</h4>
              <p>{tip.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}