import Image from "next/image";
import "./realizace.css";


const photos = [
  "stavba1.jpg",
  "stavba2.jpg",
  "stavba3.jpg",
  "stavba4.jpg",
  "stavba5.jpg",
  "stavba6.jpg",
  "stavba7.jpg",
  "stavba8.jpg",
  "stavba9.jpg",
  "stavba10.jpg",
  "stavba11.jpg",
  "stavba12.jpg",
  "stavba13.jpg",
  "stavba14.jpg",
  "stavba15.jpg",
  "stavba16.jpg",
  "stavba17.jpg",
  "stavba18.jpg",
  "stavba19.jpg",
  "stavba20.jpg",
  "stavba21.jpg",
  "stavba22.jpg",
  "stavba23.jpg",
  "stavba24.jpg",
  "stavba25.jpg",
  "stavba26.jpg",
  "stavba27.jpg",
  "stavba28.jpg",
  "stavba29.jpg",
  "stavba30.jpg",
  "stavba31.jpg",
  "stavba32.jpg",
  "stavba33.jpg",
  "stavba34.jpg",
  "stavba35.jpg",
  "stavba36.jpg",
  "stavba37.jpg",
  "stavba38.jpg",
  "stavba39.jpg",
  "stavba40.jpg",
  "stavba41.jpg",
  "stavba42.jpg",
  "stavba43.jpg",
  "stavba44.jpg",
  "stavba45.jpg",
  "stavba46.jpg",
  "stavba47.jpg",
];


export default function Realizace(){

return(

<main className="realizace-page">


<section className="realizace-header">

<h1>
TEST GANSKY GALERIE
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