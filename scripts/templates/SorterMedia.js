class SorterMedia {
  constructor(Media) {
    this.media = Media;
    this.$sorterFormWrapper = document.querySelector(".sorter-form-wrapper");
    this.$mediaWrapper = document.querySelector(".photograph-media");
    this.$sliderWrapper = document.querySelector(".slider-media");
  }

  async displayMedia() {
    
    this.$sliderWrapper.innerHTML = "";

    this.media.forEach((media) => {
      const medium = new MediaFactory(media);
      this.$mediaWrapper.appendChild(medium.creatHtml());
      this.$sliderWrapper.appendChild(medium.sliderRender());
      
      heartManager()
    });
  }

  async sorterMedia(orderBy) {
    this.clearMediaWrapper();

    switch (orderBy) {
      case "likes":
        this.media.sort((a, b) => (a.likes > b.likes ? 1 : -1)).reverse();
        break;

      case "date":
        this.media.sort((a, b) => (a.date > b.date ? 1 : -1)).reverse();
        break;

      case "title":
        this.media.sort((a, b) => (a.title > b.title ? 1 : -1));
        break;

      default:
        console.log("OrderBy non valide");
    }

    this.displayMedia();
    displaySlider()
  }

  onChangeSorter() {
    this.$sorterFormWrapper
      .querySelector("select")
      .addEventListener("change", (e) => {
        const orderBy = e.target.value;
        this.sorterMedia(orderBy);
      });
  }

  clearMediaWrapper() {
    this.$mediaWrapper.innerHTML = "";
  }

  render() {
    const sorterForm = `
      <label for="media-select">Trier par</label>
      <select name="media" id="media-select">
      <option value="likes">Popularité</option>
      <option value="date">Date</option>
      <option value="title">Titre</option>
      </select>       
    `
    this.$sorterFormWrapper.innerHTML = sorterForm;
    this.onChangeSorter()
    this.displayMedia()
    displaySlider()
  }
}
