import{SNAKE_SPEED,update as updateSnake,draw as drawSnake,} from "./snake.js"
import {isSnakeOutOfBoundaris} from "./game-board.js"
import{drawFood, updateFood} from "./food.js"
let lastRenderTime =0;
let game_board= document.getElementById("game-board");

function loop(currentTime){
    if(isSnakeOutOfBoundaris())
        return alert("GAME OVER");
    window.requestAnimationFrame(loop)
    const secondSinceLastRender= (currentTime-lastRenderTime)/1000;// for sec
    if(secondSinceLastRender<1/SNAKE_SPEED)
        return;
    lastRenderTime=currentTime;
    updateSnake(); //logic
    updateFood();
    drawSnake(game_board);
    drawFood(game_board);
    checkDeath();
    
}

function checkDeath(){
    
}


window.requestAnimationFrame(loop)