class PhotographerCard{    
    constructor(photographer){
        this._photographer = photographer
    }

    createPhotographerCard(){
        const article = document.createElement("article");
        const img = document.createElement("img");
        const h2 = document.createElement("h2");
        const pForLocation = document.createElement("p");
        const pForTagLine = document.createElement("p");
        const pForPrice = document.createElement("p");
        const   link = document.createElement('a');
        link.setAttribute('href', this._photographer.url);

        
        img.setAttribute("src",`assets/photographers/${this._photographer.portrait}`);
        h2.textContent = this._photographer.name;
        pForLocation.textContent = `${this._photographer.city}, ${this._photographer.country}`;
        pForTagLine.textContent = this._photographer.tagline;
        pForPrice.textContent = `${this._photographer.price}€/Jour`;
        link.textContent = 'ici'


        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(pForLocation);
        article.appendChild(pForTagLine);
        article.appendChild(pForPrice);
        article.appendChild(link);

        return (article);
    }
}