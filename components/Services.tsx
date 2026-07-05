import {
  FaHome,
  FaBuilding,
  FaHammer,
  FaSchool,
  FaPaintRoller,
  FaHardHat,
} from "react-icons/fa";

const services = [
  {
    icon: <FaHome />,
    title: "Rekonstrukce bytů",
    text: "Kompletní rekonstrukce bytů na klíč – od návrhu až po finální předání.",
  },
  {
    icon: <FaBuilding />,
    title: "Rodinné domy",
    text: "Výstavba nových rodinných domů i rekonstrukce stávajících objektů.",
  },
  {
    icon: <FaSchool />,
    title: "Školy a veřejné budovy",
    text: "Rekonstrukce škol, školek a dalších veřejných objektů.",
  },
  {
    icon: <FaHammer />,
    title: "Stavební práce",
    text: "Kompletní stavební, zednické a dokončovací práce.",
  },
  {
    icon: <FaPaintRoller />,
    title: "Renovace",
    text: "Modernizace interiérů i exteriérů podle nejvyšších standardů.",
  },
  {
    icon: <FaHardHat />,
    title: "Kompletní realizace",
    text: "Od prvního návrhu až po předání hotového projektu.",
  },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">

        <span className="section-subtitle">
          SLUŽBY
        </span>

        <h2 className="section-title">
          Co pro vás můžeme zajistit
        </h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.text}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}