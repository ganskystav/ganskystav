import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaFileAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-container">

        {/* O společnosti */}
        <div>

          <h2>GANSKY STAV s.r.o.</h2>

          <p>
            Profesionální stavební společnost z Českých Budějovic.
            Specializujeme se na rekonstrukce, stavební práce
            a kompletní realizace projektů.
          </p>

          <a href="/company" className="company-link">
            <FaFileAlt />
            <span>Profil společnosti</span>
          </a>

        </div>

        {/* Kontakt */}
        <div>

          <h3>Kontakt</h3>

          <a href="tel:+420">
            +420 601 388 210
          </a>

          <br />
          <br />

          <a href="mailto:ganskystav@gmail.com">
            ganskystav@gmail.com
          </a>

        </div>

        {/* Sociální sítě */}
        <div>

          <h3>Majitel společnosti</h3>

          <p>Rarych Ivan</p>

          <div className="social-icons">

            <a
              href="https://www.instagram.com/rarichivan?igsh=aGV2cDBiYjdrc2Fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/share/19DCxvA92R/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>

            <a
              href="https://www.linkedin.com/in/ivan-rarych-18296941b?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} GANSKY STAV s.r.o. • Všechna práva vyhrazena.
      </div>

    </footer>
  );
}