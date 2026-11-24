export default function Technology() {
  return (
    <section className="technology-section" id="technology">
      <div className="section-heading">
        <div className="eyebrow">
          <span className="eyebrow-line" />
          THE SCIENCE BEHIND TRUST
        </div>

        <h2>
          Technology that sees
          <br />
          <span>beyond the surface.</span>
        </h2>

        <p>
          Traditional testing methods can damage valuable ornaments.
          AURUM brings scientific precision to gold analysis through
          a smarter, non-destructive approach.
        </p>
      </div>

      <div className="technology-card">
        <div className="technology-visual">
          <img
            src="/images/necklace.png"
            alt="Luxury gold necklace"
            className="technology-image"
          />

        </div>

        <div className="technology-copy">
          <span className="gold-label">OUR TECHNOLOGY</span>

          <h3>Precision meets simplicity.</h3>

          <p>
            Built around scientific measurement principles, AURUM
            analyzes gold samples to help determine their purity
            and actual gold content.
          </p>

          <ul>
            <li>Non-destructive analysis</li>
            <li>Simple operating process</li>
            <li>Fast results</li>
            <li>Designed for professional use</li>
          </ul>
        </div>
      </div>
    </section>
  );
}