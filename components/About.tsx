import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about-container">

        {/* IMAGE */}
        <div className="about-image">
          <Image
            src="/images/paco.jpeg"
            alt="Stavební práce"
            width={500}
            height={600}
            className="about-img"
          />
        </div>

        {/* TEXT */}
        <div className="about-content">

          <span className="section-subtitle">O NÁS</span>

          <h2>
            Stavíme s důrazem na kvalitu, detail a dlouhou životnost.
          </h2>

          <p>
            GANSKY STAV s.r.o. je stavební firma z Českých Budějovic,
            která se zaměřuje na rekonstrukce, novostavby a kompletní stavební realizace.
          </p>

          <p>
            Na každém projektu nám záleží stejně — ať jde o menší rekonstrukci bytu
            nebo výstavbu rodinného domu. Pracujeme pečlivě, čistě a vždy podle dohody.
          </p>

          <p>
            Naším cílem není jen postavit nebo zrekonstruovat prostor,
            ale vytvořit řešení, které vydrží roky bez kompromisů.
          </p>
        

          {/* HIGHLIGHT BOX */}
          <div className="about-box">

            <div>
              <h3>15+</h3>
              <p>let zkušeností</p>
            </div>

            <div>
              <h3>250+</h3>
              <p>projektů</p>
            </div>

            <div>
              <h3>100%</h3>
              <p>spokojených klientů</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}