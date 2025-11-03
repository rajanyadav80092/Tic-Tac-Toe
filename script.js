let boxes=document.querySelectorAll(".button");
let resetbtn=document.querySelector(".reset-game");
let newbtngame=document.querySelector("#new-game");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#winner");
let turn0=true;

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
]

const resetgame = ()=>{
    turn0 = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
         if (box.innerText !== "") {
            // Already filled, do nothing
            return;
        }
        if (turn0){
            box.innerText = "0";
            turn0 = false;
        }else{
            box.innerText="X";
            turn0 = true;
        }
        box.disable=true;
        checkwinner();
    })

})
const disableBoxes =() =>{
    for (let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes = () =>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showwinner=(winner)=>{
    msg.innerText=`CONGRATULATION YOU WIN ${winner}`
    msgcontainer.classList.remove("hide");
    disableBoxes();
}
const checkwinner = ()=>{
    for (let pattern of winpatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if (pos1val!="" && pos2val !="" && pos3val !=""){
            if (pos1val === pos2val && pos2val === pos3val){
                console.log("winner",pos1val);
                showwinner(pos1val);
            }
        }
    }
}
newbtngame.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);

