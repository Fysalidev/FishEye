class AppPhotographer {
    constructor(){
        this.url = new URLSearchParams(location.search)
        this.urlId = this.url.get("id")
        this.$heroWrapper = document.querySelector('.photograph-header')
        this.$mediaWrapper = document.getElementById('main')
        this.api = new PhotographersApi("data/photographers.json")
    }

    async displayPhotographersHero() {
        
        const data = await this.api.getPhotographers()
        
        data.forEach(data => {
            if (data.id == this.urlId){
                const photographer = new Photographer(data);
                const Template = new PhotographerTemplate(photographer)
                Template.createPhotographerHeader();
            }
        });

    }    
}

async function init() {
    const page = new AppPhotographer()
    page.displayPhotographersHero()

}

init();