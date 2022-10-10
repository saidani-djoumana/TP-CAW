var boundaries = document.querySelectorAll(".boundary");
var theendwin = document.querySelector("#end");
var success = true;
var restart = document.querySelector("#start");
var status = document.querySelector("#status");

restart.addEventListener("mouseover", function(){
    document.getElementById("status").innerHTML = "You Lose !";
     for(var n = 0; n < boundaries.length; n++){
        boundaries[n].addEventListener("mouseover",function() { 
         success = false;
         this.style.background = "red" ;
         alert("You Lose !");
         this.style.background = "#eeeeee" ;
         document.getElementById("status").innerHTML = "You Lose !";
     });
 }
  });


theendwin.addEventListener("mouseover" , function(){
 if(success == true) {
    document.getElementById("status").innerHTML = "You Win !";
      alert("You Win !");
}
})