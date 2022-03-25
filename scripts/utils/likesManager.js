function countLikes() {
  const collection = document.querySelectorAll(".likesCount");
  const resultNode = document.querySelector(".heart-count");

  const likesValues = Array.from(collection).map((item) =>
    parseInt(item.textContent)
  );

  let sum = 0;
  for (let i = 0; i < likesValues.length; i++) {
    sum += likesValues[i];
  }

  resultNode.textContent = sum;
}

function heartManager() {
  const heartNode = document.querySelectorAll(".heart-btn");
  console.log(heartNode);

  heartNode.forEach((element) => {
    element.addEventListener("click", (e) => {
      const isBtnOnclick = e.target.classList.toggle("onclick");

      let numberOfLikes = parseInt(e.target.previousElementSibling.textContent);
      console.log(numberOfLikes);

      isBtnOnclick ? numberOfLikes++ : numberOfLikes--;
      e.target.previousElementSibling.textContent = numberOfLikes;

      countLikes();
    });

    element.addEventListener("keydown", (e)=>{
      if((e.target === document.activeElement) && (e.key === 'Enter')){
        const isBtnOnclick = e.target.classList.toggle("onclick");

        let numberOfLikes = parseInt(
          e.target.previousElementSibling.textContent
        );
        console.log(numberOfLikes);

        isBtnOnclick ? numberOfLikes++ : numberOfLikes--;
        e.target.previousElementSibling.textContent = numberOfLikes;

        countLikes();
      }
    })
  });  
}
