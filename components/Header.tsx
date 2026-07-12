"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="header">
      <div className="container">

        {/* LOGO */}
        <a href="/" className="logo">
          <Image
            src="/images/ChatGPT Image.png"
            alt="GANSKY STAV"
            width={500}
            height={250}
            priority
            className="logo-image"
          />
        </a>


        {/* DESKTOP NAV */}
        <nav className="nav">
  <a href="#about">O nás</a>

  <a href="#services">
    Služby
  </a>

  <a href="#gallery">
    Galerie
  </a>

  <a href="/realizace">
    Naše realizace
  </a>

  <a href="#contact">
    Kontakt
  </a>
        </nav>


        {/* BUTTON */}
        <a href="#contact" className="header-btn">
          Kontakt
        </a>


        {/* BURGER ICON */}
        <div 
          className="burger" 
          onClick={() => setOpen(!open)}
        >
          ☰
        </div>


        {/* MOBILE MENU */}
        {open && (
          <div className="mobile-menu">

            <a href="#about" onClick={closeMenu}>
              O nás
            </a>

            <a href="#services" onClick={closeMenu}>
              Služby
            </a>

            <a href="#gallery" onClick={closeMenu}>
              Galerie
            </a>

            <a href="/realizace" onClick={closeMenu}>
              Naše realizace
            </a>

            <a href="#contact" onClick={closeMenu}>
              Kontakt
            </a>


            <a 
              href="#contact" 
              className="mobile-btn" 
              onClick={closeMenu}
            >
              Kontakt
            </a>

          </div>
        )}

      </div>
    </header>
  );
}