var boundaries = document.querySelectorAll(".boundary");


for(var n = 0; n < boundaries.length; n++){
    boundaries[n].addEventListener("mouseover",function() { 
     this.style.background = "red" ;
    });
}