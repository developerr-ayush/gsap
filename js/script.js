let container = document.querySelector(".container");
gsap.to(container, {
  duration: 20,
  ease: "ease.inOut",
  x: (container.clientWidth - window.innerWidth) * -1,
  repeat: -1,
  yoyo: true,
});
