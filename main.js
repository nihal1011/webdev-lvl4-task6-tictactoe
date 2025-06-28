const myPara = document.getElementById("myPara");
const box = document.getElementsByClassName("box");
const restart = document.getElementById("restart");
let gameOver = false;
let isXturn = true;
let flag = 0;


function analyseBoard(){
    let combinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for(let combo of combinations){
        let [a,b,c] = combo;
        if(box[a].innerText==="X" && box[b].innerText==="X" && box[c].innerText==="X"){
            return -1;
        }
        if(box[a].innerText==="O" && box[b].innerText==="O" && box[c].innerText==="O"){
            return 1;
        }
    }
    return 0;
}
function main(){
    for(let i=0;i<9;i++){
       box[i].addEventListener("click",function() {
        if(!gameOver && box[i].innerText == ""){
                if(isXturn){
                    box[i].innerText = "X";
                }
                else{
                    box[i].innerText = "O";
                }
                isXturn = !isXturn;
                let result = analyseBoard();
                if(result!=0){
                    gameOver = true;
                }
                if(result==-1){
                    myPara.textContent = "Player 1 won!!";
                }
                else if(result==1){
                    myPara.textContent = "Player 2 won!!";
                }
                else{
                    let isDraw = true;
                    for(let j=0;j<9;j++){
                        if(box[j].innerText === ""){
                            isDraw = false;
                            break;
                        }
                    }
                    if(isDraw){
                        myPara.textContent = "DRAW!!";
                    }
                }
            }
        });
           
     }
       
}
   
restart.onclick = function() {
    for(let j =0;j<9;j++){
        box[j].innerText = "";
    }
    restart.textContent = "Restart";
    isXturn = true;
    gameOver = false;
    myPara.textContent = "TIC-TAC-TOE";
main();
}
