
let resShow1=document.getElementById('resShow1');
let resShow2=document.getElementById('resShow2');
let you=document.getElementById('you');
let computer=document.getElementById('computer');
let youScore=document.getElementById('youScore');
let computerScore=document.getElementById('computerScore');

let lose=new Audio("lose.mp3");
let tie=new Audio("tie.mp3");
let win=new Audio("win.mp3");
let yeah=new Audio("yeah.mp3");
let lost=new Audio("try.mp3");

let restart=document.getElementById('restart');
let winner=document.getElementById('winner');
let emoji=document.getElementById('emoji');

var youcount=0;
var compcount=0;

function endGame(){
  
        resShow1.style.display="none";
        resShow2.style.display="none";
        you.style.display='none'
        computer.style.display='none';
        
        youScore.style.display='none';
        computerScore.style.display='none';

        restart.style.display='block';
        winner.style.display='block';
        emoji.style.display='block';
        
        if(youcount>compcount)
        {
            winner.textContent='YOU WON';
            emoji.textContent='😃';
            yeah.play();
        }
        else{
            winner.textContent='YOU LOSE';
            emoji.textContent='😭';
            lost.play();
        }
}
function images(){
    resShow1.style.display="block";
    resShow2.style.display="block";
    you.style.display='block'
    computer.style.display='block';

    let x= Math.floor(Math.random()*3)+1;
    console.log('Hand='+x);
    if(x==1)
    {
        resShow2.src='paper.png';
        return 1;
    }
    else if(x==2)
    {
        resShow2.src='rock.png';
        return 2;
    }
    else
    {
        resShow2.src='scissors.png';
        return 3;
    }
    
    
}

function click_img1(){
    
    resShow1.src='paper.png';
    
    let num=images();
    console.log('value of x='+num);

    if(num==1){
        console.log("Count="+youcount);
        console.log("Tie");
        tie.play();
    }
    else if(num==2)
    {
        youcount++;
        win.play();
        console.log("Computer count="+compcount);

        youScore.textContent='YOU: '+youcount+'/5';
        computerScore.textContent='COMPUTER: '+compcount+'/5';

        console.log("You Count"+youcount);
        console.log("You won");
    }
    else 
    {
        compcount++;
        lose.play();
        youScore.textContent='YOU: '+youcount+'/5';
        computerScore.textContent='COMPUTER: '+compcount+'/5';
        console.log("Count="+compcount);
    
        console.log("Computer Won");
    }
    
    if(youcount==5 || compcount==5)
    endGame();
    
}

function click_img2(){
    
    resShow1.src='rock.png';
    
    let num=images();
    console.log("Value of x="+num);

    if(num==2){
        console.log("Tie");
        tie.play();
    }
    else if(num==3)
    {
        youcount++;
        win.play();
        console.log("Computer count="+compcount);

        youScore.textContent='YOU: '+youcount+'/5';
        computerScore.textContent='COMPUTER: '+compcount+'/5';

        console.log("You Count"+youcount);
        console.log("You won");
    }
    else
    {
        compcount++;
        lose.play();
        youScore.textContent='YOU: '+youcount+'/5';
        computerScore.textContent='COMPUTER: '+compcount+'/5';
        console.log("Count="+compcount);
    
        console.log("Computer Won");
    }
    
    if(youcount==5 || compcount==5)
    endGame();
}

function click_img3(){
    
    resShow1.src='scissors.png';
    
    let num=images();
    console.log("Value of x="+num);

    if(num==3)
    {
        console.log("Tie");
        tie.play();
    }
    else if(num==1)
    {
        youcount++;
        win.play();
        console.log("Computer count="+compcount);

        youScore.textContent='YOU: '+youcount+'/5';
        computerScore.textContent='COMPUTER: '+compcount+'/5';

        console.log("You Count"+youcount);
        console.log("You won");
    }
    else
    {
        compcount++;
        lose.play();
        youScore.textContent='YOU: '+youcount+'/5';
        computerScore.textContent='COMPUTER: '+compcount+'/5';
        console.log("Count="+compcount);
    
        console.log("Computer Won");
    }
    if(youcount==5 || compcount==5)
    endGame();
    
}
