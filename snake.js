export const SNAKE_SPEED=5; // 2 times per second
import {isSnakeOutOfBoundaris} from "./game-board.js"
const Direction = {
    UP: 1,
    DOWN:2,
    RIGHT:3,
    LEFT:4
}

const body = [{x:12,y:11,d:Direction.RIGHT},{x:11,y:11},{x:10,y:11}];
let inputDirection={x:1 , y:0};


export function update() {
    moveSnakeAutomatically();
    return checkSnakeDeath();
}

function moveSnakeAutomatically(){
    const snakeHead={x:body[0].x+inputDirection.x,y:body[0].y+inputDirection.y,d:body[0].d};
    body.unshift(snakeHead);//add the new head to beginning of snake
    body.pop();
}

function checkSnakeDeath(){
    if(isSnakeOutOfBoundaris() || isSnakeCollapsed())
        return true;
    return false;
}


window.addEventListener('keydown',e=>{

    if(e.key=="ArrowRight" && body[0].d!=Direction.LEFT){
        inputDirection={x:1,y:0};
        body[0].d=Direction.RIGHT;
    }else if (e.key=="ArrowLeft" && body[0].d!=Direction.RIGHT){
        inputDirection={x:-1,y:0};
        body[0].d=Direction.LEFT;
    }else if(e.key=="ArrowDown" && body[0].d!=Direction.UP){
        inputDirection={x:0,y:1};
        body[0].d=Direction.DOWN;
    }else if (e.key=="ArrowUp" && body[0].d!=Direction.DOWN){
        inputDirection={x:0,y:-1};
        body[0].d=Direction.UP;
    }
   
})

export function getSnakeHead(){
    return body[0];
}

export function draw(game_board){
    game_board.innerHTML="";
    body.forEach((part)=>{
        const div =document.createElement('div'); // create div inside game board
        div.style.gridColumnStart=part.x;
        div.style.gridRowStart=part.y;
        div.classList.add("snake");
        game_board.appendChild(div);
    })
}

export function isSnakeOnFood(foodPosition){
    body.forEach(part=>{
        if(part.x==foodPosition.x && part.y==foodPosition.y)
            return true;
    })
    return false;
}

export function isSnakeEatingFood(foodPosition){
    
    if(getSnakeHead().x == foodPosition.x && getSnakeHead().y == foodPosition.y){
        expandSnake(foodPosition)
        return true;
    }
    return false;
}

function expandSnake(foodPosition){
    body.length++;
    body[0].x=foodPosition.x;
    body[0].y=foodPosition.y;
     for(let i=body.length-1;i>0;i--)
    {
         body[i]=body[i-1];
    }
    
}

export function isSnakeCollapsed(){

    for(let i=1 ;i<body.length; i++){
        if(body[0].x==body[i].x && body[0].y==body[i].y){
            console.log("true");
            return true;
        }
    }
    return false;
    
}