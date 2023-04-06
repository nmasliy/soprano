import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function initAnimations() {
  if (ScrollTrigger.isTouch === 1) return;

  const items = document.querySelectorAll(".animate-show-up");

  items.forEach((item) => {
    gsap.fromTo(
      item,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        y: 0,
        scrollTrigger: {
          trigger: item,
          start: "10px bottom",
        },
      }
    );
  });
}

initAnimations();
