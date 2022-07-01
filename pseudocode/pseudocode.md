Pseudocode for Project #1: Minesweeper

Goals:
- Browser needs to generate an 8x8 or 9x9 board 
- clicking a spot on the board needs to generate 10 mines on random spots on the board excluding the first spot clicked (first click is safe)
    - in addition to that,  the board will have a small area around the first spot clicked that will be clear of mines
    - border tiles at this designated 'safe' area will also have a number on them that indicates how many mines are adjacent to it (either diagonally, top/down, or left/right)
- right clicking a spot will mark a blank spot with a 'flag' where player thinks a mine is, right clicking again can remove the 'flag'
- left-clicking on a mine results in a L
- left-clicking on a tile that does not have a mine will change the tile to a numbered tile from 1-4 indicating how many mines are adjacent (as defined before) to that tile
- left-clicking on every 'clear' tile results in a W

Game Constants:
gameStatus (W or L)
tileStatus  (safe or mined)
timer (can automatically begin once page is opened)

Gameplay
1. Opening page generates a blank (8x8, or 9x9, or 10x10) tiled board.
2. User begins by left-clicking on any spot on the board to generate a  randomized safe zone (including tile clicked) of no mines originating from the clicked tile
   a. also generates 10 random mines outside of the safe zone on 10 random tiles. 
   b. The borders of the safe zone will either be blank or have a number from 1-4 on them indicating how many mines are adjacent (either diagonally, top/down, or left/right)
3. User can right click a 'blank' tile (a spot untouched by the user) to 'flag' if they think a mine is there
4. The user continues the game by left clicking the remaining 'blank' tiles:
   a. if the tile does not hold a mine it will turn into a 'safe' tile with varying number 1-4 depending on how many mines are adjacent
   b. if the tiles does hold a mine, then the user loses (gameStatus = 0)
5. Game will continue until every 'safe' tile is clicked or until the user loses by clicking on a mine.
6. Regardless of whether win or loss, play again button appears.