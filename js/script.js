let tl = gsap.timeline({ defaults: { duration: 3 } });
tl.to(".square", {
  x: -300,
});
tl.to(".circle", {
  x: 300,
});
tl.to(".star", {
  x: -300,
  rotate: 360,
});
