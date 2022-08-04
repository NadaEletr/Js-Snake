import{SNAKE_SPEED,update as updateSnake,draw as drawSnake,isSnakeCollapsed} from "./snake.js"

import{drawFood, updateFood} from "./food.js"
let lastRenderTime =0;
let game_board= document.getElementById("game-board");
let gameOver =false;
function loop(currentTime){

    if(gameOver)
        return alert("GAME OVER !!");

    window.requestAnimationFrame(loop)
    const secondSinceLastRender= (currentTime-lastRenderTime)/1000;// for sec
    if(secondSinceLastRender<1/SNAKE_SPEED)
        return;
    lastRenderTime=currentTime;
    gameOver=updateSnake(); //logic
    updateFood();
    drawSnake(game_board);
    drawFood(game_board);
  
}



window.requestAnimationFrame(loop)