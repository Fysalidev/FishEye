const init = async() => {
    
    // Appel Api pour récupérer les data
    const {photographers, media} = await getData()
    console.log(photographers)
    console.log(media)
    
    // Recheche dans l'url pour récupérer un id
    const photographerId = new URLSearchParams(location.search).get('id');
    console.log (photographerId)

    // Récupérer un photographe
    const photographerData = photographers.find(photographer => photographer.id == photographerId);
    console.log(photographerData)

    // Afficher les data du photographe récupéré
    const Template = new Photographer (photographerData)
    Template.createPhotographerHeader()

    // Récupérer les média du photographe

    const mediaData = media.filter(media => media.photographerId == photographerId)
    console.log(mediaData)

    // Afficher les media
    mediaData.forEach(media => {
        /* Appel à la factory pour construire un Media vidéo ou image */
    });

}

init();