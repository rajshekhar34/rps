let myScore = 0;
let compScore = 0;

let myScr = document.querySelector ("#me");
let compScr = document.querySelector ("#comp");

let myChoice = document.querySelectorAll(".choice");
let masg = document.querySelector("#msg");

let compGen = ()=>{
    let choicess = ["rock", "paper" , "scissor"];
    let autoCh = Math.floor(Math.random() *3);
    return choicess[autoCh];
}


let gamePlay = (idFinder) =>{
    console.log (`You choose ${idFinder}`)

    let compTurn = compGen();
    console.log (`Computer choose ${compTurn}`);

    let showWinner = (userWin) =>{
        if (userWin === true){
            myScore++;
            myScr.innerText = myScore;
            console.log ("You win bro");
            masg.innerText = "You win";
            masg.style.backgroundColor = "green";
        }else {console.log ("You lose bro, sorry");
        
        compScore++;
        compScr.innerText = compScore;
        masg.innerText = "You lose"
        masg.style.backgroundColor = "red";};
    }


    if (idFinder === compTurn){
        console.log ("game is draw");
        masg.innerText = "Match is draw";
        masg.style.backgroundColor = "black";
    } else {
        let userWin = true;
        if (idFinder === "rock"){
           userWin = compTurn === "paper" ? false : true;
        } else if (idFinder === "paper"){
           userWin = compTurn === "scissor" ? false : true ;
        } else{
            userWin = compTurn === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}



myChoice.forEach((anychoice)=>{
    anychoice.addEventListener("click",()=>{
        let idFinder = anychoice.getAttribute("id")
        gamePlay(idFinder);
    })
})