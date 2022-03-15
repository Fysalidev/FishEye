function displayModal() {
    const modal = document.getElementById("contact_modal");
    const main = document.getElementById('main')
	
    modal.style.display = "block";
    main.style.display = 'none'
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    const main = document.getElementById('main')
    
    modal.style.display = "none";
    main.style.display ='block'
}
