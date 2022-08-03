export const SNAKE_SPEED=2; // 2 times per second

const Direction = {
    UP: 1,
    DOWN:2,
    RIGHT:3,
    LEFT:4
}

const body = [{x:12,y:11,d:Direction.RIGHT},{x:11,y:11},{x:10,y:11}];
let inputDirection={x:1 , y:0};


export function update(){
    moveSnakeAutomatically();
}

function moveSnakeAutomatically(){
    const snakeHead={x:body[0].x+inputDirection.x,y:body[0].y+inputDirection.y,d:body[0].d};
    body.unshift(snakeHead);//add the new head to beginning of snake
    body.pop();
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

function getSnakeInputDirection(){

}

export function draw(){
    let board =document.getElementById("game-board");
    board.innerHTML="";
    body.forEach((part)=>{
        const div =document.createElement('div'); // create div inside game board
        div.style.gridColumnStart=part.x;
        div.style.gridRowStart=part.y;
        div.classList.add("snake");
        board.appendChild(div);
    })
}
