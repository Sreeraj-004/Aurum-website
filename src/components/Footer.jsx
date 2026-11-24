export default function Footer() {
  return (
    <footer className="footer">
      <a href="#" className="brand">
        <span className="brand-mark">A</span>

        <span className="brand-text">
          AURUM
          <small>GOLD PURITY ANALYZER</small>
        </span>
      </a>

      <p>Precision engineered. Confidence delivered.</p>

      <span className="copyright">
        © {new Date().getFullYear()} Gayathri Enterprises
      </span>
    </footer>
  );
}