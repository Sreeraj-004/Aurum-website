export default function ProductVisual() {
  return (
    <div className="product-scene">
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="glow" />

      <div className="product">
        <div className="product-top">
          <div className="product-brand">
            <span className="mini-mark">A</span>
            AURUM
          </div>

          <div className="product-indicator">
            <span />
            SYSTEM READY
          </div>
        </div>

        <div className="product-display">
          <div className="display-label">GOLD PURITY ANALYSIS</div>

          <div className="display-value">
            99.9<span>%</span>
          </div>

          <div className="display-divider" />

          <div className="display-data">
            <span>ESTIMATED PURITY</span>
            <strong>24 KARAT</strong>
          </div>
        </div>

        <div className="product-chamber">
          <div className="chamber-glass">
            <div className="gold-ring">
              <div className="ring-inner" />
            </div>
          </div>
        </div>

        <div className="product-controls">
          <div className="control-button" />
          <div className="control-button gold-button" />
          <div className="control-button" />
        </div>

        <div className="product-base">
          <div className="base-line" />
          <span>PRECISION GOLD ANALYSIS</span>
        </div>
      </div>

      <div className="floating-card floating-card-top">
        <span className="card-icon">✦</span>

        <div>
          <strong>Non-destructive</strong>
          <small>Preserves gold integrity</small>
        </div>
      </div>

      <div className="floating-card floating-card-bottom">
        <span className="card-icon">◈</span>

        <div>
          <strong>Precision technology</strong>
          <small>Reliable purity assessment</small>
        </div>
      </div>
    </div>
  );
}