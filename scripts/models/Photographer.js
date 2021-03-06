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
      <div class="photographer-link">
        <img src="assets/photographers/${this.portrait}" alt="${this.name}">
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
    wrapper.appendChild(article);
  }

  buildPhotographerHeader() {

    const $pageWrapper = document.querySelector(".photograph-header");
 
    const html = `
      <article>
        <div class="photograph-header-infos">
          <h1>${this.name}</h1>
          <p class="location">${this.city}, ${this.country}</p>
          <p class="tagline">${this.tagline}</p>
        </div>
        <button id="header-btn"class="contact_button">Contactez-moi</button>
        <div class="photograph-header-portrait">
          <img src="assets/photographers/${this.portrait}" alt="portrait ${this.name}">
        </div>
      </article>
    `;

    $pageWrapper.innerHTML = html

  }

  addPhotographerNameOnContactForm(){

    const $pageWrapper = document.getElementById('modal-header-photographer-name')
    $pageWrapper.innerHTML = this.name
    
  }

  addPriceOnWidget(){

  const $pageWrapper = document.getElementById('widget-price')
  $pageWrapper.innerHTML = this.price  
    
  }

}
