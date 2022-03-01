class appPhotographer {

}

async function init() {

    const URLSearchParam = new URLSearchParams(location.search);
    const photographerId = URLSearchParam.get('id');
    console.log(photographerId)
    
    if (photographerId === null){
        location = 'index.html'
    }
}

init();