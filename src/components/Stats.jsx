const stats = [
  { value: "99.68%", label: "Claimed accuracy" },
  { value: "< 60 sec", label: "Analysis time" },
  { value: "0%", label: "Gold damage" },
  { value: "10 mg", label: "Weighing precision" },
];

export default function Stats() {
  return (
    <section className="stats-section">
      {stats.map((stat) => (
        <div className="stat" key={stat.label}>
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
        </div>
      ))}
    </section>
  );
}