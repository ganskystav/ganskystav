export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-overlay"></div>

      <div className="container hero-content">

        <span className="hero-subtitle">
          GANSKY STAV s.r.o. • České Budějovice
        </span>

        <h1>
  Stavební firma České Budějovice
  <br />
  Rekonstrukce bytů a domů
  <br />
  Construction Company Czech Republic
</h1>

        <p className="hero-text">
  GANSKY STAV s.r.o. je profesionální stavební firma z Českých Budějovic.
  Provádíme rekonstrukce bytů, rekonstrukce domů, stavební práce,
  novostavby a kompletní realizace projektů po celé České republice.
</p>

        <div className="hero-buttons">
          <a href="#contact" className="hero-btn">
            Nezávazná poptávka
          </a>

          <a href="#gallery" className="hero-btn-outline">
            Naše realizace
          </a>
        </div>

      </div>
    </section>
  );
}