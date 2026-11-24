export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="eyebrow">
          <span className="eyebrow-line" />
          PRECISION. TRUST. TECHNOLOGY.
        </div>

        <h1>
          Know the gold.
          <br />
          <span>Trust the value.</span>
        </h1>

        <p className="hero-description">
          Advanced gold purity analysis engineered for professionals.
          Verify authenticity, protect investments, and make confident
          decisions — without damaging a single ornament.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="primary-button">
            Contact Now <span>↗</span>
          </a>

          <a href="#technology" className="secondary-button">
            Explore technology <span>↓</span>
          </a>
        </div>

        <div className="hero-trust">
          <div className="trust-icon">✦</div>

          <div>
            <strong>Made in India</strong>
            <span>Engineered for gold professionals</span>
          </div>
        </div>
      </div>

      <div className="hero-image-container">
        <div className="hero-image-glow" />

        <img
          src="/images/machine_png.png"
          alt="AURUM Gold Purity Analyzer"
          className="hero-product-image"
        />

        <div className="image-label">
          <span className="label-dot" />
          AURUM GOLD PURITY ANALYZER
        </div>
      </div>
    </section>
  );
}