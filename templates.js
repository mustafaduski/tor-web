const templates = [
    {
        id: 1,
        title: "قالبى چێشتخانەی مۆدێرن",
        category: "ڕێستۆرانت",
        image: "assets/restaurant-template.jpg",
        price: "$150",
        features: ["سیستەمی مێنیو", "داواکاری ئۆنلاین", "گالێری وێنە"],
        demoLink: "https://demo.torweb.com/restaurant"
    },
    {
        id: 2,
        title: "قالبى فرۆشگای جلوبەرگ",
        category: "بازرگانی",
        image: "assets/fashion-store.jpg",
        price: "$350",
        features: ["سەبەتەی کڕین", "پارەدانی ئەلیکترۆنی", "بەڕێوەبردنی مەخزەن"],
        demoLink: "https://demo.torweb.com/fashion"
    },
    {
        id: 3,
        title: "قالبى پۆرتفۆلیۆی ئەندازیاری",
        category: "تایبەت",
        image: "assets/portfolio-eng.jpg",
        price: "$100",
        features: ["نمایشی کارەکان", "سیستەمی CV", "پەیوەندی واتسئەپ"],
        demoLink: "https://demo.torweb.com/portfolio"
    },
    {
        id: 4,
        title: "قالبى نۆرینگەی پزیشکی",
        category: "پزیشکی",
        image: "assets/medical-template.jpg",
        price: "$200",
        features: ["تۆمارکردنی کات (Booking)", "ناساندنی دکتۆرەکان", "بلۆگی تەندروستی"],
        demoLink: "https://demo.torweb.com/medical"
    }
];

// نیشاندانی قالبەکان لەناو سایتەکەدا
function displayTemplates() {
    const container = document.getElementById('templates-container');
    
    templates.forEach(template => {
        const card = `
            <div class="template-card">
                <img src="${template.image}" alt="${template.title}">
                <div class="info">
                    <h3>${template.title}</h3>
                    <span class="badge">${template.category}</span>
                    <p>نرخ: ${template.price}</p>
                    <button onclick="window.open('${template.demoLink}')">بینینی نموونە</button>
                    <button class="order-btn">داواکردن</button>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

// کاتێک سایتەکە دەکرێتەوە، قالبەکان پیشان بدە
window.onload = displayTemplates;
