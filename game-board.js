import {getSnakeHead} from "./snake.js"

const BOARD_SIZE=21;

export function isSnakeOutOfBoundaris(){
    let snakeHead =getSnakeHead();
    if(snakeHead.x<1 || snakeHead.x>=BOARD_SIZE || snakeHead.y<1 || snakeHead.y>=BOARD_SIZE){
        return  true
    }
    return false;
}

export function getRandomBoardPosition(){

    return{
        x:Math.floor(Math.random() *BOARD_SIZE )+1,
        y:Math.floor(Math.random() * BOARD_SIZE)+1
    }
    
}