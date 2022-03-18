function countLikes() {
  const collection = document.querySelectorAll(".likesCount");
  const resultNode = document.querySelector(".heart-count");
  console.log(resultNode);
  console.log(collection);
  const likesValues = Array.from(collection).map((item) =>
    parseInt(item.textContent)
  );

  let sum = 0;

  for (let i = 0; i < likesValues.length; i++) {
    sum += likesValues[i];
  }

  resultNode.textContent = sum;
}

function heartManager(){

  const heartNode = document.querySelectorAll(".heart-btn");
  console.log(heartNode);
  
  heartNode.forEach((element) => {
    element.addEventListener("click", (e) => {
      console.log(e.target);
      const isBtnOnclick = e.target.classList.toggle("onclick");
      console.log(isBtnOnclick);
  
      let numberOfLikes = parseInt(e.target.previousElementSibling.textContentgit);
      console.log(numberOfLikes);
  
      isBtnOnclick ? numberOfLikes++ : numberOfLikes--;
  
      console.log(numberOfLikes);
  
      e.target.previousElementSibling.textContent = numberOfLikes;
  
      countLikes();
    });
  });
}

