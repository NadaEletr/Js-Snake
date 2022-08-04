
import {isSnakeOnFood,isSnakeEatingFood}from "./snake.js"
import {getRandomBoardPosition} from "./game-board.js"
let food ={x:5,y:10};
const max=21;
const min =1;

let div;

export function drawFood(game_board){
    
    //game_board.innerHTML="";
    div =document.createElement('div'); // create div inside game board
    div.style.gridColumnStart=food.x;
    div.style.gridRowStart=food.y;
    div.classList.add("food");
    game_board.appendChild(div);
}

export function updateFood(){
    if(isSnakeEatingFood(food)){
        food.x=getRandomFoodPosition().x;
        food.y=getRandomFoodPosition().y;
    }    
}


function getRandomFoodPosition(){
    let newFoodPosition;
    while(isSnakeOnFood(food) || newFoodPosition==null){
        newFoodPosition= getRandomBoardPosition(); 
    }
    return newFoodPosition;
    
}