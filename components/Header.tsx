"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

const Header = () => {
  let lastScrollPos =0
  const navbarRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const navbar = navbarRef.current;
    const navTogglers =
      document.querySelectorAll<HTMLElement>("[data-nav-toggler]");
    const overlay = overlayRef.current;

    if (!navbar || !overlay) return;

    const toggleNavbar = () => {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
      document.body.classList.toggle("nav-active");
    };

    const hideHeader = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = currentScrollPos > lastScrollPos;

      if (isScrollingDown || currentScrollPos < 50) {
        headerRef.current?.classList.add("hide");
      } else {
        headerRef.current?.classList.remove("hide");
      }

      lastScrollPos = currentScrollPos;
    };
    const addEventOnElements = (
      elements: NodeListOf<HTMLElement>,
      eventType: string,
      callback: EventListenerOrEventListenerObject
    ) => {
      elements.forEach((element) =>
        element.addEventListener(eventType, callback)
      );
    };

    addEventOnElements(navTogglers, "click", toggleNavbar);

    window.addEventListener("scroll", () => {
      if (window.scrollY >= 50) {
        headerRef.current?.classList.add("active");
        hideHeader();
      } else {
        headerRef.current?.classList.remove("active");
      }
    });

    // Cleanup function to remove event listeners on unmount
    return () => {
      navTogglers.forEach((toggler) =>
        toggler.removeEventListener("click", toggleNavbar)
      );
      window.removeEventListener("scroll", hideHeader);
    };
  }, []);

  return (
    <header className="header" data-header ref={headerRef}>
      <div className="container">
        <a href="#" className="logo">
          <Image
            src="https://paradisosportsbar.com/wp-content/uploads/2023/02/cropped-paradiso-logo-150x150-1.png"
            width="100"
            height="50"
            alt="Paradiso - Home"
          />
        </a>

        <nav ref={navbarRef} className="navbar" data-navbar>
          <button
            className="close-btn"
            aria-label="close menu"
            data-nav-toggler
          ></button>

          <a href="#" className="logo">
            <Image
              src="https://paradisosportsbar.com/wp-content/uploads/2023/02/cropped-paradiso-logo-150x150-1.png"
              width="160"
              height="50"
              alt="Paradiso - Home"
            />
          </a>

          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="#home" className="navbar-link hover-underline active">
                <div className="separator"></div>

                <span className="span">Home</span>
              </a>
            </li>

            <li className="navbar-item">
              <a href="#menu" className="navbar-link hover-underline">
                <div className="separator"></div>

                <span className="span">Menus</span>
              </a>
            </li>

            <li className="navbar-item">
              <a href="#about" className="navbar-link hover-underline">
                <div className="separator"></div>

                <span className="span">About Us</span>
              </a>
            </li>

            <li className="navbar-item">
              <a href="#" className="navbar-link hover-underline">
                <div className="separator"></div>

                <span className="span">Our Chefs</span>
              </a>
            </li>

            <li className="navbar-item">
              <a href="#" className="navbar-link hover-underline">
                <div className="separator"></div>

                <span className="span">Contact</span>
              </a>
            </li>
          </ul>

          <div className="text-center">
            <p className="headline-1 navbar-title">Visit Us</p>

            <address className="body-4">
              Lakeside Ward No.6, <br />
              Baidam, Pokhara
            </address>

            <p className="body-4 navbar-text">Open: 9.30 am - 2.30pm</p>

            <a
              href="mailto:booking@paradiso.com"
              className="body-4 sidebar-link"
            >
              booking@paradiso.com
            </a>

            <div className="separator"></div>

            <p className="contact-label">Booking Request</p>

            <a
              href="tel:+977061-451675"
              className="body-1 contact-number hover-underline"
            >
              +977061-451675
            </a>
          </div>
        </nav>

        <a href="#table" className="btn btn-secondary">
          <span className="text text-1">Find A Table</span>

          <span className="text text-2" aria-hidden="true">
            Find A Table
          </span>
        </a>

        <button
          className="nav-open-btn"
          aria-label="open menu"
          data-nav-toggler
        >
          <span className="line line-1"></span>
          <span className="line line-2"></span>
          <span className="line line-3"></span>
        </button>

        <div className="overlay" data-nav-toggler ref={overlayRef}></div>
      </div>
    </header>
  );
};

export default Header;
