// لودکردنا قالبان ژ فایلێ JSON
async function loadTemplates() {
    try {
        const response = await fetch('templates.json');
        const templates = await response.json();
        displayTemplates(templates);
    } catch (error) {
        console.error("Error loading templates:", error);
    }
}

function displayTemplates(templates) {
    const list = document.getElementById('templateList');
    list.innerHTML = ""; 

    templates.forEach(temp => {
        const card = `
            <div class="card">
                <img src="${temp.image}" alt="${temp.name}">
                <h3>${temp.name}</h3>
                <p>بها: ${temp.price}</p>
                <button class="wa-btn" style="background-color: #2563eb; margin-bottom: 15px;" 
                        onclick="selectTemplate('${temp.name}')">هەلبژارتن</button>
            </div>
        `;
        list.innerHTML += card;
    });
}

async function searchTemplates() {
    let query = document.getElementById('searchInput').value.toLowerCase();
    const response = await fetch('templates.json');
    const templates = await response.json();
    const filtered = templates.filter(t => t.name.toLowerCase().includes(query) || t.category.toLowerCase().includes(query));
    displayTemplates(filtered);
}

function selectTemplate(name) {
    document.getElementById('tempName').value = name;
    document.getElementById('order-form').scrollIntoView({ behavior: 'smooth' });
}

function sendToWhatsApp() {
    let myNumber = "9647502293413"; // ژمارا خۆ لێرە دانێ
    let template = document.getElementById('tempName').value;
    let name = document.getElementById('clientName').value;
    let note = document.getElementById('clientNote').value;

    if(!name || !template) {
        alert("تکایە ناڤ و قالب هەلبژێرە");
        return;
    }

    let message = `سڵاڤ Tor Web%0Aمن دڤێت وێب سایتەکی دروست بکەم:%0A%0A*قالب:* ${template}%0A*ناڤ:* ${name}%0A*تێبینی:* ${note}`;
    window.open(`https://wa.me/${myNumber}?text=${message}`, '_blank');
}

loadTemplates();
