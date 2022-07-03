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
    mineLocation.push("2-2"); // setting 'mines' at respective coordinates to test
    mineLocation.push("2-3");
    mineLocation.push("2-4");
    mineLocation.push("1-1");
    mineLocation.push("1-2");

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