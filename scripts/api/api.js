class Api {
  /**
   *
   * @param {string} url
   */
  constructor(url) {
    this._url = url;
  }

  async get() {
    return (
      fetch(this._url)
        .then((res) => res.json())
        .then(res => res)
        .catch((err) => console.log("CALL API | an error occurs", err))
    );
  }
}

class PhotographersApi extends Api {
  /**
   *
   * @param {string} url
   */
  constructor(url) {
    super(url);
  }

  async getPhotographers() {
    const callApi = await this.get();
    return callApi.photographers;
  }
}


class MediaApi extends Api {
  /**
   *
   * @param {string} url
   */
  constructor(url) {
    super(url);
  }

  async getMedia() {
    const callApi = await this.get();
    return callApi.media;
  }
}