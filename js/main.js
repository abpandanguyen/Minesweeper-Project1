/*----- constants -----*/
const mineCount = 10;
const columns = 8;
const rows = 8;


/*----- app's state (variables) -----*/
let gameStatus = false; // false is game in play, true is game over whether win or lose
let minefieldTile = [
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
];
let winningTiles = 0;

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
    winningTiles = 0;
    resetButton.innerText = "Reset";
    for (let r = 0; r < rows; r++) { 
        for (let c = 0; c < columns; c++) { // double for loop to fill grid
            let tile = {isMine: false, adjacentMineCount: 0, clicked: false, flagStatus: false, revealed: false}; //id property is connected to the html grid
            minefieldTile[r][c] = tile;
            let div = document.getElementById(`${r}-${c}`);
            div.style.backgroundColor = "white";
            div.innerText = "";
            div.style.border = "2px solid black";
        }
    }
    renderMinefield();
    setAdjacentMineCount();
};


function renderMinefield() {
    let minesRemain = mineCount // declaring new variable
    while (minesRemain > 0) { // while makes sure the loop continues until condition met
        let r = Math.floor(Math.random()*rows); 
        let c = Math.floor(Math.random()*columns); //calculating and assigning random r and c variables to put as 'coordinates'
        if (minefieldTile[r][c].isMine == false) {
            minesRemain --;
            minefieldTile[r][c].isMine = true; // function found index so we can modify target array value appropriately
        }
    }        
};

function setAdjacentMineCount() {
        for (let r = 0; r < rows; r++) { 
            for (let c = 0; c < columns; c++) {
                mineChecker(r, c);     
        }
    }
};

function mineChecker(r, c) { // function to check each adjacent cell
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

    mineCounter += checkCount(topRow, topColumn);
    mineCounter += checkCount(topLeftRow, topLeftColumn);
    mineCounter += checkCount(topRightRow, topRightColumn);
    mineCounter += checkCount(leftRow, leftColumn);
    mineCounter += checkCount(rightRow, rightColumn);
    mineCounter += checkCount(bottomRow, bottomColumn);
    mineCounter += checkCount(bottomLeftRow, bottomLeftColumn);
    mineCounter += checkCount(bottomRightRow, bottomRightColumn);

    minefieldTile[r][c].adjacentMineCount = mineCounter;
};

function checkCount(r, c) {
    let count = 0; //guard statement
    if (r < 0 || r > (rows-1) || c < 0 || c > (columns-1)) {
        return 0;
    }
    if (minefieldTile[r][c].isMine == true) {
        minefieldTile[r][c].revealed = true;
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
            minefieldTile[r][c].revealed = true;
            if (minefieldTile[r][c].adjacentMineCount == 0) {
                setZeroAdjacent(r, c);
                r = parseFloat(r);
                c = parseFloat(c);
                floodTiles(r, c);
            } else {
                evt.target.style.backgroundColor = "grey";
                evt.target.innerText = minefieldTile[r][c].adjacentMineCount;
                if (minefieldTile[r][c].adjacentMineCount == 1) {
                    document.getElementById(`${r}-${c}`).style.color = "blue";
                }          
                if (minefieldTile[r][c].adjacentMineCount == 2) {
                    document.getElementById(`${r}-${c}`).style.color = "green";
                }          
                if (minefieldTile[r][c].adjacentMineCount == 3) {
                    document.getElementById(`${r}-${c}`).style.color = "red";
                }          
                if (minefieldTile[r][c].adjacentMineCount == 4) {
                    document.getElementById(`${r}-${c}`).style.color = "purple";
                }          
                if (minefieldTile[r][c].adjacentMineCount == 5) {
                    document.getElementById(`${r}-${c}`).style.color = "maroon";
                }          
                if (minefieldTile[r][c].adjacentMineCount == 6) {
                    document.getElementById(`${r}-${c}`).style.color = "turquoise";
                }          
                if (minefieldTile[r][c].adjacentMineCount == 7) {
                    document.getElementById(`${r}-${c}`).style.color = "magenta";
                }          
            }
            winningTiles++;
            youWin();
        } 
    }
};

function floodTiles(r, c) {
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

    revealTile(topRow, topColumn);
    revealTile(topLeftRow, topLeftColumn);
    revealTile(topRightRow, topRightColumn);
    revealTile(leftRow, leftColumn);
    revealTile(rightRow, rightColumn);
    revealTile(bottomRow, bottomColumn);
    revealTile(bottomLeftRow, bottomLeftColumn);
    revealTile(bottomRightRow, bottomRightColumn);
};

function revealTile(r, c) {
    let count = 0;
    if (r < 0 || r > (rows-1) || c < 0 || c > (columns-1)) {
        return 0;
    }
    if (minefieldTile[r][c].adjacentMineCount == 0 && minefieldTile[r][c].isMine == false) {
        if (minefieldTile[r][c].revealed == false) { //changing style of 0 mine adjacent tiles without adding to count
            winningTiles++;
        }
        minefieldTile[r][c].revealed = true;
        minefieldTile[r][c].clicked = true;
        setZeroAdjacent(r, c);
    }
    return count;
};

function setZeroAdjacent(r, c) {
    document.getElementById(`${r}-${c}`).style.backgroundColor = "grey";
    document.getElementById(`${r}-${c}`).style.border = "grey";
    document.getElementById(`${r}-${c}`).innerText = "";
}

function clickFlag(evt){
    evt.preventDefault();
    let id = "";
    let div = null;
    if(evt.target.nodeName == "IMG") { 
        //was originally img, but was getting an error 
        //until inspected and realizing nodeName was IMG
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

function youWin() {
if (winningTiles == 54) {
        resetButton.innerText = "You win! Play again?";
        gameStatus = true;
        showMines();
    }
};





