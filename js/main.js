/*----- constants -----*/
const mineCount = 10;
const columns = 8;
const rows = 8;
const mineLocation = [];



/*----- app's state (variables) -----*/
var gameStatus = null; // null is game in play, -1 loss, 1 win



/*----- cached element references -----*/





/*----- event listeners -----*/





/*----- functions -----*/
init();

function init() {
    for (let r = 0; r < rows; r++) { 
        let row = [];
        for (let c = 0; c < columns; c++) { // double for loop to create grid


            let tile = document.createElement("div"); // creating tile div
            tile.id = r.toString() + "-" + c.toString(); // sets the coordinates
            tile.addEventListener("click", clickTile); 
            document.getElementById("minefield").append(tile); // attaches div to minefield 
            row.push(tile); //
        }
     }
    setMinefield();    
    render();
};

function setMinefield() {
    // mineLocation.push("2-2"); // setting 'mines' at respective coordinates to test
    // mineLocation.push("2-3");
    // mineLocation.push("2-4");
    // mineLocation.push("1-1");
    // mineLocation.push("1-2");

    let minesRemain = mineCount // declaring new variable
    while (minesRemain > 0) { // while makes sure the loop continues until condition met
        let r = Math.floor(Math.random()*rows);
        let c = Math.floor(Math.random()*columns);
        let mine = r.toString() + "-" + c.toString(); // setting mine variable like above and setting coordinate
        if (mineLocation.includes(mine) == false) { // setting condition to avoid overlapping of bombs
            mineLocation.push(mine); // if the array doesn't have that string in it, then it will add in a new mine to the array
             minesRemain --; // preventing infinite loop
        }
            

    }
    console.log (mineLocation);
};


function clickTile() {
    // console.log ("Working");
    let tile = this;

    if (mineLocation.includes(tile.id)) {
        gameStatus = -1;
        console.log ("Game Over"); //checking if clicking on a mined tile works
    }

};

function render() {

};