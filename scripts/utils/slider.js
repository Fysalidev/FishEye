const main = document.getElementById('main')
const sliderNode = document.querySelector('.slider')
const slidesNode = document.querySelector(".slider-media");

const openSlider = () => {
  main.classList.toggle('hidden')
  sliderNode.classList.toggle('hidden')
  document.querySelector('.widget').classList.toggle('hidden')

}
  
const closeSlider = () => {
  main.classList.toggle("hidden");
  sliderNode.classList.toggle("hidden")
  slidesNode.querySelector('.visible').classList.replace('visible', 'hidden')
  document.querySelector(".widget").classList.toggle("hidden");

}

const displaySlider = () => {

  const sliderMediaNodes = document.querySelectorAll(".medium-container");

  sliderMediaNodes.forEach((node) => {
    node.addEventListener("click", (e) => {
      const attribut = e.target.getAttribute('src')    
      const imageSlider = document.querySelector(".slider-media").querySelector(`[src="${attribut}"]`);
      imageSlider.parentElement.classList.replace("hidden", "visible");
      openSlider()
    });
  });
};

const nextSlide = (option) => {
  
  const oldSlide = document.querySelector('.visible')
  
  oldSlide.classList.replace('visible', 'hidden')    

  if(option === 'left'){

    (oldSlide.previousElementSibling)
      ? oldSlide.previousElementSibling.classList.replace("hidden", "visible")
      : slidesNode.lastChild.classList.replace("hidden", "visible")
    }
    
  if(option === 'right'){
      
    (oldSlide.nextElementSibling)
    ? oldSlide.nextElementSibling.classList.replace("hidden", "visible")
    : slidesNode.firstChild.classList.replace("hidden", "visible")
  }

}
