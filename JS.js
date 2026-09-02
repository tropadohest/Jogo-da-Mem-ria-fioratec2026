(function(){
  startGame();
  function startGame(){
    for(var i = 0; i < 20; i++){
      var card = document.querySelector("#card" + i)
      card.style.left = i % 5 === 0 ? 5 + "px" : i % 5 * 200 + 5 + "px";
      card.style.top = Math.floor (i / 5) * 215 + "px";

      card.addEventListener("click",flipCard,false);
    }
  }

  function flipCard(){
    var faces = this.getElementsByClassName("face");
    faces[0].classList.toggle("flipped");
    faces[1].classList.toggle("flipped");
    console.log(faces[0].classList);
  }
}())