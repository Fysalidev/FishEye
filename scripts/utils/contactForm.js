function displayModal() {
    const modal = document.getElementById("contact_modal")
    const main = document.getElementById("main")
    
    modal.style.display = "block"
    modal.setAttribute('aria-hidden', 'false')
    modal.setAttribute("aria-modal", "true");
    modal.focus()
    
    main.setAttribute("aria-hidden", 'false');
    
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    const main = document.getElementById("main");
    
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", 'true');
    main.setAttribute("aria-hidden", 'false');
}

