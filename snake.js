export const SNAKE_SPEED=2; // 2 times per second
const body = [{x:10,y:11},{x:11,y:11},{x:12,y:11}]
export function update(){


}
export function draw(){
    let board =document.getElementById("game-board");
    console.log(body.length);
    body.forEach((part)=>{
        const div =document.createElement('div'); // create div inside game board
        div.style.gridColumnStart=part.x;
        div.style.gridRowStart=part.y;
        div.classList.add("snake");
        board.appendChild(div);
        
    })
}
