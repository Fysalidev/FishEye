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
    const card = document.createElement("article");

    const mediumContainer = document.createElement("div");
    mediumContainer.classList.add("medium-container");

    const infosContainer = document.createElement("div");
    infosContainer.classList.add("infos-container");

    card.classList.add("photograph-medium");
    card.appendChild(mediumContainer);
    card.appendChild(infosContainer);

    const elementMedium = document.createElement("video");
    elementMedium.setAttribute("src", `assets/media/${this.medium}`);

    mediumContainer.appendChild(elementMedium);

    return card;
  }
}
