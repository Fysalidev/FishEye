class Image {
 
    constructor(data){
        
        this.type = "image";
        this.medium = data.image;
        this.id = data.id;
        this.photographerId = data.id;
        this.title = data.title;
        this.likes = data.likes;
        this.date = data.date;
        this.price = data.price;
    }

    creatHtml(){
        
        const card = document.createElement('article')
        
        const mediumContainer = document.createElement('div')
        mediumContainer.classList.add('medium-container')
        
        const infosContainer = document.createElement('div')
        infosContainer.classList.add('infos-container')

        card.classList.add('photograph-medium')
        card.appendChild(mediumContainer)
        card.appendChild(infosContainer)

        const elementMedium = document.createElement('img')
        elementMedium.setAttribute(
          "src",
          `assets/media/${this.medium}`
        );

        mediumContainer.appendChild(elementMedium)

        return card

/*         cardMedium
        .classList.add('medium')
        
        cardInfos
        .classList.add('media-infos')

        const elementForType = document.createElement('p')
        const elementForTitle = document.createElement('p')
        const elementForLikes = document.createElement('span')
        const elementHeartBtn = document.createElement('i')

        elementForType.textContent = this.type;
        elementForTitle.textContent = this.title;
        elementForLikes.textContent = this.likes;
       



        card
        .appendChild(elementForType)
        .appendChild(elementForTitle) */
        
    }
}