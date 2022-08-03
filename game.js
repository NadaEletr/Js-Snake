import{SNAKE_SPEED,update as updateSnake,draw as drawSnake,} from "./snake.js"
let lastRenderTime =0;


function update(){
    updateSnake();
}
function draw(){
    
    drawSnake();

}

function loop(currentTime){
    window.requestAnimationFrame(loop)
    const secondSinceLastRender= (currentTime-lastRenderTime)/1000;// for sec
    if(secondSinceLastRender<1/SNAKE_SPEED)
        return;
    lastRenderTime=currentTime;
    update(); //logic
    draw(); 
}


var lastRender = 0
window.requestAnimationFrame(loop)