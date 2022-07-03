/*----- constants -----*/
const mineCount = 10;
const columns = 8;
const rows = 8;



/*----- app's state (variables) -----*/
let minefield; // 
let gameStatus; // null is game in play, -1 loss, 1 win




/*----- cached element references -----*/





/*----- event listeners -----*/





/*----- functions -----*/
init();

function init() {
    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {


        let tile = document.createElement("div");
        tile.id = r.toString() + "-" + c.toString(); // sets the coordinates
        tile.addEventListener("click", clickTile);
        document.getElementById("minefield").append(tile);
        row.push(tile);
        }
     }
        
    render();
};


function clickTile() {
    console.log ("Working");

};

function render() {

};