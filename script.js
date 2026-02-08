// جوڵەی ماوسی تایبەت
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1
    });
});

// ئەنیمەیشنی دەستپێک (GSAP Timeline)
const tl = gsap.timeline();

tl.from(".logo", { y: -50, opacity: 0, duration: 1, ease: "power4.out" })
  .from("nav ul li", { y: -20, opacity: 0, stagger: 0.1, duration: 0.8 }, "-=0.5")
  .from("h1", { y: 100, opacity: 0, duration: 1.2, ease: "power4.out" }, "-=0.5")
  .from("p", { opacity: 0, duration: 1 }, "-=0.8")
  .from(".hero-btns", { scale: 0.8, opacity: 0, duration: 0.8 }, "-=0.5");

// کارلێکی ماوس لەگەڵ دوگمەکان
document.querySelectorAll('button, a').forEach(elem => {
    elem.addEventListener('mouseenter', () => {
        gsap.to(cursor, { scale: 4, backgroundColor: "rgba(0, 242, 254, 0.2)", border: "1px solid #00f2fe" });
    });
    elem.addEventListener('mouseleave', () => {
        gsap.to(cursor, { scale: 1, backgroundColor: "#00f2fe", border: "none" });
    });
});
