'use client'
import React, { useEffect, useRef } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const toTop = useRef<HTMLAnchorElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const toTopBtn = toTop.current;
      if (toTopBtn) {
        if (window.scrollY >= 50) {
          toTopBtn.classList.add("active");
        } else {
          toTopBtn.classList.remove("active");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <a
        href="#top"
        className="back-top-btn"
        aria-label="back to top"
        data-back-top-btn
        ref={toTop}
      >
        <FaArrowUp style={{ height: "30px", width: "50px" }} />
      </a>
    </div>
  );
};

export default BackToTop;
