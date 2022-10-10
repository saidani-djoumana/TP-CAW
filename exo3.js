var boundaries = document.querySelectorAll(".boundary");
var theendwin = document.querySelector("#end");
var success = true;

for(var n = 0; n < boundaries.length; n++){
    boundaries[n].addEventListener("mouseover",function() { 
        success = false;
     this.style.background = "red" ;
    });
}

theendwin.addEventListener("mouseover" , function(){
 if(success == true) {
    alert("You Win !");
 }
})