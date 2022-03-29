function displayModal() {
    const modal = document.getElementById("contact_modal")
    const main = document.getElementById("main")
    
    modal.style.display = "block"
    modal.setAttribute('aria-hidden', 'false')
    modal.setAttribute("aria-modal", "true");
    modal.focus()
    
    main.setAttribute("aria-hidden", 'true');
    
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    const form = document.getElementById("form_contact");
    const main = document.getElementById("main");
    
    form.reset()
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", 'true');
    modal.setAttribute("aria-modal", "false");
    main.setAttribute("aria-hidden", 'false');
}



class Message {
    constructor() {
        this.message = {
            'firstname': document.getElementById("form_contact_firstname").value,
            'lastname': document.getElementById('form_contact_lastname').value,
            'email': document.getElementById('form_contact_email').value,
            'message': document.getElementById('form_contact_message').value
        }

        this.send()
    }
    
    send() {
        console.log(this.message)
    }

}


    
