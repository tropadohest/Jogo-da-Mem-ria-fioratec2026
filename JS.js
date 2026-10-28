(function(){
  var image = [];
   for(i = 0; i < 20; i++){
     var img = {
         src: "images/"+ i +".jpg",
         id: i%10
     };
     image.push(img)
   }
  
  
  startGame();
  function startGame(){
    image = randomSort(image);
   var frontFaces = document.getElementsByClassName("front");
    for(var i = 0; i < 20; i++){
      var card = document.querySelector("#card" + i)
      card.style.left = i % 10 === 0 ? 5 + "px" : i % 10 * 200 + 5 + "px";
      card.style.top = i < 10 ? 215 + "px" : 250 + "px";

      card.addEventListener("click",flipCard,false);

      frontFaces[i].style.background = "url('"+ image[i].src +"')";
      frontFaces[1].setAttribute("id",image[i].id);
      console.log(frontFaces.id);
    }
  }

  function randomSort(oldArray){
    var newArray = [];
    while(newArray.length != oldArray.lenght){
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
