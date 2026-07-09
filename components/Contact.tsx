"use client";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    alert("Děkujeme! Vaše poptávka byla odeslána.");

    setName("");
    setPhone("");
    setMessage("");
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-header">
          <span className="section-subtitle">KONTAKT</span>
          <h2>Nezávazná poptávka</h2>
          <p>Napište nám nebo zavolejte — ozveme se co nejdříve.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <h3>GANSKY STAV s.r.o.</h3>

            <div className="contact-item">
              <span>📞 Telefon</span>
              <a href="tel:+420601311380">+420 601 311 380</a>
            </div>

            <div className="contact-item">
              <span>✉ Email</span>
              <a href="mailto:ganskystav@gmail.com">
                ganskystav@gmail.com
              </a>
            </div>

            <div className="contact-item">
              <span>📍 Město</span>
              <p>České Budějovice</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Vaše jméno"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="tel"
              placeholder="Telefon"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <textarea
              placeholder="Popište váš projekt"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button type="submit">Odeslat poptávku</button>
          </form>
        </div>
      </div>
    </section>
  );
}