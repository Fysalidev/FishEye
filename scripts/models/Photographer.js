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
    
    const wrapper = document.querySelector(".photographer_section");
    const article = document.createElement("article");

    const html = `
      <a href="photographer.html?id=${this.id}">
      <div class="photographer-link" alt="${this.name}">
        <img src="assets/photographers/${this.portrait}" alt="#">
        <h2>${this.name}</h2>
      </div>
      </a>
      <p>
        <span class="location">${this.city}, ${this.country}</span><br>
        <span class="tagline">${this.tagline}</span><br>
        <span class="price">${this.price}€/Jour</span><br>
      </p>
    `;
    article.innerHTML = html;
    wrapper.appendChild(article)

  }

  buildPhotographerHeader() {
    const infos = document.querySelector(".photograph-header-infos");

    const h2 = document.createElement("h1");
    const pForLocation = document.createElement("p");
    const pForTagLine = document.createElement("p");

    pForLocation.classList.add('location')
    pForTagLine.classList.add('tagline')

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
