<div align="center">
   <h2>:sparkler: Minesweeper :sparkler:</h2>
   <h4>http://abpandanguyen.github.io/Minesweeper-Project1/</h4>
   <h5>Anthony Nguyen</h5>                             
</div>

<h1>Description</h1>
<p>Minesweeper is a single-player puzzle video game where the objective is to clear a rectangular board that is laid with hidden 'mines' without detonating any of them. Clicking on a tile will either reveal a mine and result in a loss or reveal an empty tile that can be adjacent to zero or even eight mines. Victory is achieved by clicking all unmined tiles.</p>

<h1>Screenshots</h1>

<details>
<summary> :art: Wireframes</summary>

| Description | Screenshot |
|------------ | ------------|
| <h3 align="center">Initial Blueprint</h3> | <img src="https://github.com/abpandanguyen/Minesweeper-Project1/blob/main/wireframe/wireframe.jpeg" width="500"/>
</details>

<details open>
<summary> :video_game: The Game!</summary>

| Description | Screenshot |
|------------ | ------------|
| <h3 align="center">Game Over!</h3> | <img src="https://github.com/abpandanguyen/Minesweeper-Project1/blob/main/screenshots/GameOver.png" width="500"/> |
| <h3 align="center">Victory</h3> | <img src="https://github.com/abpandanguyen/Minesweeper-Project1/blob/main/screenshots/Victory.png" width="500"/> |
| <h3 align="center">In Play</h3> | <img src="https://github.com/abpandanguyen/Minesweeper-Project1/blob/main/screenshots/InPlay.png" width="500"/> |
</details>

## Technologies Used 

![JavaScript](https://img.shields.io/badge/-JavaScript-333?style=flat&logo=javascript) 
![HTML5](https://img.shields.io/badge/-HTML5-333?style=flat&logo=html5)
![CSS3](https://img.shields.io/badge/-CSS-333?style=flat&logo=css3)
![Github](https://img.shields.io/badge/-GitHub-333?style=flat&logo=github)
![VSCode](https://img.shields.io/badge/-VS_Code-333?style=flat&logo=visualstudio)
![Markdown](https://img.shields.io/badge/-Markdown-333?style=flat&logo=markdown)

<h1>Instructions</h1>

<ol>
<li>The goal is to left click on all unmined tiles. Left click anywhere on the board to reveal a tile and get started.</li>
<li>If it's a mine, that's an unlucky game over :frowning_face:. Otherwise, it will reveal a number that will tell the player how many mines are adjacent to that tile including in any direction.</li>
<li>Once a non-mine tile is revealed, the player can choose to either continue trying to reveal tiles around it with left click or attempt to mark unclicked tiles with a flag by using right-click. Flagging is no guarantee of an empty tile!</li>
<li>The player should gradually try and work their way to left clicking all unmined tiles to achieve victory.</li>
</ol>

## :fast_forward: Next Steps   

### Upcoming Features

- [ ] Add timer to the game when the browser opens up.

- [ ] Possibly rewrite setMinefield/clickTile function in order to prevent game over on first click 

- [ ] Update to more modern minesweeper versions where initial click will also reveal all unmined tiles in an area around first clicked tile.

