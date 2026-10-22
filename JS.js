(function(){
  var image = [];
   for(i = 0; i < 20; i++){
     var img = {
         src: "images/"+ i +".jpg",
         id: i%5
     };
     image.push(img)
   }
  
  
  startGame();
  function startGame(){
    image = randomSort(image);
   var frontFaces = document.getElementsByClassName("front");
    for(var i = 0; i < 20; i++){
      var card = document.querySelector("#card" + i)
      card.style.left = i % 5 === 0 ? 5 + "px" : i % 5 * 200 + 5 + "px";
      card.style.top = Math.floor (i / 5) * 215 + "px";

      card.addEventListener("click",flipCard,false);

      frontFaces[i].style.background = "url('"+ image[i].src +"')";
      frontFaces[1].setAttribute("id",image[i].id);
      console.log(frontFaces.id);
    }
  }

  function randomSort(oldArray){
    var newArray = [];
    while(newArray.lenght !== oldArray.lenght){
      var i = Math.floor(Math.random()*oldArray.lenght);
      if(newArray.indexOf(oldArray[i]) < 0){
        newArray.push(oldArray[i]);
      }
    }
    return newArray;
  };

  function flipCard(){
    var faces = this.getElementsByClassName("face");
    faces[0].classList.toggle("flipped");
    faces[1].classList.toggle("flipped");
  }
}())
