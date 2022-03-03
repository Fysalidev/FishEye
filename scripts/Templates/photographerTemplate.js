class PhotographerTemplate {
  constructor(photographer) {
    this._photographer = photographer;
  }

  createPhotographerCard() {
    
    const article = document.createElement("article");
    
    const img = document.createElement("img");
    img.setAttribute(
    "src",
    `assets/photographers/${this._photographer.getPortrait()}`
    );
    
    const h2 = document.createElement("h2");
    const pForLocation = document.createElement("p");
    const pForTagLine = document.createElement("p");
    const pForPrice = document.createElement("p");
    const link = document.createElement("a");
    link.setAttribute("href", this._photographer.getUrl());

    h2.textContent = this._photographer.getName();
    pForLocation.textContent = `${this._photographer.getCity()}, ${this._photographer.getCountry()}`;
    pForTagLine.textContent = this._photographer.getTagline();
    pForPrice.textContent = `${this._photographer.getPrice()}€/Jour`;
    link.textContent = "ici";

    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(pForLocation);
    article.appendChild(pForTagLine);
    article.appendChild(pForPrice);
    article.appendChild(link);

    return article;
  }

 createPhotographerHeader() {
  const infos = document.querySelector('.photograph-header-infos');
  const h2 = document.createElement('h2');
  const pForLocation = document.createElement('p');
  const pForTagLine = document.createElement('p');

  h2.textContent = this._photographer.getName();
  pForLocation.textContent = `${this._photographer.getCity()}, ${this._photographer.getCountry()}`;
  pForTagLine.textContent = this._photographer.getTagline();

  infos.appendChild(h2);
  infos.appendChild(pForLocation);
  infos.appendChild(pForTagLine);

  const portrait = document.querySelector(".photograph-header-portrait");
  const img = document.createElement("img");
  img.setAttribute(
    "src",
    `assets/photographers/${this._photographer.getPortrait()}`
  );

  portrait.appendChild(img)

  }

}
