    //Variables
let btn = document.querySelectorAll(".btn")
let turnO = true
let O = new Audio("playerO.mp3")
let X = new Audio("playerX.mp3")
let win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
let reset = document.querySelector(".reset")
btn.forEach((box)=>{
    box.addEventListener("click", function(){

        if (turnO == true) {
            box.innerText = "O"
            turnO = false
        } else {
            box.innerText = "X"
            turnO = true     
        }
        box.disabled = true
        checkWinner()
    
    })
})

function  checkWinner() {
    for(let check of win){
        let check1 = btn[check[0]].innerText
        let check2 = btn[check[1]].innerText
        let check3 = btn[check[2]].innerText
        if (check1 !== "" && check2 !== "" && check3 !== "") {
            if (check1 == check2 && check2 == check3) {
                if (check1 == "O") {
                  
                       alert("the Winner is O")
                       O.play()
                    } else {
                    
                    alert("the Winner is X")
                    X.play()
                }
            } 
            
        }
    }
}
reset.addEventListener("click" , ()=>{
    window.location.reload()
})