import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Hamburger = ({ navIsExpanded }) => {
  const tl = useRef();
  const container = useRef();

  useGSAP(() => {

    tl.current = gsap.timeline({ 
      paused: true, 
      defaults: { transformOrigin: "50% 50%", duration: 0.25 } 
    })
      .to(".top", {
        y: 20
      })
      .to(".bottom", {
        y: -20
      }, "<")
      .set(".bottom", {width: 80, x: -20})
      .set(".middle", { opacity: 0 })
      .to(".top", { rotate: 45 })
      .to(".bottom", { rotate: -45 }, "<")

  }, { scope: container });

  useEffect(() => {
    navIsExpanded ? tl.current.play() : tl.current.reverse(); 
  }, [navIsExpanded])

  return (
    <svg className="hamburger" viewBox="0 0 80 100" aria-expanded={navIsExpanded} ref={container}>
      <rect 
        className="line top" 
        width="80" height="4.5"
        x="0" y="28" rx="4"
      ></rect>
      <rect 
        className="line middle" 
        width="70" height="4.5"
        x="10" y="48" rx="4"
      ></rect>
      <rect 
        className="line bottom" 
        width="60" height="4.5"
        x="20" y="68" rx="4"
      ></rect>
    </svg>
  );
}

export default Hamburger;
