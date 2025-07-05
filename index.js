
let randomdice = Math.floor(Math.random() * 6) + 1
let randomimg = "img/dice "+randomdice+".png"

document.querySelectorAll("img")[0].setAttribute("src", randomimg)

let randomdice2 = Math.floor(Math.random() * 6) + 1
let randomimg2 = "img/dice "+randomdice2+".png"

document.querySelectorAll("img")[1].setAttribute("src", randomimg2)




if (randomdice > randomdice2){
    document.querySelector("h1").innerHTML = "player 1 wins!"
} else if (randomdice < randomdice2){
    document.querySelector("h1").innerHTML = "player 2 wins!"
} else {
    document.querySelector("h1").innerHTML = "draw!"
}

























