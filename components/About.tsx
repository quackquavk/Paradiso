import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div>
      <section
        className="section about text-center"
        aria-labelledby="about-label"
        id="about"
      >
        <div className="container">
          <div className="about-content">
            <p className="label-2 section-subtitle" id="about-label">
              Our Story
            </p>

            <h2 className="headline-1 section-title">
              Every Flavor Tells a Story
            </h2>

            <p className="section-text">
              Lorem Ipsum is simply dummy text of the printingand typesetting
              industry lorem Ipsum has been the industrys standard dummy text
              ever since the when an unknown printer took a galley of type and
              scrambled it to make a type specimen book It has survived not only
              five centuries, but also the leap into.
            </p>

            <div className="contact-label">Book Through Call</div>

            <a
              href="tel:+977061-451675"
              className="body-1 contact-number hover-underline"
            >
              +977061-451675
            </a>

            <a href="#" className="btn btn-primary">
              <span className="text text-1">Read More</span>

              <span className="text text-2" aria-hidden="true">
                Read More
              </span>
            </a>
          </div>

          <figure className="about-banner">
            <Image
              src="https://paradisosportsbar.com/wp-content/uploads/2023/03/IMG_7253.jpg"
              width="570"
              height="570"
              loading="lazy"
              alt="about banner"
              className="w-100"
              data-parallax-item
              data-parallax-speed="1"
            />

            <div
              className="abs-img abs-img-1 has-before"
              data-parallax-item
              data-parallax-speed="1.75"
            >
              <Image
                src="https://paradisosportsbar.com/wp-content/uploads/2023/03/30.jpg"
                width="285"
                height="285"
                loading="lazy"
                alt=""
                className="w-100"
              />
            </div>

            <div className="abs-img abs-img-2 has-before">
              <Image
                src="/images/badge-2.png"
                width="100"
                height="100"
                loading="lazy"
                alt=""
              />
            </div>
          </figure>

          <Image
            src="/images/shape-3.png"
            width="197"
            height="194"
            loading="lazy"
            alt=""
            className="shape"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
