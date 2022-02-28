class AppIndex{
    constructor() {
        this.$cardsWrapper = document.querySelector('.photographer_section')
        this.photographersApi = new PhotographersApi('data/photographers.json')

        }

        async displayPhotographers(){
            
            const photographersData = await this.photographersApi.getPhotographers()
            
            photographersData
            .map(photographer => new Photographer(photographer))
            .forEach((photographer) => {
                const Template = new PhotographerCard(photographer);
                this.$cardsWrapper.appendChild(
                  Template.createPhotographerCard()
                )
            });
        }
    }

    async function init() {
        const index = new AppIndex()
        index.displayPhotographers()

    }

    init();

    