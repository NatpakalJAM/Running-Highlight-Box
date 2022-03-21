const boxesLength = document.querySelectorAll('.random-box .bg-random').length;
const maxLoop = 90
const minLoop = 70
const maxPercentLoop = 30

let index = 0
let maxRandLoop = 0
let randLoop = 0
let percentLoop = 0
let delay = 1

setRun = (callback, targetBox) => {
    if (targetBox == null || targetBox < 0 || targetBox > (boxesLength - 1)) {
        console.error('targetBox should not less than 0 and not over than boxes length')
        return
    }

    maxRandLoop = setLoop(randomIntFromInterval(maxLoop, minLoop), targetBox)
    randLoop = maxRandLoop
    percentLoop = maxPercentLoop
    delay = 1

    loop(callback)
}

loop = (callback) => {
    if (index >= boxesLength)
        index = 0

    createHighlightElement(index)

    if (randLoop == Math.round(percentage(maxRandLoop, percentLoop))) {
        percentLoop = percentLoop - 5
        delay++
    }

    index++
    randLoop--

    if (randLoop > 0) {
        setTimeout(() => {
            loop(callback)
        }, (50 * delay));
    } else {
        setTimeout(() => {
            callback()
        }, (600));
    }
}

setLoop = (mrl, tBox) => {
    return (mrl - (mrl % 20)) + (tBox + 1)
}

createHighlightElement = (index) => {
    if (document.querySelector(".random-box .bg-random .bg-animate") != null)
        document.querySelector(".random-box .bg-random .bg-animate").remove()
    let addHighlightBox = document.createElement('img')
    addHighlightBox.className = 'img-fluid bg-animate'
    addHighlightBox.src = 'images/bg-select.png'
    document.querySelectorAll('.box-' + index + ' .bg-random')[0].prepend(addHighlightBox)
}

randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

percentage = (value, percentage) => {
    return (value / 100) * percentage
}

/* ------------------------------------------------------------ */

// !!! PLEASE! remove this section down below & encrypt this script when you use this on production !!!

/* How to use this script 

1. add class box-<int> in .random-box manually (start from 0) like below
` <div class="random-box text-center"> `
                        VVV
` <div class="random-box box-0 text-center"> `

2. call `setRun` function
        function setRun(callback, targetBox)
        - callback = callback function (function)
        - targetBox = target box (int)
*/

// VVV remove test for production VVV

let randTarget = randomIntFromInterval(0,19)
console.log('target: ' + randTarget)

setRun(() => {
    alert('script by Jam')
}, randTarget)

/* ------------------------------------------------------------ */