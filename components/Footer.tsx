'use client'
import { handleSubmitEmail } from "@/lib/actions/email.actions";
import { emailParams } from "@/types";
import Image from "next/image";
import React, { FormEvent, useState } from "react";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const formDataObject : emailParams = {
      email : formData.get('email') as string
    }
   try {
    handleSubmitEmail(formDataObject);
    (event.target as HTMLFormElement).reset();
    alert("Subscribed successfully");
   } catch (error) {
    console.log(error)
   }
  }
  return (
    <footer
      className="footer section has-bg-image text-center"
      style={{ backgroundImage: "url('/images/footer-bg.jpg')" }}
    >
      <div className="container">
        <div className="footer-top grid-list">
          <div className="footer-brand has-before has-after">
            <a href="#" className="logo">
              <Image
                src="http://paradisosportsbar.com/wp-content/uploads/2023/02/cropped-paradiso-logo-150x150-1.png"
                width="160"
                height="50"
                loading="lazy"
                alt="paradiso home"
              />
            </a>

            <address className="body-4">
              Lakeside Ward No.6, Baidam, Pokhara
            </address>

            <a
              href="mailto:paradisosportsbar@gmail.com"
              className="body-4 contact-link"
            >
              paradisosportsbar@gmail.com
            </a>

            <a href="tel:+977061-451675" className="body-4 contact-link">
              Booking Request : +977061-451675
            </a>

            <p className="body-4">Open : 09:00 am - 02:00 am</p>

            <div className="wrapper">
              <div className="separator"></div>
              <div className="separator"></div>
              <div className="separator"></div>
            </div>

            <p className="title-1">Get News & Offers</p>

            <p className="label-1">
              Subscribe us
            </p>

            <form action="" className="input-wrapper" onSubmit={handleSubmit}>
              <div className="icon-wrapper">
                <CiMail className="ion-icon" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  autoComplete="off"
                  className="input-field"
                />
              </div>

              <button type="submit" className="btn btn-secondary">
                <span className="text text-1">Subscribe</span>

                <span className="text text-2" aria-hidden="true">
                  Subscribe
                </span>
              </button>
            </form>
          </div>

          <ul className="footer-list">
            <li>
              <a href="#" className="label-2 footer-link hover-underline">
                Home
              </a>
            </li>

            <li>
              <a href="#menus" className="label-2 footer-link hover-underline">
                Menus
              </a>
            </li>

            <li>
              <a href="#" className="label-2 footer-link hover-underline">
                About Us
              </a>
            </li>

            <li>
              <a href="#" className="label-2 footer-link hover-underline">
                Our Chefs
              </a>
            </li>

            <li>
              <a href="#" className="label-2 footer-link hover-underline">
                Contact
              </a>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <a
                href="https://www.facebook.com/paradisopokhara/" target="blank"
                className="label-2 footer-link hover-underline"
              >
                Facebook
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/paradisopokhara/" target="blank"
                className="label-2 footer-link hover-underline"
              >
                Instagram
              </a>
            </li>

            <li>
              <a
                href="https://x.com/paradisopokhara" target="blank"
                className="label-2 footer-link hover-underline"
              >
                Twitter
              </a>
            </li>

            <li>
              <a
                href="https://www.youtube.com/@paradisosportbar3308" target="blank"
                className="label-2 footer-link hover-underline"
              >
                Youtube
              </a>
            </li>

            <li>
              <a
                href="#https://maps.app.goo.gl/VFRLCBZ3qXQfmTQK7" target="blank"
                className="label-2 footer-link hover-underline"
              >
                Google Map
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-bottom"></div>
      </div>
    </footer>
  );
};

export default Footer;
