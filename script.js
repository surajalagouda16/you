gsap.registerPlugin(ScrollTrigger);

// Hero
gsap.from(".hero-text", {
  opacity: 0,
  y: 60,
  duration: 1.6
});

gsap.from(".hero-sub", {
  opacity: 0,
  y: 40,
  delay: 0.5,
  duration: 1.2
});

// Panels animation
gsap.utils.toArray(".panel").forEach(panel => {
  gsap.from(panel.children, {
    scrollTrigger: {
      trigger: panel,
      start: "top 70%",
    },
    opacity: 0,
    y: 50,
    stagger: 0.3,
    duration: 1.2,
    ease: "power2.out"
  });
});

// Final section
gsap.from(".final", {
  scrollTrigger: {
    trigger: ".final",
    start: "top 80%"
  },
  opacity: 0,
  scale: 0.85,
  duration: 1.5
});

// Music
const music = document.getElementById("music");
const btn = document.querySelector(".music-btn");
let playing = false;

btn.onclick = () => {
  if (!playing) {
    music.play();
    playing = true;
  } else {
    music.pause();
    playing = false;
  }
};
