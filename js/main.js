/*----- constants -----*/
const mineCount = 10;
const columns = 8;
const rows = 8;


/*----- app's state (variables) -----*/
var gameStatus = null; // null is game in play, -1 loss, 1 win
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
var minefieldTimer;

/*----- cached element references -----*/





/*----- event listeners -----*/
document.getElementById("minefield").addEventListener('click', clickTile);




/*----- functions -----*/
init();

function init() {
    for (let r = 0; r < rows; r++) { 
        for (let c = 0; c < columns; c++) { // double for loop to fill grid
            let tile = {isMine: false, adjacentMineCount: 0, flagged: false, clicked: false}; //id property is connected to the html grid
            minefieldTile[r][c] = tile;
        }
    }
    setMinefield();    
    render();
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
}

function clickTile(evt) {
    let tile = evt.target; 
    let id = evt.target.id.split('-');
    let r = id[0];
    let c = id[1];
    if (minefieldTile[r][c].isMine == true) {
        evt.target.style.backgroundColor = "red";
        showMines();
        console.log ("Game Over"); //checking if clicking on a mined tile works
    } else {
        checkMine();
    }
}


function showMines() {
     for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            if (minefieldTile[r][c].isMine == true) {
                let div = document.getElementById(`${r}-${c}`) //using newly filtered array and using for loop to set all backgrounds to red aka mine
                div.style.backgroundColor = "red";
            }
        }
    }   
}

function checkMine(evt) {
}

// function checkTile() {
//     let mines = minefieldTile.filter(function(value) {
//         return value.isMine == true
//     });
// };
    



function render() {

};
