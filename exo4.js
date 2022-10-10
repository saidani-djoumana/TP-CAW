var boundaries = document.querySelectorAll(".boundary");
var theendwin = document.querySelector("#end");
var success = true;
var restart = document.querySelector("#start");


restart.addEventListener("mouseover", function(){
     for(var n = 0; n < boundaries.length; n++){
        boundaries[n].addEventListener("mouseover",function() { 
         success = false;
         this.style.background = "red" ;
         alert("You Lose !");
         this.style.background = "#eeeeee" ;
     });
 }
  });

theendwin.addEventListener("mouseover" , function(){
 if(success == true) {
    alert("You Win !");
}
})