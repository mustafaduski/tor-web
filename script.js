let allTemplates = [];

// لودکرنا داتایان
async function loadTemplates() {
    try {
        const response = await fetch('templates.json');
        allTemplates = await response.json();
        displayTemplates(allTemplates);
    } catch (e) { console.error("Error loading templates!"); }
}

// نیشاندانا قالبان
function displayTemplates(templates) {
    const list = document.getElementById('templateList');
    list.innerHTML = ""; 
    templates.forEach(temp => {
        list.innerHTML += `
            <div class="card">
                <img src="${temp.image}" alt="${temp.name}">
                <h3>${temp.name}</h3>
                <p>بها: ${temp.price}</p>
                <button onclick="selectTemplate('${temp.name}')" style="background: #2563eb; color: white; border: none; padding: 10px 20px; border-radius: 8px; cursor: pointer; margin-bottom: 15px; font-weight: bold;">هەلبژارتن</button>
            </div>`;
    });
}

// فلتەرکرن ب بەشان (Category)
function filterByCategory(category) {
    if (category === 'all') {
        displayTemplates(allTemplates);
    } else {
        const filtered = allTemplates.filter(t => t.category === category);
        displayTemplates(filtered);
    }
}

// گەڕیان ب ناڤی
function searchTemplates() {
    let query = document.getElementById('searchInput').value.toLowerCase();
    const filtered = allTemplates.filter(t => t.name.toLowerCase().includes(query));
    displayTemplates(filtered);
}

// هەلبژارتن
function selectTemplate(name) {
    document.getElementById('tempName').value = name;
    document.getElementById('order-form').scrollIntoView({ behavior: 'smooth' });
}

// ناردن بۆ WhatsApp
function sendToWhatsApp() {
    let myNumber = "9647502293413"; 
    let template = document.getElementById('tempName').value;
    let name = document.getElementById('clientName').value;
    let note = document.getElementById('clientNote').value;

    if(!name || !template) { alert("تکایە ناڤ و قالب هەلبژێرە"); return; }

    let message = `سڵاڤ Tor Web%0Aمن دڤێت وێب سایتەکی دروست بکەم:%0A*قالب:* ${template}%0A*ناڤ:* ${name}%0A*تێبینی:* ${note}`;
    window.open(`https://wa.me/${myNumber}?text=${message}`, '_blank');
}

loadTemplates();
