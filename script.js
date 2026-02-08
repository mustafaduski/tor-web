function selectTemplate(name) {
    document.getElementById('tempName').value = name;
    window.scrollTo(0, document.body.scrollHeight); // دێ چیتە سەر فۆرمی
}

document.getElementById('webForm').onsubmit = function(e) {
    e.preventDefault();
    alert("سوپاس! داخوازی هاتە وەرگرتن. دێ پەیوەندیێ ب تە کەین.");
};
