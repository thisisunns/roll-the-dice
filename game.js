const players = document.querySelectorAll(".container")
const game = document.querySelector(".game")
const newgame = document.querySelector(".newgame")
const rollDice = document.querySelector(".roll-dice")
const passGame = document.querySelector(".hold")
const diceImg = document.querySelector("#dice-img")

const total = [0, 0]
const current = [0, 0]
let currentplayer = 0
const numbers = ['six', 'one', 'two', 'three', 'four', 'five', 'six']

function getnumber() {
    return 1 + Math.floor(Math.random() * 6)
}
function render(value) {
    diceImg.src = `icons/dice-six-faces-${numbers[value]}.svg`
    let gameover = false
    players.forEach((player, index) => {
        player.querySelector('.number').textContent = total[index]
        player.querySelector('.current-score').textContent = current[index]
        if (currentplayer === index) {
            player.classList.add('active')
        } else {
            player.classList.remove('active')
        }
        if (total[index] >= 20) {
            player.classList.add('won')                    
            gameover = true
                       
        } else {
            player.classList.remove('won')
        }
    })
    if (gameover) {
        game.classList.add('over')
               
    } else {
        game.classList.remove('over')
    }
}

rollDice.addEventListener('click', onrolldice)

function onrolldice() {
    const currentnumber = getnumber()
    current[currentplayer] = currentnumber
    if (currentnumber === 1) {
        total[currentplayer] = 0
    } else {
        total[currentplayer] = total[currentplayer] + currentnumber
    }

    if (currentplayer === 0) {
        currentplayer = 1
    }
    else {
        currentplayer = 0
    }
    render(currentnumber)

}

newgame.addEventListener('click', resetgame)

function resetgame() {

    total[0] = 0;
    total[1] = 0;
    current[0] = 0;
    current[1] = 0;
    currentplayer = 0;
    render(6)
}

passGame.addEventListener('click', passthegame)

function passthegame() {
    if (currentplayer === 1) {
        currentplayer = 0

    } else {
        currentplayer = 1
    }
    const currentnumber = getnumber()
    render(currentnumber)
}
render(6)
