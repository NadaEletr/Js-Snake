
import {isSnakeOnFood,isSnakeEatingFood}from "./snake.js"
let food ={x:5,y:10};
const max=21;
const min =0;

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
    if(isSnakeOnFood(food) || isSnakeEatingFood(food)){
        getRandomFoodPosition();
    } 
       
}


function getRandomFoodPosition(){
    food.x=Math.floor(Math.random() * (max - min + 1)) + min;
    food.y=Math.floor(Math.random() * (max - min + 1)) + min;
}