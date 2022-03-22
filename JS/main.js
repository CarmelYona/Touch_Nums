'use strict'
console.log('Ex touch nums:')

var gNums = []
var gIdx = 0
var gCount = 0
var gBoardSize = 4
var gStopTimer;
var gElTimer = document.querySelector('.timer')

function init(num) {
    gBoardSize = num
    clearInterval(gStopTimer)
    getNums(gBoardSize * gBoardSize)
    renderBoard(gBoardSize)
    gElTimer.innerText = '0.000'
    gIdx = 0
    gCount = 0
}

function startTimer() {
    gCount += 0.004
    var currTime = gCount.toFixed(3)

    gElTimer.innerText = currTime
}

function cellClicked(clickedNum, elCell) {
    if (clickedNum !== gIdx + 1) return
    if (clickedNum === 1) {
        gStopTimer = setInterval(startTimer, 1)
    }
    elCell.classList.add('clicked')
    if (clickedNum === gIdx + 1) {
        console.log('clicked')
        gIdx++
        if (clickedNum === (gBoardSize * gBoardSize)) {
            gElTimer.innerText += '\n' + 'You Won!'
            clearInterval(gStopTimer)
        }
    } else return
}

function renderBoard(length) {
    var strHTML = ''
    for (var i = 0; i < length; i++) {
        strHTML += '<tr>'
        for (var j = 0; j < length; j++) {
            var idx = getRandomIntInclusive(0, gNums.length - 1)
            var num = gNums.splice(idx, 1)
            strHTML += `<td onclick="cellClicked(${num},this)" class="cell" >${num}</td>`
        }
        strHTML += `</tr>`
    }
    var elTable = document.querySelector('.board')
    elTable.innerHTML = strHTML
}