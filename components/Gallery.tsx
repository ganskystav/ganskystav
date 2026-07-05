import Image from "next/image";

const images = [
  {
    src: "/images/hop.jpg.webp",
    title: "Rekonstrukce bytu",
  },
  {
    src: "/images/Par.jpg",
    title: "Rodinný dům",
  },
  {
    src: "/images/pok.jpg",
    title: "Moderní interiér",
  },
  {
    src: "/images/rok.jpg",
    title: "Stavební práce",
  },
  {
    src: "/images/cho.jpg",
    title: "Kompletní realizace",
  },
  {
    src: "/images/nf.jpg",
    title: "Rekonstrukce domu",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="container">

        <span className="section-subtitle">
          GALERIE
        </span>

        <h2 className="section-title">
          Naše realizace
        </h2>

        <p className="gallery-text">
          Podívejte se na ukázky našich dokončených projektů.
        </p>

        <div className="gallery-grid">

          {images.map((image, index) => (

            <div className="gallery-item" key={index}>

              <Image
                src={image.src}
                alt={image.title}
                width={700}
                height={500}
              />

              <div className="gallery-overlay">
                <h3>{image.title}</h3>
              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}