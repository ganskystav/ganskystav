import Image from "next/image";
import "./realizace.css";

const photos = [
  "/images/realizace/stavba1.jpg",
  "/images/realizace/stavba2.jpg",
  "/images/realizace/stavba3.jpg",
  "/images/realizace/stavba4.jpg",
  "/images/realizace/stavba5.jpg",
];

export default function Realizace() {
  return (
    <main className="realizace-page">

      <h1>Naše realizace</h1>

      <p>
        Ukázky našich stavebních prací a dokončených projektů.
      </p>

      <div className="realizace-gallery">

        {photos.map((photo, index) => (
          <div className="realizace-item" key={index}>

            <Image
              src={photo}
              alt={`Realizace ${index + 1}`}
              width={500}
              height={350}
            />

          </div>
        ))}

      </div>

    </main>
  );
}