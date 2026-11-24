const features = [
  {
    number: "01",
    title: "Non-destructive testing",
    description:
      "Analyze gold purity without cutting, scratching, rubbing, or damaging the ornament.",
  },
  {
    number: "02",
    title: "Detect counterfeit gold",
    description:
      "Identify plated, stuffed, alloyed, and suspicious ornaments with advanced analysis.",
  },
  {
    number: "03",
    title: "Fast & accurate",
    description:
      "Get reliable purity analysis in seconds with an accuracy of up to 99.68%, as claimed.",
  },
  {
    number: "04",
    title: "Built for professionals",
    description:
      "Designed for banks, financial institutions, jewelers, and gold-loan businesses.",
  },
];

export default function Features() {
  return (
    <section className="features-section" id="features">
      <div className="features-header">
        <div>
          <div className="eyebrow">
            <span className="eyebrow-line" />
            WHY AURUM
          </div>

          <h2>
            Confidence in
            <br />
            <span>every measurement.</span>
          </h2>
        </div>

        <p>
          Designed to help businesses make better decisions
          when dealing with gold.
        </p>
      </div>

      <div className="feature-grid">
        {features.map((feature) => (
          <article className="feature-card" key={feature.number}>
            <span className="feature-number">
              {feature.number}
            </span>

            <div className="feature-icon">✦</div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>

            <div className="feature-bottom">
              AURUM TECHNOLOGY
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}