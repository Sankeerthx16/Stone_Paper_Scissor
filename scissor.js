let compScore=0;
let userScore=0;
let score=0;
const sps=document.querySelectorAll(".sps");
let msg=document.querySelector("#message");
let user=document.querySelector("#user");
let comp=document.querySelector("#comp");
const genComp=()=>{
    const objects =["s","p","sc"];
    const ranInd=Math.floor(Math.random()*3);
    return objects[ranInd];
}
let showWinner=(userWin)=>{
    if(userWin) {
        msg.innerText="You win! 🥳";
       userScore++;
       user.innerText=userScore;
       msg.style.backgroundColor="green";
    }
    else {
        msg.innerText="You Lost! 😭";
        compScore++;
        comp.innerText=compScore;
        msg.style.backgroundColor="red";
    }
}
let playGame=(UserChoice)=>{
   let userWin=true;
     console.log(UserChoice);
     const compChoice=genComp();
     console.log(compChoice);
     if(UserChoice===compChoice) {
        console.log("draw");
       msg.innerText="Draw 😂";
       msg.style.backgroundColor="black";
       return;
     }
     else {
        
        if(UserChoice==="s"){
            userWin=compChoice==="p"?false:true;
        }
        else if(UserChoice==="p"){
            userWin=compChoice==="sc"?false:true;
        }
        else {
                userWin=compChoice==="s"?false:true;
        }
     }
     showWinner(userWin);
}
sps.forEach((choice)=>{
    choice.onclick=()=>{
    UserChoice=choice.getAttribute("id");
    
     playGame(UserChoice);
    }
});
