let boxes= document.querySelectorAll(".box");
console.log(boxes);

let resetbtn =document.querySelector("#reset-btn");
console.dir(resetbtn);

let newGamebtn= document.querySelector("#newGame-btn");
console.dir(newGamebtn);

let msgContainer = document.querySelector(".msg-container");
console.dir(msgContainer);

let msg =document.querySelector(".msg");


let turnO = true; //player X player O;

const winPatterns= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6],
];

boxes.forEach( (box)=> {
    box.addEventListener ( "click", ()=>{
        console.log("btn was clicked");
       

        if(turnO){
          box.innerText="O";
          box.style.color="green";
           
          turnO= false;
        }else{
            box.innerText="X";
            box.style.color= "red";
            turnO=true;
        }

        box.disabled=true;

        //check winner

        checkWinner();


    });
});


const checkWinner = ()=>{
    for (let pattern of winPatterns){
        console.log(pattern[0],pattern[1],pattern[2]);

        console.log(
            boxes[pattern[0]].innerText,
            boxes[pattern[1]].innerText,
            boxes[pattern[2]].innerText);

        let posi1val =  boxes[pattern[0]].innerText;
        let posi2val =  boxes[pattern[1]].innerText;
        let posi3val =  boxes[pattern[2]].innerText;

        if(posi1val != "" && posi2val != "" && posi3val !=""){
            if(posi1val === posi2val && posi2val === posi3val){
                console.log("Winner", posi1val);

                //Show Winner
                showWinner(posi1val);

            }
        }
        
    }
}

//SHow winner
   
const showWinner =(winner)=> {
     msg.innerText = `Congratualations,Winner is , ${winner}`;
     msgContainer.classList.remove("hide");
     disabledBoxes();
}

//disabled boxes after winner

 const disabledBoxes =()=>{
    for(let box of boxes){
        box.disabled=true;
    }
 }

 //enable boxes after winner 
 const enableBoxes =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText= " ";
    }
 }

//reset game

const resetGame = ()=>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

newGamebtn.addEventListener("click",resetGame);

resetbtn.addEventListener("click", resetGame);



//DRAW Match 

let count =0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        count++;
        console.log(count);

        if(count===9){
            checkWinner=== false;
            matchDraw();
        }
    })
})

const matchDraw =()=> {
    msg.innerHTML = `Draw Match`;
    msgContainer.classList.remove("hide");
    enableBoxes();
}

