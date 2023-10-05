console.log("welcome tic tac toe")
let turn="X";
let gameover = false;

//function to change the turn
const changeTurn=()=>{return turn==="X"?"0":"X";}

//function to chek for win
const chekWin=()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,8],
        [6,4,2],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[1]].innerText===boxtext[e[2]].innerText)&&(boxtext[e[0]].innerText!=="")){
            document.querySelector('.info').innerText=boxtext[e[0]].innerText + " is won  ";
            Array.from(boxes).forEach(element=>{
                let boxtext =element.querySelector('.boxtext');
                    if(boxtext.innerText!=''){
                        boxtext.innerText='';    
                    }
            })
            gameover =true;
        }
    })
}

//game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext =element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            gameover=false;
            boxtext.innerText=turn;
            turn = changeTurn();
            chekWin();
            if(!(gameover)){
                document.getElementsByClassName("info")[0].innerText="turn for "+turn+"  "; 
            }
        }
    })
})

let reset = document.getElementsByTagName("button");

reset[0].addEventListener('click',()=>{ 
    Array.from(boxes).forEach(element=>{
        let boxtext =element.querySelector('.boxtext');
            if(boxtext.innerText!=''){
                boxtext.innerText='';    
                document.getElementsByClassName("info")[0].innerText=""; 
            }
    })
})