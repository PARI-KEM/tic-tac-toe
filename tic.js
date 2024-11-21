let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newgamebtn=document.querySelector("#new-btn");
let msgCinatiner=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn0= true;
const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [1,2,3],
    [2,4,6],
    [3,4,5],
    [6,7,8],
   

];
const resetgame=() =>{
    turn0=true;
    enablebut();
    msgCinatiner.classList.add("hide");

    

}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0){
            box.innerText="O";
            turn0=false;
        }else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;

        checkWinner();
    });
});
const disablebut=() =>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enablebut=() =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner=(WINNER) =>{
    msg.innerText=`Congratulations ! Winner is ${WINNER}`
    msgCinatiner.classList.remove("hide");

}

const checkWinner=()=>{
    for(let pattern of winpattern){
        console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);

    let pos1val=boxes[pattern[0]].innerText;
    let pos2val=boxes[pattern[0]].innerText;
    let pos3val=boxes[pattern[0]].innerText;

    if(pos1val !="" && pos2val !="" && pos3val !=""){
        if(pos1val===pos2val && pos2val===pos3val){
           
            
            showWinner(pos1val);
    }
    }
    }
};
newgamebtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click",resetgame);
