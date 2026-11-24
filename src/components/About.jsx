export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <div className="eyebrow">
          <span className="eyebrow-line" />
          ENGINEERED IN INDIA
        </div>

        <h2>
          A smarter standard
          <br />
          for <span>gold verification.</span>
        </h2>

        <p>
          Gayathri Enterprises brings gold-analysis technology
          to the businesses that need accuracy, speed, and confidence.
          Built with a focus on usability, affordability, and reliable
          professional support.
        </p>

        <a href="#contact" className="primary-button">
          Discover AURUM <span>↗</span>
        </a>
      </div>

      <div className="about-badge">
        <img
          src="/images/gayathri-logo.png"
          alt="Gayathri Enterprises logo"
          className="about-logo-image"
        />
      </div>
    </section>
  );
}