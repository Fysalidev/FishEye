const init = async() => {
    // id
    const photographerId = new URLSearchParams(location.search).get('id');
    // Data
    const {photographers, media} = await getData()
    const photographerData = photographers.find(photographer => photographer.id == photographerId)
    const mediaData = media.filter(media => media.photographerId == photographerId)

    // Display

    // Build and display photographer header
    const Template = new Photographer (photographerData)
    Template.buildPhotographerHeader()

    // Build and display Media with Sorter
    const Sorter = new SorterMedia(mediaData)
    Sorter.render()

    

    

    // Event

}

init();