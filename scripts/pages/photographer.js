const init = async() => {
    
    // Appel Api pour récupérer les data
    const {photographers, media} = await getData()
    console.log(photographers)
    console.log(media)
    
    // Recheche dans l'url pour récupérer un id
    const photographerId = new URLSearchParams(location.search).get('id');
    console.log (photographerId)

    // Récupérer un photographe
    const photographerData = photographers.find(photographer => photographer.id == photographerId)
    console.log(photographerData)

    // Afficher les data du photographe récupéré
    const Template = new Photographer (photographerData)
    Template.createPhotographerHeader()

    // Récupérer les média du photographe
    const mediaData = media.filter(media => media.photographerId == photographerId)
    const mediaSortByLikesDSC = mediaData.sort((a, b) => (a.likes > b.likes ? 1 : -1)).reverse()
    console.log(mediaData)

    // Afficher les media
    mediaSortByLikesDSC.forEach(media => {
        const $mediaWraper = document.querySelector('.photograph-media');
        const medium = new MediaFactory(media);
        $mediaWraper.appendChild(medium.creatHtml());
    });

    const Sorter = new SorterMedia(mediaData)
    Sorter.render()

}

init();