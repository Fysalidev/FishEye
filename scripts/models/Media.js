class Media {
    constructor(data){
        this._id = data.id
        this._photographerId = data.id;
        this._title = data.title;
        this._likes = data.likes;
        this._date = data.date;
        this._price = data.price;

        if(data.hasOwnProperty('image')){
            this._type = 'image'
            this._media = data.image
        }

        if(data.hasOwnProperty('video')) {
            this._type = 'video';
            this._media = data.video;
        }
    }

    getTitle(){
        return this._title
    }
}

class Image {
 constructor(data){
     this._id = data.id;
     this._photographerId = data.id;
     this._title = data.title;
     this._likes = data.likes;
     this._date = data.date;
     this._price = data.price;
 }

 creatHtml(){
     return `html ici....`
 }
}

class Video {
  constructor(data) {
    this._id = data.id;
    this._photographerId = data.id;
    this._title = data.title;
    this._likes = data.likes;
    this._date = data.date;
    this._price = data.price;
  }

  creatHtml() {
    return `html ici....`;
  }
}