/*----- constants -----*/
const mineCount = 10;
const columns = 8;
const rows = 8;
const mineLocation = [];



/*----- app's state (variables) -----*/
var gameStatus = null; // null is game in play, -1 loss, 1 win
var minefieldTile = [];


/*----- cached element references -----*/





/*----- event listeners -----*/
document.getElementById("minefield").addEventListener('click', clickTile);




/*----- functions -----*/
init();

function init() {
    for (let r = 0; r < rows; r++) { 
        for (let c = 0; c < columns; c++) { // double for loop to fill grid
            let id = r.toString() + "-" + c.toString(); // sets the coordinates 
            let tile = { id: id, isMine: false, adjacentMineCount: 0, flagged: false, clicked: false};
            minefieldTile.push(tile);
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
        let mine = r.toString() + "-" + c.toString(); // setting mine variable like above and setting coordinate
        let index = minefieldTile.findIndex(function(value) { 
            return value.id == mine; // setting index variable to the random mine value we found above and seeing if they are equal
        });
        
        if (minefieldTile[index].isMine == false) {
            minesRemain --;
            minefieldTile[index].isMine = true; // function found index so we can modify array value appropriately
        }
            

    }
    console.log (minefieldTile);
};


function clickTile(evt) {
    let tile = evt.target;
    let index = minefieldTile.findIndex(function(value) { 
        return value.id == tile.id; // setting index variable to the random mine value we found above and seeing if they are equal
    });
    
    if (minefieldTile[index].isMine == true) {
        evt.target.style.background = "/Users/anthonynguyen/code/Minesweeper-Project1/imgs/mine.png";
        console.log ("Game Over"); //checking if clicking on a mined tile works
    }
};

function render() {

};