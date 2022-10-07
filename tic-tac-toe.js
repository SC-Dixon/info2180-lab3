"use strict";

window.onload = function(){
    
    let board = document.getElementById("board");

    let sqDivs = board.getElementsByTagName("div");

    [...sqDivs].forEach(function(elem) 
    {
        elem.classList.add("square");
    });


}



