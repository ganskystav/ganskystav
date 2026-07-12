import Image from "next/image";
import "./realizace.css";


const photos = [
  "photo_2026-07-12 12.32.58.jpeg",
  "photo_2026-07-12 12.34.10.jpeg",
  "photo_2026-07-12 12.34.58.jpeg",
  "photo_2026-07-12 12.36.32.jpeg",
  "photo_2026-07-12 12.37.06.jpeg",
  "photo_2026-07-12 12.37.58.jpeg",
  "photo_2026-07-12 12.38.47.jpeg",
  "photo_2026-07-12 12.39.33.jpeg",
  "photo_2026-07-12 12.40.00.jpeg",
  "photo_2026-07-12 12.40.43.jpeg",
  "photo_2026-07-12 12.41.13.jpeg",
  "photo_2026-07-12 12.41.45.jpeg",
  "photo_2026-07-12 12.42.16.jpeg",
  "photo_2026-07-12 12.42.41.jpeg",
  "photo_2026-07-12 12.43.08.jpeg",
  "photo_2026-07-12 12.43.30.jpeg",
  "photo_2026-07-12 12.44.01.jpeg",
  "photo_2026-07-12 12.44.36.jpeg",
  "photo_2026-07-12 12.45.46.jpeg",
  "photo_2026-07-12 12.46.10.jpeg",
  "photo_2026-07-12 12.46.43.jpeg",
  "photo_2026-07-12 12.47.33.jpeg",
  "photo_2026-07-12 12.48.06.jpeg",
  "photo_2026-07-12 12.48.34.jpeg",
  "photo_2026-07-12 13.08.30.jpeg",
  "photo_2026-07-12 13.08.53.jpeg",
  "photo_2026-07-12 13.09.15.jpeg",
  "photo_2026-07-12 13.09.37.jpeg",
  "photo_2026-07-12 13.09.55.jpeg",
  "photo_2026-07-12 13.10.12.jpeg",
  "photo_2026-07-12 13.10.31.jpeg",
  "photo_2026-07-12 13.10.49.jpeg",
  "photo_2026-07-12 13.11.12.jpeg",
  "photo_2026-07-12 13.11.44.jpeg",
  "photo_2026-07-12 13.12.08.jpeg",
  "photo_2026-07-12 13.12.24.jpeg",
  "photo_2026-07-12 13.12.42.jpeg",
  "photo_2026-07-12 13.13.48.jpeg",
  "photo_2026-07-12 13.14.09.jpeg",
  "photo_2026-07-12 13.14.31.jpeg",
  "photo_2026-07-12 13.15.00.jpeg",
  "photo_2026-07-12 13.15.24.jpeg",
  "photo_2026-07-12 13.15.47.jpeg",
  "photo_2026-07-12 13.16.09.jpeg",
  "photo_2026-07-12 13.16.28.jpeg",
  "photo_2026-07-12 13.17.46.jpeg",
  "photo_2026-07-12 13.18.12.jpeg",
];


export default function Realizace(){

return(

<main className="realizace-page">


<section className="realizace-header">

<h1>
Naše realizace
</h1>

<p>
Prohlédněte si naše dokončené stavební projekty.
</p>

</section>



<div className="realizace-gallery">


{photos.map((photo,index)=>(

<div className="photo-card" key={photo}>

<Image

src={`/images/realizace/${photo}`}

alt={`Realizace ${index+1}`}

width={600}

height={400}

/>

</div>


))}


</div>


</main>


)

}