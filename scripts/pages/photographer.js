const init = async () => {
  // id
  const photographerId = new URLSearchParams(location.search).get("id");
  
  // Build Data
  const { photographers, media } = await getData();
  const photographerData = photographers.find(
    (photographer) => photographer.id == photographerId
  );
  const mediaData = media.filter(
    (media) => media.photographerId == photographerId
  );

  // Build photographer header
  const Template = new Photographer(photographerData);
  Template.buildPhotographerHeader()
  Template.addPhotographerNameOnContactForm()

  // Event Modal Btn
  const modal = document.getElementById('contact_modal')
  const contactBtn = document.getElementById('header-btn');
  const modalCloseBtn = document.getElementById('modal-btn-close')
  const submitBtn = document.getElementById("form_contact_btn-submit");
  
  contactBtn.addEventListener("click", (e) => {
    displayModal();
  })

  contactBtn.addEventListener("keydown", (e) => {
    if (e.target === document.activeElement && e.key === "Enter") {
      displayModal();
    }
  })

  modalCloseBtn.addEventListener('click', (e) => {
    closeModal()
  })

  modalCloseBtn.addEventListener('keydown',(e) =>{
    if(e.target === document.activeElement && e.key ==="Enter"){
      closeModal()
    }
  })

  submitBtn.addEventListener('keydown', (e) => {
    if (e.target === document.activeElement && e.key === "Tab") {
      e.preventDefault();
      modalCloseBtn.focus();
    }
  })

  document.addEventListener("keydown", (e) => {
    if (modal.ariaHidden === "false" && e.key === "Escape") {
      closeModal();
    }
  });

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    new Message
    closeModal()
  })

  submitBtn.addEventListener('keydown', (e) => {
    if (e.target === document.activeElement && e.key === "Enter") {
      new Message
      closeModal()
    }
  })
  
  // Build Sorter and Media
  const Sorter = new SorterMedia(mediaData);
  Sorter.render();
};

init();
