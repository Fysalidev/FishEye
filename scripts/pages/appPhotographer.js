class AppPhotographer {
    constructor(){
        this.url = new URLSearchParams(location.search)
        this.urlId = this.url.get("id")
/*         this.$heroWrapper = document.querySelector('.photograph-header')
        this.$mediaWrapper = document.getElementById('main') */
        this.photographerApi = new PhotographersApi('data/photographers.json')
        this.mediaApi = new MediaApi('data/photographers.json')
    }

    async displayPhotographersHero() {
        
        const data = await this.photographerApi.getPhotographers()
        
        data.forEach(data => {
            if (data.id == this.urlId){
                const photographer = new Photographer(data);
                const Template = new PhotographerTemplate(photographer)
                Template.createPhotographerHeader();
            }
        });

    }
    
    async displayMedia(){

        const data = await this.mediaApi.getMedia()
        console.log(data)

        data.forEach(data =>{
            if (data.photographerId == this.urlId){
                const media = new Media(data)
                console.log(media)

                
            }
        })
    }
}

async function init() {
    const page = new AppPhotographer()
    page.displayPhotographersHero()
    page.displayMedia()


}

init();