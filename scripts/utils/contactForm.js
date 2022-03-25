function displayModal() {
    const body = document.getElementsByTagName("body")[0]
    const main = document.getElementById('main')
    const modal = document.getElementById("contact_modal")
    const modalBtnClose = document.getElementById('modal-btn-close')

    modal.style.display = "block";
    body.setAttribute('aria-hidden', 'true')
    body.classList.add('no-scroll')
}

function closeModal() {
    const main = document.getElementById("main");
    const modal = document.getElementById("contact_modal");
    
    modal.style.display = "none";
}
