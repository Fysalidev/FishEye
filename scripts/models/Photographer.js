class Photographer {
  
  constructor(data) {
    this.name = data.name;
    this.id = data.id;
    this.city = data.city;
    this.country = data.country;
    this.tagline = data.tagline;
    this.price = data.price;
    this.portrait = data.portrait;
  }

  createPhotographerCard() {
    const article = document.createElement("article");

    const img = document.createElement("img");
    img.setAttribute(
      "src",
      `assets/photographers/${this.portrait}`
    );

    const h2 = document.createElement("h2");
    const pForLocation = document.createElement("p");
    const pForTagLine = document.createElement("p");
    const pForPrice = document.createElement("p");
    const link = document.createElement("a");
    link.setAttribute("href", `photographer.html?id=${this.id}`);

    h2.textContent = this.name;
    pForLocation.textContent = `${this.city}, ${this.country}`;
    pForTagLine.textContent = this.tagline;
    pForPrice.textContent = `${this.price}€/Jour`;
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
    
    const infos = document.querySelector(".photograph-header-infos");
    
    const h2 = document.createElement("h2");
    const pForLocation = document.createElement("p");
    const pForTagLine = document.createElement("p");

    h2.textContent = this.name;
    pForLocation.textContent = `${this.city}, ${this.country}`;
    pForTagLine.textContent = this.tagline;

    infos.appendChild(h2);
    infos.appendChild(pForLocation);
    infos.appendChild(pForTagLine);

    const portrait = document.querySelector(".photograph-header-portrait");
    const img = document.createElement("img");
    
    img.setAttribute(
      "src",
      `assets/photographers/${this.portrait}`
    );

    portrait.appendChild(img);
  }
}
