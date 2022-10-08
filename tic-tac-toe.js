"use strict";

window.onload = function(){
    
    let board = document.getElementById("board");

    let sqDivs = board.getElementsByTagName("div");

    [...sqDivs].forEach(function(elem, index) 
    {
        elem.classList.add("square");
        elem.addEventListener("click", () => {
            squareClicked(index);
        });
    });

    let boardLayout = [0,0,0,0,0,0,0,0,0];

    let playerX = 'X';
    let playerO = 'O';
    let currPlayer = 'X';
    

    function squareClicked(e){
        boardLayout[e] = currPlayer;
        if (currPlayer == 'X'){
            sqDivs[e].textContent = playerX;
            sqDivs[e].classList.add("X");
            currPlayer = playerO;
        }else{
            sqDivs[e].textContent = playerO;
            sqDivs[e].classList.add("O");
            currPlayer = playerX;
        }

    }


    

}



