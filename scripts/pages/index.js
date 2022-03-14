const init = async() => {
    
    const {photographers} = await getData()

    photographers.forEach((photographer) => {
      const Template = new Photographer(photographer);
      Template.buildPhotographerCard()
    });
}

init();

    