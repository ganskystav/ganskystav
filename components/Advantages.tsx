export default function Advantages() {
  const items = [
    {
      title: "Zkušenosti",
      text: "Více než 15 let zkušeností ve stavebnictví."
    },
    {
      title: "Kvalita",
      text: "Používáme kvalitní materiály a moderní technologie."
    },
    {
      title: "Termíny",
      text: "Dodržujeme dohodnuté termíny realizace."
    },
    {
      title: "Individuální přístup",
      text: "Každému projektu věnujeme maximální péči."
    }
  ];

  return (
    <section className="advantages">
      <div className="container">

        <span className="section-subtitle">
          PROČ MY
        </span>

        <h2 className="section-title">
          Proč si zákazníci vybírají právě nás
        </h2>

        <div className="advantages-grid">

          {items.map((item, index) => (
            <div className="advantage-card" key={index}>

              <div className="advantage-number">
                0{index + 1}
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}