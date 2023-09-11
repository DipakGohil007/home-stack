import React, { useEffect, useState } from "react";
import IconArrowUp from "../../assets/svg/IconArrowUp";
import "./ScrollToTop.scss";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.pageYOffset > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button className="ScrollToTop" onClick={scrollToTop}>
          <IconArrowUp />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
