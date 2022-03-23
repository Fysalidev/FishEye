function displayModal() {
    const body = document.getElementsByTagName("body")[0]
    const main = document.getElementById('main')
    const modal = document.getElementById("contact_modal")
    const modalBtnClose = document.getElementById('modal-btn-close')
    console.log(body)

    modal.style.display = "block";
    body.setAttribute('aria-hidden', 'true')
    body.classList.add('no-scroll')
   
       $mainWrapper.attr("aria-hidden", "true");
       $modal.attr("aria-hidden", "false");
       $body.addClass("no-scroll");
       $modal.css("display", "flex");
       $modalCloseBtn.focus();
}

function closeModal() {
    const main = document.getElementById("main");
    const modal = document.getElementById("contact_modal");
    
    modal.style.display = "none";
}
