class SorterMedia {
  constructor(Media) {
    this.media = Media;

    this.$wrapper = document.createElement("div");
    this.$sorterFormWrapper = document.querySelector(".sorter-form-wrapper");
    this.$mediaWrapper = document.querySelector(".photograph-media");
  }

  async sorterMedia(sorter){
    this.clearMediaWrapper()

    console.log(sorter)

  }

  onChangeSorter() {
    this.$wrapper.querySelector("form").addEventListener("change", (e) => {
      const sorter = e.target.value;
      this.sorterMedia(sorter);
    });
  }

  clearMediaWrapper() {
    this.$mediaWrapper.innerHTML = "";
  }

  render() {
    const sorterForm = `
            <form action="#" method="POST" class="media.sorter">
                <label for="media-select">Trier par</label>
                <select name="media" id="media-select">
                <option value="likes">Popularité</option>
                <option value="date">Date</option>
                <option value="title">Titre</option>
                </select>
            </form>
        `;

    this.$wrapper.innerHTML = sorterForm;
    this.onChangeSorter()
    this.$sorterFormWrapper.appendChild(this.$wrapper);
  }
}