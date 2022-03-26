const init = async () => {
  // id
  const photographerId = new URLSearchParams(location.search).get("id");
  // Data
  const { photographers, media } = await getData();
  const photographerData = photographers.find(
    (photographer) => photographer.id == photographerId
  );
  const mediaData = media.filter(
    (media) => media.photographerId == photographerId
  );

  // Display

  // Build photographer header
  const Template = new Photographer(photographerData);
  Template.buildPhotographerHeader();

  const contactBtn = document.getElementById("modal-btn-open");
  contactBtn.addEventListener("click", (e) => {
    displayModal();
  });
  contactBtn.addEventListener("keydown", (e) => {
    if (e.target === document.activeElement && e.key === "Enter") {
      displayModal();
    }
  });

  // Build and display Media with Sorter
  const Sorter = new SorterMedia(mediaData);
  Sorter.render();
};

init();
