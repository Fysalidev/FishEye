const sliderNode = document.querySelector('.slider')
console.log(sliderNode)

const toggleSlider = () => sliderNode.classList.toggle("slider-hidden");

const displaySlider = () => {

  const sliderMediaNodes = document.querySelectorAll(".medium-container");
  console.log(sliderMediaNodes)

  sliderMediaNodes.forEach((node) => {
    node.addEventListener("click", (e) => {
      const target = e.target
      console.log(e.target)

      const attribut = target.getAttribute('src')
      console.log(attribut)
        
      const $wrapper = document.querySelector('.slider-media')
      console.log($wrapper)
      
      const imageSearched = $wrapper.querySelector(`img[src="${attribut}"]`)
      console.log(imageSearched)
      
      const $slideWrapper = imageSearched.parentElement
      console.log($slideWrapper)

      toggleSlider()
      
    });
  });
};

const nextSlide = () => {
  const slidesNode = document.querySelector('.slider-media')
  const oldSlide = document.querySelector('.slide-selected')
  const newSlide = oldSlide.nextElementSibling

  oldSlide.classList.remove('slide-selected').add('hidden')
  
  if(newSlide){
    newSlide.classList.remove('hidden').add('slide-selected')
  } else {
    slidesNode.firstChild.remove('hidden').add('slide-selected')
  }
}


/* let slideIndex = 1;
showDivs(slideIndex); */

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  const x = document.getElementsByClassName("slide");

  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  let i;
  for (i = 0; i < x.length; i++) {
    x[i].classList.add("slide-hidden");
  }
  x[slideIndex - 1].classList.remove("slide-hidden");
}
