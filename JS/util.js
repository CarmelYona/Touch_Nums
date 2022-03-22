'use strict'






function getNums(length = 16) {
    gNums = []
    for (var i = 0; i < length; i++) {
        gNums.push(i + 1)
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}