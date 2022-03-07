const init = async() => {
    
    const {photographers} = await getData()
    const wrapper = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
      const Template = new Photographer(photographer);
      wrapper.appendChild(Template.createPhotographerCard());
    });
}

init();

    