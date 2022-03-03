class Photographer {
  
  constructor(data) {
    this._name = data.name
    this._id = data.id
    this._city = data.city
    this._country = data.country
    this._tagline = data.tagline
    this._price = data.price
    this._portrait = data.portrait
    this._url = `http://127.0.0.1:5500/photographer.html?id=${data.id}`;
  }
  
  getName() {
    return this._name
  }

  getId() {
    return this._id
  }

  getCity() {
    return this._city
  }

  getCountry() {
    return this._country
  }

  getTagline() {
    return this._tagline
  }

  getPrice() {
    return this._price
  }

  getPortrait() {
    return this._portrait
  }
  
  getUrl () {
    return this._url
  }

}