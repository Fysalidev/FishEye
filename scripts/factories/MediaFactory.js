class MediaFactory {
  constructor(data) {

    if (data.hasOwnProperty("image")) {
      return new Image(data)
    }

    if (data.hasOwnProperty("video")) {
      return new Video(data)
    }
  }
}
