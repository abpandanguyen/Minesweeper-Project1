/*----- constants -----*/
const mineCount = 10;
const columns = 8;
const rows = 8;


/*----- app's state (variables) -----*/
var gameStatus = false; // false is game in play, true is game over whether win or lose
var minefieldTile = [
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
];
var clickedTiles;

/*----- cached element references -----*/
const resetButton = document.querySelector("button");
const minefield = document.getElementById("minefield");


/*----- event listeners -----*/
minefield.addEventListener('click', clickTile);
minefield.addEventListener('contextmenu', clickFlag);
resetButton.addEventListener('click', init);



/*----- functions -----*/
init();

function init() {
    gameStatus = false;
    resetButton.innerText = "Reset";
    for (let r = 0; r < rows; r++) { 
        for (let c = 0; c < columns; c++) { // double for loop to fill grid
            let tile = {isMine: false, adjacentMineCount: 0, clicked: false, flagStatus: false}; //id property is connected to the html grid
            minefieldTile[r][c] = tile;
            let div = document.getElementById(`${r}-${c}`);
            div.style.backgroundColor = "white";
            div.innerText = "";
        }
    }
    setMinefield();
    setAdjacentMineCount();
    clickedTiles = 0;
};


function setMinefield() {
    let minesRemain = mineCount // declaring new variable
    while (minesRemain > 0) { // while makes sure the loop continues until condition met
        let r = Math.floor(Math.random()*rows); 
        let c = Math.floor(Math.random()*columns); //calculating and assigning random r and c variables to put as 'coordinates'
        if (minefieldTile[r][c].isMine == false) {
            minesRemain --;
            minefieldTile[r][c].isMine = true; // function found index so we can modify target array value appropriately
        }
    }
    console.log (minefieldTile);        
};

function setAdjacentMineCount() {
        for (let r = 0; r < rows; r++) { 
            for (let c = 0; c < columns; c++) {
                mineCounter(r, c);                
        }
    }
};

function mineCounter(r, c) { // function to check each adjacent cell
    let topRow = r-1;
    let topColumn = c;

    let topLeftRow = r-1;
    let topLeftColumn = c-1;

    let topRightRow = r-1;
    let topRightColumn = c+1;

    let leftRow = r;
    let leftColumn = c-1;

    let rightRow = r;
    let rightColumn = c+1;

    let bottomRow = r+1;
    let bottomColumn = c;

    let bottomLeftRow = r+1;
    let bottomLeftColumn = c-1;

    let bottomRightRow = r+1;
    let bottomRightColumn = c+1;

    let mineCounter = 0;

    mineCounter += checkCoord(topRow, topColumn);
    mineCounter += checkCoord(topLeftRow, topLeftColumn);
    mineCounter += checkCoord(topRightRow, topRightColumn);
    mineCounter += checkCoord(leftRow, leftColumn);
    mineCounter += checkCoord(rightRow, rightColumn);
    mineCounter += checkCoord(bottomRow, bottomColumn);
    mineCounter += checkCoord(bottomLeftRow, bottomLeftColumn);
    mineCounter += checkCoord(bottomRightRow, bottomRightColumn);

    minefieldTile[r][c].adjacentMineCount = mineCounter;
}

function checkCoord(r, c) {
    //a guard function
    let count = 0;
    if (r < 0 || r > (rows-1) || c < 0 || c > (columns-1)) {
        return 0;
    }
    if (minefieldTile[r][c].isMine == true) {
        count++;
    }
    return count;
};


function clickTile(evt) {
    let tile = evt.target; 
    let id = evt.target.id.split('-');
    let r = id[0];
    let c = id[1];
    if (gameStatus == false) {
        if (minefieldTile[r][c].isMine == true) {
            evt.target.style.backgroundColor = "red";
            evt.target.innerHTML = "<img src='imgs/mine.png'>";
            showMines();
            resetButton.innerText = "Game over! Play again?"; //checking if clicking on a mined tile works
        } else if (minefieldTile[r][c].clicked == false) { //guard else to differentiate clicked and mine from unclicked
            evt.target.style.backgroundColor = "grey";
            evt.target.innerText = minefieldTile[r][c].adjacentMineCount;
            minefieldTile[r][c].clicked = true;
            clickedTiles++;
            if (clickedTiles == 54){
                resetButton.innerText = "You win! Play again?";
                gameStatus = true;
            }
        } 
    }
};

function clickFlag(evt){
    evt.preventDefault();
    let id = "";
    let div = null;
    if(evt.target.nodeName == "IMG") {
        div = evt.target.parentElement;
    }
    else {
        div = evt.target;
    }
    id = div.id.split('-');
    let r = id[0];
    let c = id[1];
    if(gameStatus == false) {
        if(minefieldTile[r][c].flagStatus == false) {
            div.innerHTML = "<img src='imgs/flag.png'>";
            minefieldTile[r][c].flagStatus = true;
        }
        else {
            div.innerHTML = "<img src=''>";
            minefieldTile[r][c].flagStatus = false;
        }
    }
};


function showMines() {
    gameStatus = true;
     for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            if (minefieldTile[r][c].isMine == true) {
                let div = document.getElementById(`${r}-${c}`) //using newly filtered array and using for loop to set all backgrounds to red aka mine
                div.style.backgroundColor = "red";
                div.innerHTML="<img src='imgs/mine.png'>";
            }
        }
    }   
};




