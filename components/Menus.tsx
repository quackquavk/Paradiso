"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { FaArrowUp } from "react-icons/fa";
const flipBook = (elBook: HTMLElement) => {
  elBook.style.setProperty("--c", "0"); // Set current page
  const pages = elBook.querySelectorAll<HTMLElement>(".page");
  pages.forEach((page, idx) => {
    page.style.setProperty("--i", `${idx}`);
    page.addEventListener("click", (evt) => {
      const target = evt.target as HTMLElement;
      if (target.closest("a")) return;
      const curr = target.closest(".back") ? idx : idx + 1;
      elBook.style.setProperty("--c", `${curr}`);
    });
  });
};

const Menus = () => {
  const bookRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (bookRef.current) {
      flipBook(bookRef.current);
    }
  }, []);
  return (
    <main className="bodyy bg-black w-full flex-col items-center" id="menus">
      <h1 className="section-subtitle1">Full Menu</h1>
      <div className="book mt-[-100px]" ref={bookRef}>
        <div className="page">
          <div className="front cover">
            <h1>Menu</h1>
            <h3>Click to explore</h3>
          </div>
          <div className="back">
            <Image
              src="https://paradisosportsbar.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-25-at-20.19.14-7.jpeg.webp"
              alt="Paradiso Logo"
              width={500}
              height={500}
              quality={100}
              layout="responsive"
              unoptimized={true}
              priority
            />
          </div>
        </div>

        <div className="page" id="appetizer">
          <div className="front">
            <Image
              src="https://paradisosportsbar.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-25-at-20.19.14-4.jpeg.webp"
              alt="Paradiso Logo"
              width={500}
              height={500}
              quality={100}
              unoptimized={true}
              priority
            />
          </div>
          <div className="back">
            <Image
              src="https://paradisosportsbar.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-25-at-20.19.14-5.jpeg.webp"
              alt="Paradiso Logo"
              width={500}
              height={500}
              quality={100}
              unoptimized={true}
              priority
            />
          </div>
        </div>

        <div className="page">
          <div className="front">
            <Image
              src="https://paradisosportsbar.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-25-at-20.19.14-1.jpeg.webp"
              alt="Paradiso Logo"
              width={500}
              height={500}
              quality={100}
              layout="responsive"
              unoptimized={true}
              priority
            />
          </div>
          <div className="back" id="indiancousine">
            <Image
              src="https://paradisosportsbar.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-25-at-20.19.14-2.jpeg.webp"
              alt="Paradiso Logo"
              width={500}
              height={500}
              quality={100}
              layout="responsive"
              unoptimized={true}
              priority
            />
          </div>
        </div>

        <div className="page">
          <div className="front">
            <Image
              src="https://paradisosportsbar.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-25-at-20.19.14-3.jpeg.webp"
              alt="Paradiso Logo"
              width={500}
              height={500}
              quality={100}
              layout="responsive"
              unoptimized={true}
              priority
            />
          </div>
          <div className="back">
            <Image
              src="https://paradisosportsbar.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-25-at-20.19.14-6.jpeg.webp"
              alt="Paradiso Logo"
              width={500}
              height={500}
              quality={100}
              layout="responsive"
              unoptimized={true}
              priority
            />
          </div>
        </div>

        <div className="page">
          <div className="front">
            <Image
              src="https://paradisosportsbar.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-25-at-20.19.14.jpeg.webp"
              alt="Paradiso Logo"
              width={500}
              height={500}
              quality={100}
              layout="responsive"
              unoptimized={true}
              priority
            />
          </div>

          <div className="back cover"></div>
        </div>
      </div>
      
    </main>
  );
};

export default Menus;
