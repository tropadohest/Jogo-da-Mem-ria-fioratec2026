(function(){
  var matches = 0;
  var image = [];
  var flippedCards = [];
  var imgMatchSign = document.querySelector("#imgMatchSign");
  var modalGameOver = document.querySelector("#modalGameOver");
  var errorCounter = 0;
  var pp1var = document.querySelector('#pp1');
  
  
   for(var i = 0; i < 20; i++){
     var img = {
         src: "images/"+ i +".jpg",
         id: i%10
     };
     image.push(img)
   }
  
  
  startGame();
  function startGame(){
    matches = 0;
    
    flippedCards = [];
    image = randomSort(image);
   var frontFaces = document.getElementsByClassName("front");
   var backFaces = document.getElementsByClassName("back");
    for(var i = 0; i < 20; i++){
      frontFaces[i].classList.remove("flipped", "match");
      backFaces[i].classList.remove("flipped" , "match");
	  errorCounter = 0;
	  matches = 0;
	  modalGameOver.style.opacity = 0;
	  pp1Func()
	  pp1var.innerText = matches * + 10 + "%";
	  document.querySelector('#containerError').innerText = "A quantidade de acertos é: " + errorCounter;
	  document.querySelector('#containerMatch').innerText = "A quantidade de acertos é: " + matches;
	  document.querySelector('#containerProgress').style.width = matches * 10 + "%";
      var card = document.querySelector("#card" + i);
      card.style.left = i % 5 === 0 ? 5 + "px" : i % 5 * 165 + 5 + "px";
      card.style.top = Math.floor (i / 5) * 215 + "px";
      card.addEventListener("click",flipCard,false);

      frontFaces[i].style.background = "url('"+ image[i].src +"')";
      frontFaces[i].setAttribute("id",image[i].id);
      console.log(frontFaces.id);
    }
    document.querySelector('body').style.backgroundColor = "rgb(194,155,158)";
    modalGameOver.style.zIndex = -5
    modalGameOver.style.width = 0 + "px";
    modalGameOver.style.height = 0 + "px";
    modalGameOver.removeEventListener('click',startGame,false);
  }

  function randomSort(oldArray){
    var newArray = [];
    while(newArray.length != oldArray.length){
      var i = Math.floor(Math.random()*oldArray.length);
      if(newArray.indexOf(oldArray[i]) < 0){
        newArray.push(oldArray[i]);
      }
    }
    return newArray;
  };

  function flipCard(){
    if(flippedCards.length < 2){
      var faces = this.getElementsByClassName("face");
      
      if(faces[0].classList.length > 2){
        return;
      };
      
      faces[0].classList.toggle("flipped");
      faces[1].classList.toggle("flipped");
      
      flippedCards.push(this);
      
      
      if(flippedCards.length === 2){
        if(flippedCards[0].childNodes[3].id === flippedCards[1].childNodes[3].id){
         flippedCards[0].childNodes[1].classList.toggle("match");
         flippedCards[0].childNodes[3].classList.toggle("match");
         flippedCards[1].childNodes[1].classList.toggle("match");
         flippedCards[1].childNodes[3].classList.toggle("match");
         matchCardSign();
         matches++;
         console.log("Numero de acertos: " + matches);
		 document.querySelector('#containerMatch').innerText = "A quantidade de acertos é: " + matches;
		 document.querySelector('#containerProgress').style.width = matches * 10 + "%";
		 pp1var.innerText = matches * + 10 + "%";
		 flippedCards = [];
		 pp1Func();
         if(matches === 10){
           console.log("GameOverFunc Foi em, se n foi foi em outro lugar jj pegkmae´lgjm")
           gameOver();
          }
        } else {
		 function autoFlip() {
			  errorCounter++
			  console.log("ENTREI NA AUTOFLIP")
               setTimeout(() => {
			   console.log(flippedCards)
               flippedCards[0].childNodes[1].classList.toggle("flipped");
               flippedCards[0].childNodes[3].classList.toggle("flipped");
               flippedCards[1].childNodes[1].classList.toggle("flipped");
               flippedCards[1].childNodes[3].classList.toggle("flipped");
               document.querySelector('#containerError').innerText = "A quantidade de erros é: " + errorCounter;
          flippedCards = [];
    }, 2500);
}
autoFlip();
    } 
      }
      
	  } 
  }
  
  function gameOver(){
    modalGameOver.style.width = 100 + "vw";
    modalGameOver.style.height = 100 + "vh";
    modalGameOver.style.zIndex = 67;
    modalGameOver.style.opacity = 1;
    modalGameOver.addEventListener('click',startGame,false)
  }
  function matchCardSign(){
    imgMatchSign.style.zIndex = 67;
    imgMatchSign.style.opacity = 0;
  setTimeout(function(){
     imgMatchSign.style.zIndex = -6;
     imgMatchSign.style.opacity = 1;
  },1500)
  }
  function pp1Func(){
     if(matches == 10){
		 pp1var.style.color = "blue";
	 } else if (matches <= 9 && matches >= 3){
		 pp1var.style.color = "yellow";
	 } else {
		 pp1var.style.color = "orange";
	 }
  }
}())
