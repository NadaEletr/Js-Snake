export const SNAKE_SPEED=2; // 2 times per second
const body = [{x:12,y:11},{x:11,y:11},{x:10,y:11}]

export function update(){
    console.log("Iam heree")
    const snakeHead={x:body[0].x+1,y:body[0].y};
    body.unshift(snakeHead);//add the new head to beginning of snake
    body.pop();

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
