class Video {
  constructor(data) {
    this.type = "video";
    this.medium = data.video;
    this.id = data.id;
    this.photographerId = data.id;
    this.title = data.title;
    this.likes = data.likes;
    this.date = data.date;
    this.price = data.price;
  }

  creatHtml() {
    const card = document.createElement("article")
    card.setAttribute("aria-label", "carte Media")

    const mediumContainer = document.createElement("div")
    mediumContainer.classList.add("medium-container")

    const infosContainer = document.createElement("div")
    infosContainer.classList.add("infos-container")

    card.classList.add("photograph-medium")
    card.appendChild(mediumContainer)
    card.appendChild(infosContainer)

    // Media
    const elementMedium = document.createElement("video");
    elementMedium.setAttribute("src", `assets/media/${this.medium}`)
    elementMedium.setAttribute("tabindex", "0");
    elementMedium.setAttribute("aria-label", "medium")
    elementMedium.setAttribute("alt", `${this.title}`)
    mediumContainer.appendChild(elementMedium)

    //Titre
    const titleCard = document.createElement("h3");
    titleCard.textContent = this.title;
    infosContainer.appendChild(titleCard);

    //Likes
    const elementLikes = document.createElement("div")
    elementLikes.classList.add("likes")
    const elementLikesCount = document.createElement("span")
    elementLikesCount.classList.add("likesCount")
    elementLikesCount.textContent = this.likes;
    const elementLikesBtn = document.createElement("i")
    elementLikesBtn.classList.add("fa-solid", "fa-heart", "heart-btn")
    elementLikesBtn.setAttribute("tabindex", "0")
    elementLikesBtn.setAttribute("aria-label", "like")
    elementLikesBtn.setAttribute("role", "button")
    elementLikes.appendChild(elementLikesCount)
    elementLikes.appendChild(elementLikesBtn)
    infosContainer.appendChild(elementLikes)

    return card;
  }

  sliderRender(){
    
    const slide = document.createElement('div')
    slide.classList.add('slide', 'hidden');
    
    const html = `
      <video controls class="slide-medium" src="assets/media/${this.medium}" alt=${this.title}><p>Votre navigateur ne supporte pas les vid??o HTML5 utilisez ce lien pour visionner la vid??oYour browser doesn't support HTML5 video : 
      <a href="assets/media/${this.medium}">Vid??o</a> instead.</p></video>
      <p class="title">${this.title}</p>
    `;
    slide.innerHTML = html

    return slide
  }
}

