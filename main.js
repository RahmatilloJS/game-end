const refresh = document.querySelector(".refresh")
let num1 = document.querySelector(".num1")
let num2 = document.querySelector(".num2")
let img1 = document.querySelector(".img1")
let img2 = document.querySelector(".img2")
let btn = document.querySelector(".btn")
function getRandom() {
    const random1 = Math.floor(Math.random() * 6 + 1)
    const random2 = Math.floor(Math.random() * 6 + 1)
    if (random1 > random2) {
        refresh.innerHTML = "Player 1 win!"
        num1.innerHTML = random1
        num2.innerHTML = random2
    }
    else if (random1 < random2) {
        refresh.innerHTML = "Player 2 win!"
        num1.innerHTML = random1
        num2.innerHTML = random2
    }
    else {
        refresh.innerHTML = "Draw!"
        num1.innerHTML = random1
        num2.innerHTML = random2
    }
    img1.src = `images/dice${random1}.png`
    img2.src = `images/dice${random2}.png`
}
btn.onclick = ()=> getRandom()