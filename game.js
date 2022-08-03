import{SNAKE_SPEED,update as updateSnake,draw as drawSnake,} from "./snake.js"
import {isSnakeOutOfBoundaris} from "./game-board.js"
let lastRenderTime =0;
let gameFinished= false;


function loop(currentTime){
    if(isSnakeOutOfBoundaris())
        return alert("GAME OVER");
    window.requestAnimationFrame(loop)
    const secondSinceLastRender= (currentTime-lastRenderTime)/1000;// for sec
    if(secondSinceLastRender<1/SNAKE_SPEED)
        return;
    lastRenderTime=currentTime;
    updateSnake(); //logic
    drawSnake();
    checkDeath();
    
}

function checkDeath(){
    
}

var lastRender = 0
window.requestAnimationFrame(loop)