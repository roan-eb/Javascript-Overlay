const yellow = document.getElementById("js--yellow");
const blue = document.getElementById("js--blue");
const orange = document.getElementById("js--orange");
const brown = document.getElementById("js--brown");

const shoes = document.getElementsByClassName("product");

yellow.onclick = function(){
    for(let i = 0; i < shoes.length; i++){
        shoes[i].style.display = "none";
    }
    document.getElementById("js--yellowModal").style.display = "grid";
}

const closeYellowModal = document.getElementById("js--closeYellow");
closeYellowModal.onclick = function(){
    document.getElementById("js--yellowModal").style.display = "none";
    for(let i = 0; i < shoes.length; i++){
        shoes[i].style.display = "block";
    }
}

blue.onclick = function(){
    for(let i = 0; i < shoes.length; i++){
        shoes[i].style.display = "none";
    }
    document.getElementById("js--blueModal").style.display = "grid";
}

const closeBlueModal = document.getElementById("js--closeBlue");
closeBlueModal.onclick = function(){
    document.getElementById("js--blueModal").style.display = "none";
    for(let i = 0; i < shoes.length; i++){
        shoes[i].style.display = "block";
    }
}

orange.onclick = function(){
    for(let i = 0; i < shoes.length; i++){
        shoes[i].style.display = "none";
    }
    document.getElementById("js--orangeModal").style.display = "grid";
}

const closeOrangeModal = document.getElementById("js--closeOrange");
closeOrangeModal.onclick = function(){
    document.getElementById("js--orangeModal").style.display = "none";
    for(let i = 0; i < shoes.length; i++){
        shoes[i].style.display = "block";
    }
}

brown.onclick = function(){
    for(let i = 0; i < shoes.length; i++){
        shoes[i].style.display = "none";
    }
    document.getElementById("js--brownModal").style.display = "grid";
}

const closeBrownModal = document.getElementById("js--closeBrown");
closeBrownModal.onclick = function(){
    document.getElementById("js--brownModal").style.display = "none";
    for(let i = 0; i < shoes.length; i++){
        shoes[i].style.display = "block";
    }
}