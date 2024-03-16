import gsap from "gsap";

const ScrollTo = (target, onStart) => {
  gsap.to(window, {
    duration: 0.5,
    scrollTo: target,
    onStart: onStart
  });
};

export default ScrollTo;
