const main = document.getElementById("main")
const sliderNode = document.getElementById('slider')
const slidesNode = document.querySelector(".slider-media")
const closeBtn = document.querySelector('.slider_btn-close')
const leftBtn = document.querySelector(".slider_btn-left")
const rigthBtn = document.querySelector(".slider_btn-right")


// Open slider on position
const openSlider = () => {
  main.classList.toggle("hidden");
  sliderNode.classList.toggle("hidden");
  sliderNode.setAttribute('aria-hidden', 'false')
  document.querySelector(".widget").classList.toggle("hidden");
};

// Close slider
const closeSlider = () => {
  main.classList.toggle("hidden");
  sliderNode.classList.toggle("hidden");
  sliderNode.setAttribute("aria-hidden", "true");
  slidesNode.querySelector(".visible").classList.replace("visible", "hidden");
  document.querySelector(".widget").classList.toggle("hidden");
};


// Find slider position before opening
const selectStartPosition = (node) => {
  console.log("Ouvre le slider");
  const attribut = node.getAttribute("src");
  const imageSlider = document
    .querySelector(".slider-media")
    .querySelector(`[src="${attribut}"]`);
  imageSlider.parentElement.classList.replace("hidden", "visible");
  openSlider();
};

// Navigate

const nextSlide = () => {
  const slide = document.querySelector(".visible");
  slide.classList.replace("visible", "hidden");
  slide.nextElementSibling
    ? slide.nextElementSibling.classList.replace("hidden", "visible")
    : slidesNode.firstChild.classList.replace("hidden", "visible");
};

const previousSlide = () => {
  const slide = document.querySelector(".visible");
  slide.classList.replace("visible", "hidden");
  slide.previousElementSibling
    ? slide.previousElementSibling.classList.replace("hidden", "visible")
    : slidesNode.lastChild.classList.replace("hidden", "visible");
};

// Event - Opening

const displaySlider = () => {
  const sliderMediaNodes = document.querySelectorAll(".medium-container img");

  sliderMediaNodes.forEach((node) => {
    node.addEventListener("click", (event) => {
      selectStartPosition(event.target);
    });

    node.addEventListener("focus", (event) => {
      event.target.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          selectStartPosition(event.target)
        }
      });
    });
  });
};

// Event - closing

closeBtn.addEventListener('click', closeSlider)

closeBtn.addEventListener('focus', (event) => {
  event.target.addEventListener('keydown', (event)=> {
    if (!sliderNode.hasAttribute('hidden' && event.key === 'Enter')){
      closeSlider()
    }
  })
})

document.addEventListener('keydown', (e) => {
  if ((sliderNode.ariaHidden === 'false') && (e.key === "Escape")) {
    closeSlider();
  }
});

// Event - Navigation

leftBtn.addEventListener('click',previousSlide)
rigthBtn.addEventListener('click', nextSlide)

document.addEventListener('keydown',(e)=>{
  if((sliderNode.ariaHidden === 'false') && (e.key === "ArrowLeft")){
    previousSlide()
  }
})

document.addEventListener("keydown", (e) => {
  if (sliderNode.ariaHidden === "false" && e.key === "ArrowRight") {
    nextSlide();
  }
});








/* const nextSlideX = (option) => {
  const oldSlide = document.querySelector(".visible");

  oldSlide.classList.replace("visible", "hidden");

  if (option === "left") {
    oldSlide.previousElementSibling
      ? oldSlide.previousElementSibling.classList.replace("hidden", "visible")
      : slidesNode.lastChild.classList.replace("hidden", "visible");
  }

  if (option === "right") {
    oldSlide.nextElementSibling
      ? oldSlide.nextElementSibling.classList.replace("hidden", "visible")
      : slidesNode.firstChild.classList.replace("hidden", "visible")
  }
}; */




