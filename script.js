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
    });<!DOCTYPE html>
<html lang="ku" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tor Web | قالبە ناوازەکان</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
</head>
<body class="templates-page">
    <div id="cursor"></div>

    <header class="mini-header">
        <div class="logo" onclick="location.href='index.html'">TOR<span>WEB</span></div>
        <a href="index.html" class="back-link">گەڕانەوە بۆ سەرەکی ←</a>
    </header>

    <section class="templates-hero">
        <h2 class="reveal-text">قالبێکی <span>پڕۆفیشناڵ</span> هەڵبژێرە</h2>
        <p>هەموو قالبەکان بە نوێترین تەکنەلۆژیا و بەرزترین خێرایی دروستکراون.</p>
    </section>

    <div class="container">
        <div class="templates-grid">
            <div class="glass-card template-item">
                <div class="card-badge">پێشنیارکراو</div>
                <div class="card-img">
                    <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=500" alt="Restaurant">
                </div>
                <div class="card-info">
                    <h3>قالبى ڕێستۆرانت</h3>
                    <p>مۆدێرن، خێرا، و گونجاو بۆ هەموو مۆبایلێک.</p>
                    <div class="card-actions">
                        <button class="preview-btn">نمایشی زیندوو</button>
                        <button class="order-btn-sm">داواکردن</button>
                    </div>
                </div>
            </div>

            <div class="glass-card template-item">
                <div class="card-img">
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500" alt="E-commerce">
                </div>
                <div class="card-info">
                    <h3>فرۆشگای ئۆنلاین</h3>
                    <p>سیستەمی کڕین و پارەدانی ئەلیکترۆنی ئامادەیە.</p>
                    <div class="card-actions">
                        <button class="preview-btn">نمایشی زیندوو</button>
                        <button class="order-btn-sm">داواکردن</button>
                    </div>
                </div>
            </div>

            <div class="glass-card template-item">
                <div class="card-img">
                    <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=500" alt="Corporate">
                </div>
                <div class="card-info">
                    <h3>کۆمپانیای تەکنەلۆژیا</h3>
                    <p>دیزاینێکی فەرمی بۆ ناساندنی براند و خزمەتگوزارییەکان.</p>
                    <div class="card-actions">
                        <button class="preview-btn">نمایشی زیندوو</button>
                        <button class="order-btn-sm">داواکردن</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>

});
