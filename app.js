const gameboard = document.getElementById("gameboard");
const playerDisplay = document.getElementById("player");
const infoDisplay = document.getElementById("info-display");
const width = 8

const startPieces = [
    rook, knight, bishop, queen, king, bishop, knight, rook,
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn, 
    "", "", "", "", "", "", "", "", 
    "", "", "", "", "", "", "", "", 
    "", "", "", "", "", "", "", "", 
    "", "", "", "", "", "", "", "", 
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    rook, knight, bishop, queen, king, bishop, knight, rook
];

function createBoard(){
    startPieces.forEach((startPiece, i)=>{
        const square = document.createElement('div');
        square.classList.add('square');
        square.classList.add('beige');
        if(Math.floor((63-i)/8)%2 == 0){
            if(i%2 == 0){
                square.classList.add('beige');
            }
            else{
                square.classList.add('brown');
            }
        }
        else{
            if(i%2){
                square.classList.add('beige');
            }
            else{
                square.classList.add('brown');
            }

        }
        square.innerHTML = startPiece;
        square.firstChild?.setAttribute('draggable', true)
        square.setAttribute('square-id', i);

        
        if(i<=15){
            square.firstChild.firstChild.classList.add('black');
        }
        else if(i>=64-16){
            square.firstChild.firstChild.classList.add('white');

        }
        
        gameboard.appendChild(square);
    
    })
}

function loadChess(){
    
    createBoard();
    console.log("1");

    console.log("2");


}