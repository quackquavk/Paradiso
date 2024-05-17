'use client'
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { BiChevronLeft , BiChevronRight } from "react-icons/bi";

const Hero: React.FC = () => {
  const heroSliderRef = useRef<HTMLUListElement>(null);
  const heroSliderItemsRef = useRef<HTMLLIElement[]>([]);
  const heroSliderPrevBtnRef = useRef<HTMLButtonElement>(null);
  const heroSliderNextBtnRef = useRef<HTMLButtonElement>(null);

  let currentSlidePos = 0;
  let lastActiveSliderItem: HTMLLIElement | null = null;

  useEffect(() => {
    const heroSlider = heroSliderRef.current;
    const heroSliderItems = heroSliderItemsRef.current;
    const heroSliderPrevBtn = heroSliderPrevBtnRef.current;
    const heroSliderNextBtn = heroSliderNextBtnRef.current;

    if (!heroSlider || !heroSliderPrevBtn || !heroSliderNextBtn) return;

    lastActiveSliderItem = heroSliderItems[0];

    const updateSliderPos = () => {
      if (!lastActiveSliderItem) return;
      lastActiveSliderItem.classList.remove("active");
      heroSliderItems[currentSlidePos].classList.add("active");
      lastActiveSliderItem = heroSliderItems[currentSlidePos];
    };

    const slideNext = () => {
      if (currentSlidePos >= heroSliderItems.length - 1) {
        currentSlidePos = 0;
      } else {
        currentSlidePos++;
      }

      updateSliderPos();
    };

    const slidePrev = () => {
      if (currentSlidePos <= 0) {
        currentSlidePos = heroSliderItems.length - 1;
      } else {
        currentSlidePos--;
      }

      updateSliderPos();
    };

    const autoSlide = () => {
      const autoSlideInterval = setInterval(() => {
        slideNext();
      }, 7000);

      const clearAutoSlide = () => {
        clearInterval(autoSlideInterval);
      };

      heroSliderPrevBtn.addEventListener("click", slidePrev);
      heroSliderNextBtn.addEventListener("click", slideNext);
      heroSliderPrevBtn.addEventListener("mouseover", clearAutoSlide);
      heroSliderNextBtn.addEventListener("mouseover", clearAutoSlide);
      heroSliderPrevBtn.addEventListener("mouseout", autoSlide);
      heroSliderNextBtn.addEventListener("mouseout", autoSlide);

      return () => {
        heroSliderPrevBtn.removeEventListener("click", slidePrev);
        heroSliderNextBtn.removeEventListener("click", slideNext);
        heroSliderPrevBtn.removeEventListener("mouseover", clearAutoSlide);
        heroSliderNextBtn.removeEventListener("mouseover", clearAutoSlide);
        heroSliderPrevBtn.removeEventListener("mouseout", autoSlide);
        heroSliderNextBtn.removeEventListener("mouseout", autoSlide);
      };
    };

    autoSlide();
  }, []);

  return (
    <div>
      <section className="hero text-center" aria-label="home" id="home">
        <ul className="hero-slider" data-hero-slider ref={heroSliderRef}>
          <li
            className="slider-item active"
            data-hero-slider-item
            ref={(el) => {
              if (el) heroSliderItemsRef.current.push(el);
            }}
          >
            <div className="slider-bg">
              <img
                src="/images/hero-slider-1.jpg"
                width="1880"
                height="950"
                alt="fero"
                className="img-cover"
              />
            </div>
            <p className="label-2 section-subtitle slider-reveal">
              Traditional & Hygiene
            </p>
            <h1 className="display-1 hero-title slider-reveal">
              For the love of <br />
              delicious food
            </h1>
            <p className="body-2 hero-text slider-reveal">
              Come with family & feel the joy of mouthwatering food
            </p>
            <a href="#" className="btn btn-primary slider-reveal">
              <span className="text text-1">View Our Menu</span>
              <span className="text text-2" aria-hidden="true">
                View Our Menu
              </span>
            </a>
          </li>
          <li
            className="slider-item "
            data-hero-slider-item
            ref={(el) => {
              if (el) heroSliderItemsRef.current.push(el);
            }}
          >
            <div className="slider-bg">
              <img
                src="/images/hero-slider-2.jpg"
                width="1880"
                height="950"
                alt=""
                className="img-cover"
              />
            </div>

            <p className="label-2 section-subtitle slider-reveal">
              delightful experience
            </p>

            <h1 className="display-1 hero-title slider-reveal">
              Flavors Inspired by <br />
              the Seasons
            </h1>

            <p className="body-2 hero-text slider-reveal">
              Come with family & feel the joy of mouthwatering food
            </p>

            <a href="#" className="btn btn-primary slider-reveal">
              <span className="text text-1">View Our Menu</span>

              <span className="text text-2" aria-hidden="true">
                View Our Menu
              </span>
            </a>
          </li>

          <li
            className="slider-item "
            data-hero-slider-item
            ref={(el) => {
              if (el) heroSliderItemsRef.current.push(el);
            }}
          >
            <div className="slider-bg">
              <img
                src="/images/hero-slider-3.jpg"
                width="1880"
                height="950"
                alt="fero"
                className="img-cover"
              />
            </div>

            <p className="label-2 section-subtitle slider-reveal">
              amazing & delicious
            </p>

            <h1 className="display-1 hero-title slider-reveal">
              Where every flavor <br />
              tells a story
            </h1>

            <p className="body-2 hero-text slider-reveal">
              Come with family & feel the joy of mouthwatering food
            </p>

            <a href="#menus" className="btn btn-primary slider-reveal">
              <span className="text text-1">View Our Menu</span>

              <span className="text text-2" aria-hidden="true">
                View Our Menu
              </span>
            </a>
          </li>
        </ul>

        <button
          className="slider-btn prev"
          aria-label="slide to previous"
          data-prev-btn
          ref={heroSliderPrevBtnRef}
        >
          <BiChevronLeft className="ion-icon"/>
        </button>

        <button
          className="slider-btn next"
          aria-label="slide to next"
          data-next-btn
          ref={heroSliderNextBtnRef}
        >
          <BiChevronRight className="ion-icon"/>
        </button>

        <a href="#table" className="hero-btn has-after">
          <img
            src="/images/hero-icon.png"
            alt="booking icon"
            className="w-12 h-12"
          />
          <span className="label-2 text-center span">Book A Table</span>
        </a>
      </section>
    </div>
  );
};

export default Hero;
