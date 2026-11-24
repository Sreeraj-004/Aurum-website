export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="brand">
        <span className="brand-mark">A</span>

        <span className="brand-text">
          AURUM
          <small>GOLD PURITY ANALYZER</small>
        </span>
      </a>

      <div className="nav-links">
        <a href="#technology">Technology</a>
        <a href="#features">Features</a>
        <a href="#about">About us</a>
      </div>

      <a href="#contact" className="nav-cta">
        Request a Demo <span>↗</span>
      </a>
    </nav>
  );
}