// جوڵەی ماوسی تایبەت
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1
    });
});

// ئەنیمەیشنی سەرەتا (Intro Animation)
const tl = gsap.timeline();

tl.from(".logo", { y: -50, opacity: 0, duration: 1, ease: "power4.out" })
  .from(".nav-link", { y: -20, opacity: 0, stagger: 0.1, duration: 0.8 }, "-=0.5")
  .from("h1", { scale: 0.8, opacity: 0, duration: 1.5, ease: "elastic.out(1, 0.3)" }, "-=0.5")
  .from("p", { y: 30, opacity: 0, duration: 1 }, "-=1")
  .from(".hero-btns", { y: 30, opacity: 0, duration: 1 }, "-=0.8");

// کارلێکی دوگمەکان لەگەڵ ماوس
document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        gsap.to(cursor, { scale: 4, background: "rgba(0, 242, 254, 0.2)" });
    });
    btn.addEventListener('mouseleave', () => {
        gsap.to(cursor, { scale: 1, background: "#00f2fe" });
    });
});
