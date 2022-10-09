"use strict";

window.onload = function(){
    
    let board = document.getElementById("board");

    let sqDivs = board.getElementsByTagName("div");

    let statusMes = document.getElementById("status");

    const ngButton = document.querySelector("button");
    let boardLayout = [0,1,2,3,4,5,6,7,8];

    let playerX = 'X';
    let playerO = 'O';
    let currPlayer = 'X';

    const positionsWin = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    [...sqDivs].forEach(function(elem){
        elem.classList.add("square");
    });
        

    function addingListner(){
        [...sqDivs].forEach(function(elem, index) 
        {  
            elem.addEventListener("click", () => {
                squareClicked(index);
            },{once:true});
        });};

    addingListner();

    

    function squareClicked(e){
        boardLayout[e] = currPlayer;
        if (currPlayer == 'X'){
            sqDivs[e].textContent = playerX;
            sqDivs[e].classList.add("X");
            checkStatus(boardLayout, currPlayer);
            currPlayer = playerO;
        }else{
            sqDivs[e].textContent = playerO;
            sqDivs[e].classList.add("O");
            checkStatus(boardLayout, currPlayer);
            currPlayer = playerX;
        }
    }

    
    function letHover(){
        [...sqDivs].forEach(function(elem) {
            elem.addEventListener('mouseover', function(e) {
            e.target.classList.add('hover');
            });
            
            elem.addEventListener('mouseout', function(e) {
            e.target.classList.remove('hover');
            });
        });};

    letHover();

    

    function checkStatus(boardLayout, currPlayer){
        console.log(boardLayout);
        for (const pos of positionsWin){
            let [a,b,c] = pos;

            if((boardLayout[a] == boardLayout[b]) && (boardLayout[a] == boardLayout[c])){
                statusMes.innerHTML = `Congratulations! ${currPlayer} is the Winner`;
                statusMes.classList.add("you-won");
                [...sqDivs].forEach(function(elem) {
                    elem.style.pointerEvents = "none";
                });
            }
        }
    };

    ngButton.addEventListener("click", function(e) {
        e.preventDefault();
        boardLayout = [0,1,2,3,4,5,6,7,8];


        [...sqDivs].forEach(function(elem, index) {
            elem.removeAttribute("style");
            elem.innerText = '';
            elem.setAttribute("class", "square");
            elem.replaceWith(elem.cloneNode(true));
        });

        currPlayer = 'X';

        statusMes.classList.remove("you-won");
        statusMes.innerHTML = "Move your mouse over a square and click to play an X or an O.";
        addingListner();
        letHover();

    });



    

}



