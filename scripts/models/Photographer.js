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

  buildPhotographerCard() {
    const article = document.createElement("article");

    const html = `
      <a href="photographer.html?id=${this.id}">
      <img src="assets/photographers/${this.portrait}" alt="#">
      </a>
      <h2>Mimi Keel</h2>
      <p>${this.city}, ${this.country}</p>
      <p>${this.tagline}</p>
      <p>${this.price}€/Jour</p>
    `

    article.innerHTML = html;

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

    img.setAttribute("src", `assets/photographers/${this.portrait}`);

    portrait.appendChild(img);
  }
}
