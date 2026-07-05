import {
  FaPhoneAlt,
  FaClipboardList,
  FaHammer,
  FaCheckCircle,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaPhoneAlt />,
    title: "Kontakt",
    text: "Kontaktujte nás telefonicky nebo prostřednictvím formuláře.",
  },
  {
    icon: <FaClipboardList />,
    title: "Nezávazná nabídka",
    text: "Připravíme cenovou nabídku podle vašich požadavků.",
  },
  {
    icon: <FaHammer />,
    title: "Realizace",
    text: "Zajistíme kvalitní realizaci v dohodnutém termínu.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Předání",
    text: "Projekt dokončíme a předáme připravený k užívání.",
  },
];

export default function Process() {
  return (
    <section className="process">
      <div className="container">

        <span className="section-subtitle">
          JAK PRACUJEME
        </span>

        <h2 className="section-title">
          Spolupráce krok za krokem
        </h2>

        <div className="process-grid">

          {steps.map((step, index) => (
            <div className="process-card" key={index}>

              <div className="process-icon">
                {step.icon}
              </div>

              <h3>{step.title}</h3>

              <p>{step.text}</p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}