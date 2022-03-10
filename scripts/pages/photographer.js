const init = async() => {
    // id
    const photographerId = new URLSearchParams(location.search).get('id');
    // Data
    const {photographers, media} = await getData()
    const photographerData = photographers.find(photographer => photographer.id == photographerId)
    const mediaData = media.filter(media => media.photographerId == photographerId)

    // Display
    const Template = new Photographer (photographerData)
    Template.createPhotographerHeader()

    const Sorter = new SorterMedia(mediaData)
    Sorter.render()

}

init();